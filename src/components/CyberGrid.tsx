import React, { useRef, useMemo, memo, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { gsap } from 'gsap';

// Grid component that creates the cyber floor/grid
const Grid = memo(() => {
  const gridRef = useRef<THREE.GridHelper>(null);
  
  useFrame(({ clock }) => {
    if (gridRef.current) {
      // Optimize by using modulo operation only once per frame
      const time = clock.getElapsedTime();
      gridRef.current.position.z = (time * 0.3) % 1;
      // Reduce sine calculation frequency for better performance
      gridRef.current.rotation.x = Math.sin(time * 0.05) * 0.02;
    }
  });

  return (
    <group>
      <gridHelper 
        ref={gridRef} 
        args={[30, 20, 0x9b87f5, 0x310a5d]} // Reduced grid divisions from 30 to 20
        position={[0, -2, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
});

Grid.displayName = 'Grid';

// Particles effect - with reduced count for better performance
const Particles = memo(() => {
  const particlesRef = useRef<THREE.Points>(null);
  // Further reduced particle count for better performance
  const count = 150;
  
  // Create particles positions
  const positions = useMemo(() => {
    const posArray = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      posArray[i3] = (Math.random() - 0.5) * 20;
      posArray[i3 + 1] = (Math.random() - 0.5) * 20;
      posArray[i3 + 2] = (Math.random() - 0.5) * 20;
    }
    return posArray;
  }, [count]);

  // Create shared material and geometry for better performance
  const pointsMaterial = useMemo(() => 
    new THREE.PointsMaterial({ 
      size: 0.1, 
      color: new THREE.Color("#9b87f5"), 
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending // Add blending for better visual effect
    }), 
  []);
  
  useFrame(({ clock }) => {
    if (particlesRef.current) {
      // Reduce rotation speed for smoother animation
      const time = clock.getElapsedTime();
      particlesRef.current.rotation.y = time * 0.01;
      particlesRef.current.rotation.z = Math.sin(time * 0.03) * 0.05;
    }
  });
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <primitive object={pointsMaterial} />
    </points>
  );
});

Particles.displayName = 'Particles';

// Simplified Cybersphere component
const CyberSphere = memo(() => {
  const sphereRef = useRef<THREE.Mesh>(null);
  
  // Create shared geometry and material for better performance
  const sphereGeometry = useMemo(() => new THREE.SphereGeometry(1.5, 12, 12), []); // Reduced segments
  const sphereMaterial = useMemo(() => 
    new THREE.MeshStandardMaterial({
      color: "#310a5d",
      roughness: 0.4,
      metalness: 0.8,
      emissive: new THREE.Color("#9b87f5"),
      emissiveIntensity: 0.2,
      wireframe: true
    }),
  []);
  
  React.useEffect(() => {
    if (sphereRef.current) {
      // Animate sphere on mount
      gsap.to(sphereRef.current.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        delay: 0.2
      });
    }
  }, []);
  
  useFrame(({ clock }) => {
    if (sphereRef.current) {
      // Slower rotation for smoother animation
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });
  
  return (
    <group position={[0, 0, -5]}>
      <mesh 
        ref={sphereRef} 
        scale={[0.001, 0.001, 0.001]} // Start small for animation
        geometry={sphereGeometry}
        material={sphereMaterial}
      />
    </group>
  );
});

CyberSphere.displayName = 'CyberSphere';

// Lights component - simplified for better performance
const Lighting = memo(() => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#9b87f5" />
    </>
  );
});

Lighting.displayName = 'Lighting';

// Camera setup component
const CameraSetup = memo(() => {
  return (
    <OrbitControls 
      enableZoom={false} 
      enablePan={false}
      enableRotate={false}
    />
  );
});

CameraSetup.displayName = 'CameraSetup';

// Performance optimized scene settings
const sceneConfig = {
  camera: { position: [0, 5, 10] as [number, number, number], fov: 75 },
  dpr: [0.8, 1.5] as [number, number], // Adjusted DPR for better quality
  gl: { 
    antialias: false,
    alpha: true,
    powerPreference: 'high-performance' as const,
    precision: 'mediump' as const // Increased precision for better rendering
  },
  performance: { min: 0.5 },
  frameloop: 'always' as const // Changed to 'always' to ensure animations run
};

// Main Three.js canvas component
const CyberGrid: React.FC = memo(() => {
  // Use ref to clean up render loop on unmount
  const requestRef = useRef<number>();
  
  useEffect(() => {
    // Force re-render to keep animation smooth
    const animate = () => {
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);
  
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={sceneConfig.camera}
        dpr={sceneConfig.dpr}
        gl={sceneConfig.gl}
        performance={sceneConfig.performance}
        frameloop={sceneConfig.frameloop}
        style={{ background: '#121212' }} // Set background color directly
      >
        <color attach="background" args={['#121212']} />
        <fog attach="fog" args={['#121212', 5, 30]} />
        <Lighting />
        <Grid />
        <Particles />
        <CyberSphere />
        <CameraSetup />
      </Canvas>
    </div>
  );
});

export default CyberGrid; 