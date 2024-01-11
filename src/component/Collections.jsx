import { useNavigate } from "react-router-dom";
import { productsTitle, productsBtnText, products } from "../data";
import { Link } from "react-router-dom";
import Product from "./Product";
import FadeIn from "./FadeIn";
import CategoryNav from "./CategoryNav";

const Collections = () => {
    const navigate = useNavigate();

    return (
        <div className="relative w-full h-screen mx-auto  bg-gray-300 bg-cover">
            <div className="container mx-auto">
                <div className="flex gap-x-[30px]">
                    <CategoryNav />
                </div>
                {/* <div className="flex justify-center pt-6">
                <h1 className="text-center 2xl:text-start text-fontBlack text-5xl lg:text-[64px] font-bold mb-6">
                    {productsTitle}
                </h1>
            </div> */}

                {/* <div className="flex flex-col justify-center py-16 md:flex-row ">
                <div className="py-2 md:px-2">
                    <Product title={products[0].title} price={products[0].price} img={products[0].img} />
                </div>
                <div className="py-2 md:px-2">
                    <Product title={products[0].title} price={products[0].price} img={products[0].img} />
                </div>
            </div> */}




                <div className="py-5">
                    <span className=" text-4xl border border-black rounded">
                        <button onClick={() => navigate("/")}>
                            Back
                        </button>
                    </span >
                </div>
            </div>
        </div>
    )
}

export default Collections;