import { productsTitle, productsBtnText, products } from "../data";
import starsIcon from "../assets/stars-icon.svg";
import plusIcon from "../assets/plus-icon.svg";


const Product = ({ title, price, img }) => {
    return (
        // <div className="relative flex flex-col bg-white max-w-[200px] shadow rounded">
        //     <img
        //         src={img}
        //         alt={title}
        //     />
        //     <div className="bottom-0 w-full shadow-md px-8 flex flex-col justify-between">
        //         <div>
        //             <h2 className="mb-2 text-fontBlack text-3xl lg:text-[32px] font-medium">
        //                 {title}
        //             </h2>
        //             <img src={starsIcon} alt="" />
        //         </div>
        //         <div className="flex justify-between items-center">
        //             <h3 className="text-fontBlack text-2xl lg:text-3xl font-medium">
        //                 {price}
        //             </h3>
        //         </div>
        //     </div>

        // </div>
        <div className="grad w-full  h-[362px] rounded-[8px] overflow-hidden relative group">
            <div className="absolute bg-yellow-200 text-[12px] overflow-hidden font-bold uppercase top-4 right-4 px-2 rounded-full z-10">
                new
            </div>
            <div className="w-full h-[200px] flex items-center justify-center relative">
                <img className="w-[160px] h-[160px] group-hover:scale-90 transition-all" src={img} alt="" />
            </div>
            <div className="text-sm text-yellow-200 capitalize mb-2">
                {products[0].title}
            </div>
            <div className="text-white text-[15px] mb-4 lg:mb-9 ">
                description........
            </div>
            <div className="text-lg text-yellow-200">
                {products[0].price}
            </div>


        </div>

    )
}


export default Product;


// <div>
// <h2 className="mb-2 text-fontBlack text-3xl lg:text-[32px] font-medium">
//     {title}
// </h2>
// <img src={starsIcon} alt="" />
// </div>
// <div className="flex justify-between items-center">
// <h3 className="text-fontBlack text-2xl lg:text-3xl font-medium">
//     {price}
// </h3>
// <img
//     src={plusIcon}
//     alt=""
//     className="cursor-pointer h-10 xs:h-12 w-10 xs:w-12"
// />
// </div>