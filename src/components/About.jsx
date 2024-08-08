import SectionTitle from './SectionTitle'
import aboutSvg from '../assets/code-pair.svg'
// import Stars from '../assets/stars.png'
import Stars from './Stars'
import Tiefighter from './Tiefighter'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'

const About = () => {
  return (
    <section
      className='bg-black-to-gray py-20 flex items-center justify-center relative h-fit'
      id='about'
    >
      {/* <div className='fix'></div> */}
      <Stars position={'top'} />

      <div className='grid  grid-cols-1 2xl:grid-cols-2 container mx-20 xl:mx-40'>
        <article>
          <SectionTitle text='My Journey' />
          <p className='text-slate-400 leading-loose'>
            I am a self-taught web developer with a passion for creating dynamic
            and responsive web applications. My coding journey began about a
            year ago when I started with freeCodeCamp, after which I built a
            solid foundation in HTML, CSS, and JavaScript. Since then, I have
            been expanding my knowledge through various online courses and
            tutorials. After mastering the basics, I dove deeper into JavaScript
            and then advanced to learning React, which allowed me to understand
            the complexities of modern front-end development. Recently, I have
            been focusing on Next.js, which has enabled me to develop more
            sophisticated applications with features such as secure user
            authentication, transaction management, and real-time data updates.
          </p>
        </article>
        {/* <div className='h-screen absolute w-full top-0'>
          <Canvas camera={{ position: [0, 0, 5] }}>
            <Suspense fallback={null}>
              <ambientLight intensity={1} />
              <pointLight position={[0, 0, 0]} intensity={1} />
              <directionalLight
                position={[1, 2, 2]}
                // intensity={starHovered === true ? 3 : 2}
              />

              <Tiefighter
                // position={[40, -10, -30]}
                position={[220, 70, -220]}
                scale={0.05}
                // rotation={[0, Math.PI / 22, 0]}
                rotation={[0.4, -1, 0]}
              />
              {/* <OrbitControls second={true} target0={[0, 0, 0]} /> */}
        {/* </Suspense> */}
        {/* </Canvas> */}
        {/* </div> */}
        {/* <div className=''>
          <img src={aboutSvg} className='w-full h-64' />
        </div> */}
      </div>
    </section>
  )
}
export default About
