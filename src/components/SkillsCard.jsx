import React from 'react'

const SkillsCard = ({ icon, title, text, icon2 }) => {
  return (
    <article>
      <span className='flex flex-row gap-5'>
        {icon}
        {icon2}
      </span>
      <h4 className='font-bold mt-6 text-yellow-400'>{title}</h4>
      <p className='mt-2 text-white'>{text}</p>
    </article>
  )
}

export default SkillsCard
