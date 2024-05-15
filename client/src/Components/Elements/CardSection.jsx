import { Link } from "react-router-dom"


const CardSection = ({children: cards, title, viewAll}) => {
  return (
    <div className="px-[3em] mt-[2em]">
        <header className="flex justify-between items-center px-4 py-5">
          <h1 className="font-bold font-crimson-pro text-[2em]">{title}</h1>
          <Link to={viewAll} className="underline">View All Items</Link>
        </header>
        <div className="flex flex-wrap justify-center items-center">
          {cards}
        </div>
      </div>
  )
}

export default CardSection