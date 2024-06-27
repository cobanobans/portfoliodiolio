import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import { links } from '../Data'

// const links = [
//   { id: nanoid(), href: '#home', text: 'home' },
//   { id: nanoid(), href: '#about', text: 'about' },
//   { id: nanoid(), href: '#skills', text: 'skills' },
//   { id: nanoid(), href: '#projects', text: 'projects' },
// ]

const Links = () => {
  const [showItems, setShowItems] = useState([])

  useEffect(() => {
    links.forEach((_, index) => {
      setTimeout(() => {
        setShowItems((prev) => [...prev, index])
      }, index * 500)
    })
  }, [])

  const [hovered, setIsHovered] = useState(false)

  return (
    <div
      className=' pl-20'
      onMouseOut={() => setIsHovered(false)}
      onMouseOver={() => setIsHovered(true)}
    >
      <ul className='text-white'>
        {links.map((link, index) => (
          <li
            key={link.id}
            className={`capitalize text-3xl my-10 transition-opacity duration-500   flex  ${
              // hovered === true ? 'pr-10 justify-start' : 'pr-5 justify-end'
              'pr-5 justify-end'
            }  ${showItems.includes(index) ? 'opacity-100 ' : 'opacity-0'}`}
          >
            <a href={link.href} className='hover:text-yellow-400'>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Links
