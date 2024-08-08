import { FaArrowDown } from 'react-icons/fa'

const ButtonMore = () => {
  return (
    <a
      href='#skills'
      className='absolute z-30 bottom-20 text-yellow-400 text-glow text-xl transform left-1/2 -translate-x-1/2 md:hidden flex flex-col items-center border-2 p-2 rounded-lg'
    >
      <h1>More about me</h1>
      <FaArrowDown />
    </a>
  )
}
export default ButtonMore
