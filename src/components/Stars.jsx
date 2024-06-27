import SingleStar from '../assets/singleStar.png'

const min = -10
const max = 50

const getRandomPosition = () => ({
  top: `${Math.floor(Math.random() * (max - min) + min)}%`,
  left: `${Math.floor(Math.random() * 120)}%`,
})

// Width random finish it !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const getRandomWidth = () => {
  return Math.floor(Math.random() * 5)
}

const Stars = ({ position }) => {
  console.log(position)
  const stars = []
  // let leftValue = 1
  for (let i = 0; i < 180; i++) {
    const position = getRandomPosition()
    const width = getRandomWidth()

    stars.push(
      <div
        key={i}
        className={`absolute bg-inherit`}
        style={{
          top: position.top,
          left: position.left,
          width: width,
        }}
      >
        <img src={SingleStar} alt='single star' className='w-full' />
      </div>
    )
  }

  return <>{stars}</>
}
export default Stars
