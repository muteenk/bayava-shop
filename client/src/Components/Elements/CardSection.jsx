import { Link } from "react-router-dom"


const CardSection = ({cards, title, viewAll}) => {
  return (
    <div className="px-[3em] mt-[2em]">
        <header className="flex justify-between items-center px-4 py-5">
          <h1 className="font-bold font-crimson-pro text-[2em]">{title}</h1>
          <Link to={viewAll} className="underline">View All Items</Link>
        </header>
        <div className="flex flex-wrap justify-center items-center">
          {
            cards.map((product, index) => (
              <div className="flex flex-col bg-[#ffffff] w-[22em] h-[30em] m-4" key={index}>
                <Link to={product.link}>
                  <img src={product.img} alt={product.alt} className="w-full h-[15em] rounded-md" />
                </Link>
                <Link to={product.link} >
                  <h1 className="text-[1.5em] font-bold">{product.title}</h1>
                  <p className="text-[1.2em] font-medium">₹{product.price}</p>
                </Link>
                <Link to={product.link} className="text-center text-[1.2em] bg-bayavaOrange hover:bg-hoverOverBrown text-[white] px-4 py-2 my-3 rounded-md">Add to Cart</Link>
              </div>
            ))
          }
        </div>
      </div>
  )
}

export default CardSection