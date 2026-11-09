import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, Float } from '@react-three/drei'
import * as THREE from 'three'

const RED = '#D10F29'
const CREAM = '#FFF9F0'

function LogoSticker() {
  return (
    <group position={[0, -0.05, 0.735]}>
      <mesh>
        <circleGeometry args={[0.225, 40]} />
        <meshStandardMaterial color={CREAM} roughness={0.7} />
      </mesh>
      <mesh position={[0, 0, 0.008]}>
        <torusGeometry args={[0.155, 0.017, 10, 48]} />
        <meshStandardMaterial color={RED} roughness={0.45} />
      </mesh>
      <mesh position={[0, 0, 0.012]}>
        <boxGeometry args={[0.016, 0.23, 0.006]} />
        <meshStandardMaterial color={RED} roughness={0.45} />
      </mesh>
      <mesh position={[0.055, 0, 0.012]} rotation={[0, 0, -Math.PI / 2]}>
        <circleGeometry args={[0.075, 24, 0, Math.PI]} />
        <meshStandardMaterial color={RED} roughness={0.45} />
      </mesh>
    </group>
  )
}

function Cup() {
  const cupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!cupRef.current) return
    const time = state.clock.getElapsedTime()
    cupRef.current.rotation.y = -0.22 + Math.sin(time * 0.45) * 0.1
    cupRef.current.position.y = Math.sin(time * 0.8) * 0.035
  })

  return (
    <group ref={cupRef} rotation={[0.06, -0.22, 0.035]}>
      {/* Cup body */}
      <mesh castShadow>
        <cylinderGeometry args={[0.8, 0.62, 1.75, 64]} />
        <meshStandardMaterial color={RED} roughness={0.38} metalness={0.02} />
      </mesh>

      {/* Cream sleeve */}
      <mesh position={[0, -0.12, 0]}>
        <cylinderGeometry args={[0.705, 0.66, 0.48, 64]} />
        <meshStandardMaterial color={CREAM} roughness={0.65} />
      </mesh>

      {/* Lid */}
      <mesh position={[0, 0.92, 0]}>
        <cylinderGeometry args={[0.86, 0.83, 0.14, 64]} />
        <meshStandardMaterial color={CREAM} roughness={0.55} />
      </mesh>
      <mesh position={[0, 1.02, 0]}>
        <cylinderGeometry args={[0.69, 0.82, 0.1, 64]} />
        <meshStandardMaterial color="#FFF4E3" roughness={0.5} />
      </mesh>
      {/* Straw */}
      <group position={[0.26, 1.38, 0]} rotation={[0, 0, -0.24]}>
        <mesh>
          <cylinderGeometry args={[0.055, 0.055, 1.02, 20]} />
          <meshStandardMaterial color={CREAM} roughness={0.4} />
        </mesh>
        <mesh position={[0, 0.18, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 0.12, 20]} />
          <meshStandardMaterial color={RED} roughness={0.4} />
        </mesh>
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 0.12, 20]} />
          <meshStandardMaterial color={RED} roughness={0.4} />
        </mesh>
      </group>

      <LogoSticker />

      {/* Cup bottom rim */}
      <mesh position={[0, -0.88, 0]}>
        <torusGeometry args={[0.615, 0.024, 10, 64]} />
        <meshStandardMaterial color={RED} roughness={0.45} />
      </mesh>
    </group>
  )
}

function Bean({
  position,
  rotation,
  scale = 1,
}: {
  position: [number, number, number]
  rotation: [number, number, number]
  scale?: number
}) {
  const ref = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!ref.current) return
    const time = state.clock.getElapsedTime()
    ref.current.rotation.y += 0.0025
    ref.current.position.y = position[1] + Math.sin(time * 0.9 + position[0]) * 0.06
  })

  return (
    <group ref={ref} position={position} rotation={rotation} scale={scale}>
      <mesh scale={[0.2, 0.29, 0.115]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#4A2E21" roughness={0.45} />
      </mesh>
      <mesh position={[0, 0.02, 0.105]} scale={[0.022, 0.22, 0.012]} rotation={[0, 0, 0.32]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color="#2A1811" roughness={0.6} />
      </mesh>
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.15} />
      <directionalLight position={[4, 6, 5]} intensity={2.5} color="#FFF4E3" />
      <directionalLight position={[-5, 1, 2]} intensity={0.9} color="#FFE49A" />
      <pointLight position={[0, -2.5, 3]} intensity={1.2} color="#F4A261" />

      <group position={[0, -0.1, 0]}>
        <Float speed={1.35} rotationIntensity={0.18} floatIntensity={0.65}>
          <Cup />
        </Float>

        <Bean position={[-1.65, 0.95, 0.25]} rotation={[0.35, -0.4, 0.5]} scale={0.95} />
        <Bean position={[1.55, -0.65, 0.2]} rotation={[-0.3, 0.55, -0.4]} scale={0.8} />
        <Bean position={[1.35, 1.2, -0.4]} rotation={[0.5, 0.2, 0.9]} scale={0.55} />
        <Bean position={[-1.3, -1.1, -0.35]} rotation={[-0.4, -0.7, 0.2]} scale={0.5} />
      </group>

      <ContactShadows
        position={[0, -1.42, 0]}
        opacity={0.28}
        scale={5.5}
        blur={2.8}
        far={3.2}
        resolution={256}
        color="#30241F"
      />
    </>
  )
}

export default function CoffeeScene() {
  return (
    <Canvas
      dpr={[1, 1.65]}
      camera={{ position: [0, 0.25, 6.2], fov: 35 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ touchAction: 'pan-y' }}
      aria-hidden="true"
      className="!absolute inset-0"
    >
      <Scene />
    </Canvas>
  )
}
