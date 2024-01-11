import { Link } from "react-router-dom";
import { useState } from 'react'
import { products } from "../data";
import Product from "./Product";
import { menu, close } from '../assets'

const categories = [
    { id: 1, name: 'גנרטורים', products: ["p1", "p2"] },
    { id: 2, name: 'הגברה', products: ["p3", "p4"] },
    { id: 3, name: 'תאורה', products: ["p5", "p6"] },
];

const CategoryItem = ({ category, handleClick }) => {
    return (

        <button onClick={() => handleClick(category.id)}> {category.name}</button>

    )
}

const DisplayProducts = ({ id }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  gap-[15px] md:gap-[30px] ">
            {products.map((product) => {
                return (
                    <Product title={categories.name} price={product.price} img={product.img} />
                )
            })}
        </div>
    )
}



const CategoryNav = () => {

    const [chosenCat, setChosenCat] = useState(2);

    const handleClickCategory = (id) => {
        setChosenCat(id);
    }
    const [toggle, setToggle] = useState(false);

    const [title, setTitle] = useState(categories[0].name);
    return (
        <>
            <div className="mb-16 pt-40 lg:pt-0 bg-dark ">
                <div className="container mx-auto flex justify-end">
                    <div className="flex gap-x-8">
                        <div>
                            <div className="text-4xl font-bold flex justify-end ">{title}</div>
                            <DisplayProducts id={chosenCat} />
                        </div>
                        <aside className="hidden sm:flex ">
                            <div className="bg-black text-white flex flex-col w-[260px] h-[500px] rounded-[8px] overflow-hidden pb-80">
                                <div className="bg-yellow-100 font-bold pb-4 flex justify-end text-black px-4">קטגוריות</div>
                                <div className="flex flex-col  gap-y-6 p-6">
                                    {categories.map((category) => {
                                        return (
                                            <div className={`${chosenCat === category.id ? "border border-white " : ""} flex justify-end`}>
                                                <CategoryItem category={category} handleClick={handleClickCategory} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            {/* <DisplayProducts id={chosenCat} /> */}
                        </aside>



                    </div>

                    <div className="sm:hidden w-full h-full bg-black p-8">
                        <div onClick={() => setToggle(!toggle)}>
                            <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default CategoryNav;