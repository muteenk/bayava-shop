import Carousel from "./Carousel"
import CarouselData from "./HomeData"

function Home() {
  return (
    <div>
      <div className="bg-gradient-to-b from-softGray to-[white] w-[90vw] mx-auto">
        <div className="flex justify-center items-center w-[85vw] mx-auto">
          <Carousel slides={CarouselData} />
        </div>
      </div>
    </div>
  )
}

export default Home