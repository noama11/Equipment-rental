
import { motion, useAnimation } from "framer-motion";
import { products } from "../data";
import { Link, useParams } from "react-router-dom";
import { MdCancel } from "react-icons/md";

const DisplayProduct = ({ product }) => {
    const description = ": These include incandescent, fluorescent, LED, and halogen bulbs that emit light in different ways, offering varying levels of brightness, color temperature, and energy efficiency."
    return (
        <div className="">
            <section className="relative pt-32 pb-12 lg:py-32 h-screen flex items-center bg-white">
                <motion.div
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    initial={{
                        y: -100, // Start off-screen, above the viewport
                        opacity: 0, // Start with opacity 0 for a fade-in effect
                    }}
                    transition={{
                        duration: 1.25,
                        type: "tween",
                        delay: 0.2,
                        ease: [0.25, 0.25, 0.25, 0.75],
                    }}
                    className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center">
                        {/* Image: */}
                        <motion.div
                            animate={{
                                y: 0,
                                opacity: 1
                            }}
                            initial={{
                                y: -100, // Start off-screen, above the viewport
                                opacity: 0, // Start with opacity 0 for a fade-in effect
                            }}
                            transition={{
                                duration: 1.25,
                                type: "tween",
                                delay: 0.2,
                                ease: [0.25, 0.25, 0.25, 0.75],
                            }}
                            className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
                            <img className="max-w-[200px] lg:max-w-sm" src={product.img} alt="" />
                        </motion.div>
                        {/* Text: */}
                        <div className="flex-1 text-center lg:text-left">
                            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto">{product.title}</h1>
                            <div className="text-xl text-red-500 font-medium mb-6">{product.price}</div>
                            <p className="mb-8">{description}</p>
                        </div>

                    </div>

                </motion.div>

                {/* <Link to={"/"}
                    className="absolute text-black text-2xl right-10 bottom-10 border p-2 rounded-md bg-gray-50 hover:scale-110 transition">
                    Back
                </Link> */}

            </section>
        </div>
    )
}



const ProductDetails = () => {
    const param = useParams();
    const productId = param.id;
    return (
        <DisplayProduct product={products[0]} />
    )
}

export default ProductDetails;