"use client"

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, AsciiRenderer } from '@react-three/drei'
import * as THREE from 'three'

const JetFlame = ({ position }) => {
  const meshRef = useRef()
  
  const uniforms = useMemo(() => ({
    time: { value: 0 },
    colorA: { value: new THREE.Color(0xffff80) },
    colorB: { value: new THREE.Color(0xff4400) }
  }), [])

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `

  const fragmentShader = `
    uniform float time;
    uniform vec3 colorA;
    uniform vec3 colorB;
    varying vec2 vUv;
    
    void main() {
      vec2 center = vec2(0.5, 0.0);
      float dist = distance(vUv, center);
      float wave = sin(dist * 20.0 - time * 15.0) * 0.5 + 0.5;
      vec3 color = mix(colorA, colorB, wave);
      float alpha = smoothstep(1.0, 0.0, vUv.y) * smoothstep(0.5, 0.0, dist);
      gl_FragColor = vec4(color, alpha);
    }
  `

  useFrame((state) => {
    const { clock } = state
    meshRef.current.material.uniforms.time.value = clock.getElapsedTime()
  })

  return (
    <mesh ref={meshRef} position={position}>
      <coneGeometry args={[0.25, 1.2, 16]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent={true}
      />
    </mesh>
  )
}

function Spaceship() {
  const group = useRef()

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.05
    }
  })

  return (
    <group ref={group}>
      {/* Main body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.7, 4, 32, 1, true]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.3} metalness={0.7} side={THREE.DoubleSide} />
      </mesh>
      
      {/* Body cap (top) */}
      <mesh position={[0, 2, 0]}>
        <sphereGeometry args={[0.4, 32, 16, 0, Math.PI * 2, 0, Math.PI / 4]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.3} metalness={0.7} />
      </mesh>

      {/* Nose cone */}
      <mesh position={[0, 2.5, 0]}>
        <coneGeometry args={[0.4, 1, 32]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.3} metalness={0.7} />
      </mesh>

      {/* Cockpit window */}
      <mesh position={[0, 1.7, 0.35]}>
        <sphereGeometry args={[0.15, 32, 16, 0, Math.PI, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#CCCCCC" roughness={0.1} metalness={0.9} />
      </mesh>

      {/* Large fins */}
      {[-1, 1].map((x) => (
        <group key={`large-fin-${x}`} position={[x * 0.7, -1.8, 0]} rotation={[0, 0, x * Math.PI / 6]}>
          <mesh>
            <boxGeometry args={[0.1, 1.2, 0.8]} />
            <meshStandardMaterial color="#FFFFFF" roughness={0.4} metalness={0.6} />
          </mesh>
          <mesh position={[x * 0.05, 0.5, 0.35]} rotation={[0, 0, x * -Math.PI / 12]}>
            <boxGeometry args={[0.05, 0.8, 0.4]} />
            <meshStandardMaterial color="#FFFFFF" roughness={0.4} metalness={0.6} />
          </mesh>
        </group>
      ))}

      {/* Small fins */}
      {[-1, 1].map((x) => (
        <group key={`small-fin-${x}`} position={[x * 0.5, 0.2, 0]} rotation={[0, 0, x * Math.PI / 8]}>
          <mesh>
            <boxGeometry args={[0.1, 0.6, 0.5]} />
            <meshStandardMaterial color="#FFFFFF" roughness={0.4} metalness={0.6} />
          </mesh>
          <mesh position={[x * 0.05, 0.2, 0.2]} rotation={[0, 0, x * -Math.PI / 16]}>
            <boxGeometry args={[0.05, 0.4, 0.3]} />
            <meshStandardMaterial color="#FFFFFF" roughness={0.4} metalness={0.6} />
          </mesh>
        </group>
      ))}

      {/* Engine nozzles and flames */}
      {[[-0.3, 0], [-0.15, 0.26], [0.15, 0.26], [0.3, 0], [0, -0.26]].map((pos, i) => (
        <group key={`engine-${i}`} position={[pos[0], -2.1, pos[1]]}>
          <mesh>
            <cylinderGeometry args={[0.1, 0.12, 0.3, 16]} />
            <meshStandardMaterial color="#CCCCCC" roughness={0.5} metalness={0.8} />
          </mesh>
          <JetFlame position={[0, -0.25, 0]} />
        </group>
      ))}

      {/* Longitudinal ridges */}
      {[0, 1, 2, 3].map((i) => (
        <mesh key={`ridge-${i}`} position={[0, 0, 0]} rotation={[0, i * Math.PI / 2, 0]}>
          <boxGeometry args={[0.05, 4.5, 0.05]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.2} metalness={0.8} />
        </mesh>
      ))}

      {/* Surface details (panels) */}
      {[-1, 0, 1].map((y, i) => (
        <mesh key={`panel-${i}`} position={[0, y * 0.8, 0.45]} rotation={[0, 0, Math.PI / 2]}>
          <planeGeometry args={[0.8, 0.4]} />
          <meshStandardMaterial color="#EEEEEE" roughness={0.6} metalness={0.4} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  )
}

export function TheSpaceship() {
  return (
    <div className="w-full h-screen font-mono overflow-hidden">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Spaceship />
        <OrbitControls enableZoom={false} />
        <AsciiRenderer 
          resolution={0.3} 
          characters=' .,:;+*?%S#@'
          invert={false}
          fgColor=""
          bgColor=""
        />
      </Canvas>
    </div>
  )
}