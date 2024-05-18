import Load from "../../assets/loading-yoga.gif"

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center py-5 my-28">
        <img src={Load} className="h-[11em] w-[11em] shadow-md  rounded-full" alt="Loading" />
        <p className="font-crimson-pro font-bold text-[1.5em]">Stay Calm ! We are getting stuff ready</p>
    </div>
  )
}

export default Loading