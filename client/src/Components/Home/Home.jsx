import Carousel from "./Carousel"
import CarouselData from "./HomeData"
import ImageCard from "../Elements/ImageCard"

function Home() {
  return (
    <div>
      <div className="bg-gradient-to-b from-softGray to-[white] w-screen mx-auto">
        <div className="flex justify-center items-center w-screen mx-auto">
          <Carousel slides={CarouselData} />
        </div>
      </div>
      <div className="relative top-[-6em] flex justify-center items-center gap-3">
        <ImageCard imgSrc="https://images.unsplash.com/photo-1661915606983-cc9759b99343?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cnVkcmFrc2h8ZW58MHwwfDB8fHww">
          <h1 className="text-4xl text-[white]">Rudraksh</h1>
        </ImageCard>
        <ImageCard imgSrc="https://plus.unsplash.com/premium_photo-1675053533678-615611ecc0b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
          <h1 className="text-4xl text-[white]">Offerings</h1>
        </ImageCard>
        <ImageCard imgSrc="https://images.unsplash.com/photo-1495298975657-492a1d068595?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE5hdHVyYWwlMjBGb29kc3xlbnwwfDB8MHx8fDA%3D">
          <h1 className="text-4xl text-[white]">Natural Foods</h1>
        </ImageCard>
        <ImageCard imgSrc="https://images.unsplash.com/photo-1627467959547-8e44da7aa00a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
          <h1 className="text-4xl text-[white]">Healthy and Immunity</h1>
        </ImageCard>
      </div>
      <div className="relative bg-[url('https://images.unsplash.com/photo-1495461199391-8c39ab674295?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"> 
        <div className="absolute h-full w-full bg-[#0000009d] z-0"></div>
        <h1 className="relative text-[white] font-crimson font-bold text-[4em] text-center z-10 py-[1em]">Gracious Gifts</h1>
      </div>
    </div>
  )
}

export default Home