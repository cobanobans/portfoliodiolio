import { useState } from 'react'
import { FaGithubSquare } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'
import { ImNewTab } from 'react-icons/im'

const ProjectsCard = ({ img, url, github, title, text, tech, note }) => {
  const [isMore, setIsMore] = useState(false)
  const handleSeeMore = () => {
    setIsMore(!isMore)
  }

  const handleOver = () => {
    // console.log('projectCard')
  }
  // console.log(text[0])
  return (
    <article
      onMouseOver={handleOver}
      className={`bg-slate-400 rounded-lg shadow-md hover:shadow-xl duration-300 opacity-80 hover:opacity-100 h-fit`}
    >
      <a href={url} target='_blank' rel='noopener noreferrer'>
        <img
          src={img}
          className='w-full object-cover rounded-t-lg 2xl:h-64 md:h-44'
          alt={title}
        />
      </a>
      <div className='capitalize p-8 flex flex-col'>
        <h2 className='text-xl tracking-wide font-medium flex flex-row items-center gap-5'>
          {title}
          {...tech}
        </h2>
        <p className='mt-4 text-slate-700 leading-2 2xl:leading-loose'>
          {isMore === false
            ? text.split(' ').slice(0, 13).join(' ') + ' ...'
            : text}
        </p>
        <button
          className='btn btn-primary mt-2 text-black capitalize  font-bold'
          onClick={handleSeeMore}
        >
          Show {isMore === true ? 'less' : 'more'}
        </button>
        <div className='mt-5 flex gap-x-4'>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            <ImNewTab className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
          </a>
          <a href={github} target='_blank' rel='noopener noreferrer'>
            <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
          </a>
        </div>
      </div>

      {/* <div className='align-element text-cyan-600 pb-4'>{note}</div> */}
    </article>
  )
}
export default ProjectsCard
