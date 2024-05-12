import { Link } from "react-router-dom"
import Logo from "../../assets/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-bayavaYellow rounded-tl-[5em]">
        <div className="flex justify-center items-start px-[7em] pt-[3em]">
            <div className="flex flex-col w-[22%] mx-6">
                <div className="bg-[white] w-fit rounded-full mb-8">
                  <img src={Logo} alt="Bayava" />
                </div>
                <p className="text-[1.2em] font-crimson-pro font-light text-[black]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
                <h1 className="text-[2em] font-bold text-[black]">Office</h1>
                <ul>
                  <li>XYZ Road, Example Address, Country - 000000</li>
                  <li>example@examplemail.com</li>
                  <li>+91 99999 99999</li>
                </ul>
            </div>
            <div className="flex flex-col w-[30%]">
                <h1 className="text-[2em] font-bold text-[black]">Quick Links</h1>
                <Link to="/" className="text-[1.2em] font-crimson-pro font-light text-[black]">Home</Link>
                <Link to="/yoga-store" className="text-[1.2em] font-crimson-pro font-light text-[black]">Yoga Store</Link>
                <Link to="/ayurveda-store" className="text-[1.2em] font-crimson-pro font-light text-[black]">Ayurveda Store</Link>
                <Link to="/login" className="text-[1.2em] font-crimson-pro font-light text-[black]">Login</Link>
                <Link to="/signup" className="text-[1.2em] font-crimson-pro font-light text-[black]">Signup</Link>
            </div>
            <div className="flex flex-col w-[30%]">
                <h1 className="text-[2em] font-bold text-[black]">Contact Us</h1>
                <ul>
                  <li>
                    <Link>Facebook</Link>
                  </li>
                  <li>
                    <Link>Instagram</Link>
                  </li>
                  <li>
                    <Link>Twitter</Link>
                  </li>
                  <li>
                    <Link>Youtube</Link>
                  </li>
                </ul>
            </div>
        </div>
        <p className="text-[black] font-crimson-pro font-bold px-8 py-8 text-[18px]">
            All Rights Reserved &copy; Bayava
        </p>
    </footer>
  )
}

export default Footer