import '../index.css';

import { menu, close } from '../assets'
import { Link } from 'react-scroll';
import { useState, useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
// import { ReactComponent as CogIcon } from '../icons/cog.svg';
// import { ReactComponent as ChevronIcon } from '../icons/chevron.svg';
import { GoArrowRight } from "react-icons/go";
import { VscArrowCircleRight } from "react-icons/vsc";
import instegramLogo from "../assets/Instagram-Logo.svg"
import { motion } from 'framer-motion'
import { categories, testimonials } from '../data';
import Logo from '../Logo';


// function DropdownMenu() {
//     const [activeMenu, setActiveMenu] = useState('main');
//     const [menuHeight, setMenuHeight] = useState(null);
//     const dropdownRef = useRef(null);

//     useEffect(() => {
//         setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
//     }, [])

//     function calcHeight(el) {
//         const height = el.offsetHeight;
//         setMenuHeight(height);
//     }

//     function DropdownItem(props) {
//         return (
//             <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
//                 {/* <span className="icon-button">{props.leftIcon}</span> */}
//                 {props.children}
//                 {/* <span className="icon-right">{props.rightIcon}</span> */}
//             </a>
//         );
//     }

//     return (
//         <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

//             <CSSTransition
//                 in={activeMenu === 'main'}
//                 timeout={500}
//                 classNames="menu-primary"
//                 unmountOnExit
//                 onEnter={calcHeight}>
//                 <div className="menu">
//                     <DropdownItem>My Profile</DropdownItem>
//                     <DropdownItem
//                         // leftIcon={<CogIcon />}
//                         // rightIcon={<ChevronIcon />}
//                         goToMenu="settings" >
//                         <div className='flex justify-between'>
//                             <div>Products</div>

//                             <span className="ml-40 text-xl">{<GoArrowRight />}</span>
//                         </div>


//                     </DropdownItem>
//                     <DropdownItem
//                         // leftIcon="🦧"
//                         // rightIcon={<ChevronIcon />}
//                         goToMenu="animals">
//                         Animals
//                     </DropdownItem>

//                 </div>
//             </CSSTransition>

//             <CSSTransition
//                 in={activeMenu === 'settings'}
//                 timeout={500}
//                 classNames="menu-secondary"
//                 unmountOnExit
//                 onEnter={calcHeight}>
//                 <div className="menu">
//                     <DropdownItem goToMenu="main"
//                     //  leftIcon={<ArrowIcon />}
//                     >
//                         <h2>My Tutorial</h2>
//                     </DropdownItem>

//                 </div>
//             </CSSTransition>

//             <CSSTransition
//                 in={activeMenu === 'animals'}
//                 timeout={500}
//                 classNames="menu-secondary"
//                 unmountOnExit
//                 onEnter={calcHeight}>
//                 <div className="menu">
//                     <DropdownItem goToMenu="main"
//                     // leftIcon={<ArrowIcon />}
//                     >
//                         <h2>Animals</h2>
//                     </DropdownItem>

//                 </div>
//             </CSSTransition>
//         </div>
//     );
// }


const catId = ["contact", "testimonials", "allProducts", "home"];

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState("main");
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');
    const [navBack, setNavBack] = useState('transparent');

    return (


        <nav
            className='w-full bg-[#040402] px-20 py-6 flex items-center justify-between mx-auto fixed z-40 top-0 text-white'>
            <div className='flex flex-1 items-center justify-start flex-wrap '>
                <Link to={"/"}
                    className='flex items-center justify-center'
                    whileHover={{ y: -2 }}
                >
                    <motion.img src={instegramLogo} alt="Instagram Logo" className="hover:cursor-pointer w-16" whileHover={{ y: -2 }} />
                </Link>
            </div>

            <div className='flex flex-1 justify-center ml-4 md:ml-0 top-2 translat-x-[-50%]'>
                <Link to="/"
                    className="flex items-center gap-2" onClick={() => {
                        setActive(""); // tracking where we are on the page
                        window.scrollTo(0, 0); //scrolling to the start of the page
                    }}
                >
                    {/* Logo */}
                    <Logo />
                </Link>

            </div>


            <div className={`list-none hidden xl:flex xl:flex-1 xl:justify-end text-2xl text-${textColor}`}>

                {categories.slice().reverse().map((category, index) => (
                    <Link
                        key={index}
                        to={catId[index]} // Assuming your categories match the route names
                        activeClass="active"
                        spy={true}
                        offset={-70}
                        duration={500}
                        className="hover:cursor-pointer relative group mx-4"
                        onClick={() => setActive(catId[index])}
                    >
                        {category}
                        <span className={`h-[1px] inline-block w-0 bg-white  absolute left-0 -bottom-0.5
                      group-hover:w-full transition-[width] ease duration-300 
                     ${active === catId[index] ? 'w-full' : 'w-0'}`}>
                            &nbsp;
                        </span>
                    </Link>
                ))}
            </div>




            {/* this div is for small devices*/}

            <div className='xl:hidden flex flex-1 justify-end items-center  '>
                <img src={toggle ? close : menu} alt="menu" className='absolute z-10 w-[28px] h-[28px] object-contain cursor-pointer'
                    // change the icon (menu/close) by clicking it (make the toggle change its value)
                    onClick={() => setToggle(!toggle)} />

                {/* className={`overflow-hidden transition-max-height duration-300 ease-in-out flex primary-navigation ${
          !toggle ? 'max-h-0' : 'max-h-screen'
        }`} */}
                <div className={`overflow-hidden transition ease-in duration-300 flex primary-navigation bg-dark  ${!toggle ? 'translate-x-full' : 'translate-x-0'
                    }`}>
                    <Link to='home' className='cursor-pointer text-2xl font-semibold ' onClick={() => setToggle(!toggle)}>{categories[0]}</Link>
                    <Link to='allProducts' className='cursor-pointer text-2xl font-semibold' onClick={() => setToggle(!toggle)}>{categories[1]}</Link>
                    <Link to='testimonials' className='cursor-pointer text-2xl font-semibold' onClick={() => setToggle(!toggle)}>{categories[2]}</Link>
                    <Link to='contact' className='cursor-pointer text-2xl font-semibold ' onClick={() => setToggle(!toggle)}>{categories[3]}</Link>

                </div>

            </div>


        </nav>
    );
};





export default Navbar;
