import Load from "../../assets/loading.gif"

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
        <img src={Load} className="h-[50px] w-[50px]" alt="Loading" />
    </div>
  )
}

export default Loading