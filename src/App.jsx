import { Suspense, useEffect, useRef, useState } from 'react'

import './App.css'
import { Canvas, useFrame, extend } from '@react-three/fiber'

import Xwinganim from '../public/Xwinganim'
import DeathStar from '../public/Deathstar'
import Tiefighter from '../public/Tiefighter'
import Home from './components/Home'
import Links from './components/Links'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Stars from './components/Stars'
import Projects from './components/Projects'

function App() {
  // const cameraRef = useRef()
  // const ref = useRef()

  // in new component-----------
  // const [displayMore, setDisplayMore] = useState(false)
  // const [starHovered, setStarHovered] = useState(false)

  // const handlePointerOver = () => {
  //   // console.log('123')
  //   setDisplayMore(true)
  //   setStarHovered(true)
  // }

  // const handlePointerOut = async () => {
  //   setDisplayMore(false)
  // }
  // const planeRef = useRef()
  // const [navLinksActive, setNavlinksActive] = useState(false)
  // end new comp. -------------------

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setNavlinksActive(true)
  //     console.log('activated')
  //   }, 1800)

  //   return () => clearTimeout(timer)
  // }, [navLinksActive])

  return (
    <>
      <Hero />

      <Skills />
      <Projects />
      <About />
    </>
  )
}

export default App
