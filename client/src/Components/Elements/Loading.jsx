import Load from "../../assets/loading.gif"

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
        <img src={Load} className="h-[55px] w-[55px]" alt="Loading" />
    </div>
  )
}

export default Loading