import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei'

const FloatingShape = () => {
  const meshRef = useRef()

  useFrame((state) => {
    const { mouse } = state
    const t = performance.now() * 0.001

    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.x = t * 0.2
      meshRef.current.rotation.y = t * 0.3

      // Subtle follow mouse
      meshRef.current.position.x = (mouse.x * 0.5)
      meshRef.current.position.y = (mouse.y * 0.5)
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.5}>
        <MeshDistortMaterial
          color="#0ea5e9"
          speed={3}
          distort={0.4}
          radius={1}
          reflectivity={0.5}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

const Modern3DScene = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#0ea5e9" intensity={1} />
        <FloatingShape />
      </Canvas>
    </div>
  )
}

export default Modern3DScene
