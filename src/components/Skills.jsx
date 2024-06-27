import React, { Suspense } from 'react'
import SectionTitle from './SectionTitle'
import { skills } from '../Data'
import SkillsCard from './SkillsCard'
import { Canvas } from '@react-three/fiber'
import Tiefighter from './Tiefighter'
import Stars from './Stars'

const Skills = () => {
  return (
    <section
      className='align-element bg-black-to-gray pt-20s relative'
      id='skills'
    >
      <Stars />
      <div className='flex flex-col mx-20 xl:mx-40 bg-transparent'>
        <SectionTitle text='tech stack' />
        <div className='py-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {skills.map((skill) => {
            return <SkillsCard key={skill.id} {...skill} />
          })}
        </div>
      </div>
      {/* <div className='h-screen'>
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
    </section>
  )
}

export default Skills
