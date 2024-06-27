import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Planet = () => {
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[6, 32, 32]} />
      <meshStandardMaterial color='blue' />
    </mesh>
  )
}
export default Planet
