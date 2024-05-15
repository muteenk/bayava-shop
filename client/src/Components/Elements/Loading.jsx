import Load from "../../assets/loading.gif"

const Loading = () => {
  return (
    <div className="flex justify-center items-center py-5 my-28">
        <img src={Load} className="h-[50px] w-[50px]" alt="Loading" />
    </div>
  )
}

export default Loading