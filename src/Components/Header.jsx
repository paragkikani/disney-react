import React, { useState } from 'react'
import logo from "../assets/images/logo.png"
import { HiHome, HiMagnifyingGlass, HiMiniPlayCircle, HiPlus, HiOutlineEllipsisVertical, HiStar, HiTv } from "react-icons/hi2";
import HeaderItem from './HeaderItem';


function Header() {
    const [toggle, setToggle] = useState(false);

    const menu = [{ name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCH LIST", icon: HiPlus },
    { name: "ORIGINAL", icon: HiStar },
    { name: "MOVIE", icon: HiMiniPlayCircle },
    { name: "SERIES", icon: HiTv }]

    return (
        <div className='flex items-center justify-between p-5'>
            <div className='flex gap-8 items-center'>
                <img src={logo} alt="logo" className='w-[80px] md:w-[115px] object-cover' />
                <div className='hidden md:flex gap-8'> {menu.map(x => <HeaderItem name={x.name} ICon={x.icon} />)}</div>
                <div className='flex md:hidden gap-5'> {menu.map((x, index) => index < 3 && <HeaderItem name='' ICon={x.icon} />)}
                    <div onClick={() => setToggle(!toggle)} className="md:hidden"><HeaderItem name='' ICon={HiOutlineEllipsisVertical} />
                        {toggle &&
                            <div  className='absolute mt-2 bg-[#121212] border-[1px] p-3 border-gray-700 px-5 py-4'>{menu.map((x, index) => index > 2 && <HeaderItem name={x.name} ICon={x.icon} />)}</div>
                            }
                    </div>

                </div>
            </div>
            <img className='rounded-full w-[40px]' src="https://i.pravatar.cc/300?img=9" alt="avatar" />
        </div>
    )
}

export default Header