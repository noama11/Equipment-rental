import { Link } from "react-router-dom";
import { products } from "../data";
import { BsPlus, BsEyeFill } from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import { menu, close } from '../assets'





const ProductNew = ({ title, price, img, handleToggle, Id }) => {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);

    const handleToggle1 = () => {
        setToggle(!toggle);
    }

    return (
        <div>
            <div className="border border-[#e4e4e4] h-[300px]  max-w-[500px] mb-2 relative overflow-hidden group transition ">
                <div className="w-full h-full">
                    <div className="w-[200px]  flex mx-auto justify-center items-center pt-6">
                        <img className="max-h-[160px] group-hover:scale-110 transition flex justify-center items-center duration-300"
                            src={img} alt="" />
                    </div>
                </div>

                {/* buttons: */}
                <div className="absolute top-6 -right-11 group-hover:right-5  p-2 flex flex-col items-center
                 justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all">
                    <button>
                        <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
                            <BsPlus className="text-3xl" />
                        </div>
                    </button>

                    <Link to={`/products/${Id}`}
                        className="w-12 h-12 bg-white flex justify-center items-center text-black drop-shadow-xl">
                        <BsEyeFill />
                    </Link>
                </div>
            </div>

            <div>
                <div className="font-thin">
                    {title}
                </div>

                <div className="font-semibold">Generator - Electric Mode</div>
                <div className="font-semibold">{price}</div>
            </div>


        </div>
    )
}

export default ProductNew;