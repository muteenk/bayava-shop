import { Link } from "react-router-dom"

const Categories = ({categories}) => {
  return (
    <div>
        <h1 className="text-[4em] text-center font-light font-crimson-pro py-5">Categories</h1>

        <div className='md:columns-3 sm:columns-2 columns-1 w-[90%] mx-auto my-[5em]'>
            {
                categories.map((category, index) => (
                    <Link to={category.link}>
                        <div className={`group relative flex flex-col items-center justify-center my-4`} key={index}>
                            <img src={category.img} alt={category.alt} className="rounded-md h-full w-full" />
                            <div className="bg-[#0000008a] absolute top-0 left-0 h-full w-full group-hover:h-0 transition-all duration-700 ease-in-out z-0"></div>
                            <div className="w-full flex flex-col justify-center items-start absolute bottom-0 left-0 group-hover:opacity-0 transition-all duration-700 z-10 px-4 py-3">
                                <h1 className="text-[2em] font-bold text-left my-3 text-[white]">{category.title}</h1>
                                <p className="text-left text-bayavaOrange drop-shadow-lg font-semibold">{category.subTitle}</p>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Categories