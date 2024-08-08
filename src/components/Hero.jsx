import { Suspense, useEffect, useRef, useState } from 'react'

import '../App.css'
import { Canvas, useFrame, extend } from '@react-three/fiber'

// import Xwinganim from '../public/Xwinganim'
import Xwinganim from './Xwinganim'
import DeathStar from './Deathstar'
import Tiefighter from './Tiefighter'
import Home from './Home'
import Links from './Links'
import { Html, useGLTF, useProgress } from '@react-three/drei'
import ButtonMore from './ButtonMore'

const Hero = () => {
  // const [laserRendered, setLaserRendered] = useState(false)

  // // const partRef = useRef()

  // useFrame((state, delta) => {
  // ref.current.rotation.y += delta * 0.2
  // ref.current.rotation.x = 0.2
  // if (props.hovered === true) {
  //   // ref.current.rotation.y += delta * 0.09
  //   // ref.current.rotation.y = Math.PI / 5
  //   ref.current.scale.set(1.01, 1.01, 1.01)
  //   // ref.current.material
  //   // materials.material.roughness = 2
  //   // materials.material.metalness = 1.4
  //   ref.current.rotation.y += (0.5 - ref.current.rotation.y) * 0.05
  // } else {
  //   ref.current.scale.set(1, 1, 1)
  //   // console.log('Frame out of hover')
  // }
  // ref.current.scale.set = 2
  // })
  // const cameraRef = useRef()
  // const ref = useRef()

  const [displayMore, setDisplayMore] = useState(false)
  const [starHovered, setStarHovered] = useState(false)

  const handlePointerOver = () => {
    // console.log('123')
    setDisplayMore(true)
    setStarHovered(true)
  }

  const handlePointerOut = async () => {
    setDisplayMore(false)
    setStarHovered(false)
  }
  const planeRef = useRef()
  // const refStar = useRef()

  const [navLinksActive, setNavlinksActive] = useState(false)
  const [click, setClick] = useState(false)

  useEffect(() => {
    if (click === true && window.innerWidth > 600) {
      setTimeout(() => {
        setNavlinksActive(!navLinksActive)
        setClick(false)
      }, 1800)
    }
  }, [click])

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setNavlinksActive(true)
  //     console.log('activated')
  //   }, 1800)

  //   return () => clearTimeout(timer)
  // }, [navLinksActive])

  const [isLoaded, setIsLoaded] = useState(false)

  const Loader = () => {
    const { progress } = useProgress()

    if (progress > 80) {
      setIsLoaded(true)
    }
    console.log(progress)
    return (
      <Html center>
        <h1 className='text-white'>{Math.trunc(progress)} % loaded</h1>
      </Html>
    )
  }

  return (
    <div className='h-screen background-image relative' id='home'>
      <div className=' absolute left-1/2 transform -translate-x-1/2 top-10  md:top-1/2 md:left-0 md:-translate-x-0  md:-translate-y-1/2 md:flex md:flex-col'>
        {isLoaded && <Home />}
      </div>
      {/* <div
        className={`lg:hidden absolute top-1/2 left-1/2 transform -translate-y-1/2`}
      >
        <Home />
      </div> */}

      {displayMore && (
        <button className='btn bottom-1/4 translate-y-1/2 left-1/2 transform -translate-x-1/2 text-white border-white  p-2 absolute hover:text-yellow-400 z-30'>
          toggle navbar
        </button>
      )}
      <div className='w-full h-screen'>
        <Canvas camera={{ position: [5, 5, 120], fov: 100 }}>
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={1} />
            <pointLight position={[0, 0, 0]} intensity={1} />
            <directionalLight
              position={[10, 10, 10]}
              intensity={starHovered === true ? 3 : 2}
            />
            {/* <mesh
            ref={planeRef}
            // onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
          >
            <planeGeometry args={[300, 200]} />
            <meshBasicMaterial transparent opacity={0} />
          </mesh> */}
            <DeathStar
              // ref={refStar}
              // onClick={() => setLaserRendered(true)}
              // laserRendered={laserRendered}
              position={[0, 0, 0]}
              onPointerOver={handlePointerOver}
              // onPointerOut={handlePointerOut}
              hovered={starHovered}
              onPointerOut={handlePointerOut}
              onClick={() => setClick(true)}
              click={click}
              // onLoad={setIsLoaded(true)}
            />
            <Xwinganim position={[100, 0, 5]} />
            <Xwinganim position={[110, 10, 5]} />
            {/* <Tiefighter
              position={[0, 20, 130]}
              scale={0.01}
              rotation={[0, Math.PI / 4, 0]}
            /> */}
            {/* <OrbitControls second={true} target0={[0, 0, 0]} /> */}
          </Suspense>
        </Canvas>
      </div>

      <div className='fixed hidden md:flex top-1/2 right-0 transform -translate-y-1/2 z-30'>
        {navLinksActive && <Links />}
      </div>
      {isLoaded && <ButtonMore />}
    </div>
  )
}
export default Hero
