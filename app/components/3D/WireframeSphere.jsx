'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function WireframeSphere({ mousePosition }) {
  const meshRef = useRef()
  const wireframeRef = useRef()

  // Create icosahedron geometry for a more interesting wireframe
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(2, 1), [])

  useFrame((state) => {
    if (!meshRef.current || !wireframeRef.current) return

    // Smooth rotation
    meshRef.current.rotation.x += 0.001
    meshRef.current.rotation.y += 0.002
    wireframeRef.current.rotation.x += 0.001
    wireframeRef.current.rotation.y += 0.002

    // Mouse interaction - subtle movement
    if (mousePosition) {
      meshRef.current.rotation.y += mousePosition.x * 0.0005
      meshRef.current.rotation.x += mousePosition.y * 0.0005
      wireframeRef.current.rotation.y += mousePosition.x * 0.0005
      wireframeRef.current.rotation.x += mousePosition.y * 0.0005
    }

    // Subtle floating animation
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    wireframeRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
  })

  return (
    <group>
      {/* Main wireframe */}
      <mesh ref={wireframeRef} geometry={geometry}>
        <meshBasicMaterial
          color="#00d4ff"
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>
      
      {/* Inner glow sphere */}
      <mesh ref={meshRef} geometry={geometry} scale={0.95}>
        <meshBasicMaterial
          color="#00d4ff"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Point light for glow effect */}
      <pointLight position={[0, 0, 0]} intensity={1} color="#00d4ff" distance={5} />
    </group>
  )
}
