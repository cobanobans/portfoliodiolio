import React from 'react'

const SectionTitle = ({ text }) => {
  return (
    <div className='border-b border-gray-200 pb-5 text-glow'>
      <h2 className='text-3xl font-medium tracking-wider capitalize text-yellow-400'>
        {text}
      </h2>
    </div>
  )
}

export default SectionTitle
