/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 deathstar.gltf 
Author: SebastianSosnowski (https://sketchfab.com/SebastianSosnowski)
License: CC-BY-NC-ND-4.0 (http://creativecommons.org/licenses/by-nc-nd/4.0/)
Source: https://sketchfab.com/3d-models/death-star-star-wars-3d5f01485e9e4e8b9d995d7764341afe
Title: Death Star - Star Wars
*/

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { DirectionalLight } from 'three'
import Laser from './Laser'
import Links from './Links'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/deathstar.gltf')

  // const [laserRendered, setLaserRendered] = useState(false)

  const ref = useRef()
  // // const partRef = useRef()
  const [direction, setDirection] = useState(0.05)

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()

    ref.current.rotation.y += direction * delta

    // Reverse direction if rotation exceeds roughly one full circle (2π radians)
    if (ref.current.rotation.y > Math.PI * 2 || ref.current.rotation.y < 0) {
      setDirection((prev) => -prev)
      ref.current.rotation.y = direction > 0 ? Math.PI * 2 : 0
    }

    // ref.current.rotation.y += delta * 1
    ref.current.rotation.x = 0.2

    if (props.hovered === true) {
      // ref.current.rotation.y += delta * 0.09
      // ref.current.rotation.y = Math.PI / 5
      ref.current.scale.set(1.01, 1.01, 1.01)
      // materials.material.roughness = 2
      // materials.material.metalness = 1.4
      ref.current.rotation.y += (0.5 - ref.current.rotation.y) * 0.05
    } else {
      ref.current.scale.set(1, 1, 1)

      // console.log('Frame out of hover')
    }

    if (props.click === true) {
      setLaserRendered(true)
    } else {
      setLaserRendered(false)
    }

    // ref.current.scale.set = 2
  })

  const [laserRendered, setLaserRendered] = useState(false)

  return (
    <>
      <group
        ref={ref}
        {...props}
        dispose={null}
        // onClick={() => setLaserRendered(true)}

        // onPointerOver={() => setHover(true)}
        // onPointerOut={() => setHover(false)}
      >
        <mesh
          // ref={partRef}
          geometry={nodes.DeathStar001_1_0.geometry}
          material={materials.material}
          rotation={[-Math.PI / 2, 0, 0]}
          // scale={scaleHovered}
        />
        <mesh
          // ref={partRef}
          geometry={nodes.DeathStar_misa001_2_0.geometry}
          material={materials.material_1}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        {laserRendered && <Laser />}
      </group>
      {/* {laserRendered && (
        <div className='fixed top-1/2 right-20 transform -translate-y-1/2'>
          <Links />
        </div>
      )} */}
    </>
  )
}

useGLTF.preload('/deathstar.gltf')
