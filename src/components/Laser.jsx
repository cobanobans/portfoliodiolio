import React, { useRef, useEffect, useState, act } from 'react'
import { useSpring, animated } from '@react-spring/three'
import { useFrame } from '@react-three/fiber'

export default function Cylinder() {
  const ref = useRef()
  const [active, setActive] = useState(false)

  useFrame(() => {
    ref.current.rotation.x = -5
    ref.current.rotation.y = 50
  })

  const { scale } = useSpring({
    scale: !active ? [7, 0, 2] : [1.5, 11, 2],
    // position: !active ? [0, 0.05, 0] : [0, 3, 0],
    // position: [0, 111, 0],

    config: { duration: 1000 },
  })
  const { position } = useSpring({
    position: active ? [0, 7, 10] : [0, 0, 0],
    config: { duration: 1000 },
  })

  useEffect(() => {
    setActive(true)

    const timer = setTimeout(() => {
      setActive(false)
    }, 1800)

    return () => clearTimeout(timer)
  }, [])

  return (
    <animated.mesh
      ref={ref}
      scale={scale}
      // onClick={() => setActive(!active)}
      position={position}
    >
      <cylinderGeometry args={[1, 1, 22, 32]} />
      {/* args: [radiusTop, radiusBottom, height, radialSegments] */}
      <meshPhysicalMaterial
        color='green'
        emissive='green'
        emissiveIntensity={2}
        metalness={0.9}
        roughness={0.1}
        transparent={true}
        opacity={0.8}
        clearcoat={1}
        clearcoatRoughness={0}
      />
    </animated.mesh>
  )
}
