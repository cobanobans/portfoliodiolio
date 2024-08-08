import ProjectsCard from './ProjectsCard'
import { projects } from '../Data'
import SectionTitle from './SectionTitle'
import Stars from './Stars'

const Projects = () => {
  return (
    <section className='align-element bg-gray-to-black py-20' id='projects'>
      <div className='mx-20 xl:mx-40 bg-inherit'>
        <SectionTitle text='Projects' />
        <div className='pt-20  lg:grid lg:grid-cols-3 flex flex-col gap-20 w-full'>
          {projects.map((project) => {
            return <ProjectsCard key={project.id} {...project} />
          })}
        </div>
      </div>
    </section>
  )
}
export default Projects
