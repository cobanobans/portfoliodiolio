import ProjectsCard from './ProjectsCard'
import { projects } from '../Data'
import SectionTitle from './SectionTitle'
import Stars from './Stars'

const Projects = () => {
  return (
    <section
      className='align-element bg-gray-to-black h-screen relative'
      id='projects'
    >
      <div className='mx-40 bg-inherit mt-10 absolute'>
        <SectionTitle text='Projects' />
        <div className='pt-20  grid lg:grid-cols-3 grid-cols-2 gap-8 w-full'>
          {projects.map((project) => {
            return <ProjectsCard key={project.id} {...project} />
          })}
        </div>
      </div>
    </section>
  )
}
export default Projects
