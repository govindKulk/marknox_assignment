"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(prev => !prev);
    }
    return (
        <div className='
        flex items-center justify-between
        px-2 py-2
        '>
            <Image src="/logo.png" alt="Govind"
                className='w-25 h-25'
                width={200} height={200} />



            <div className=''>
                <AiOutlineMenu size={30} className="md:hidden" onClick={handleToggle} />

                <ul className={`hidden md:flex gap-4`}>
                <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/contact">Projects</Link></li>
                        <li><Link href="/contact">Testimonials</Link></li>
                </ul>

                <ul className={`flex flex-col px-4 py-4 md:hidden gap-4
                absolute h-screen w-1/2 shadow-lg top-0 right-0 bg-white
                transition-all duration-500 ease-in-out
                
                ${isOpen ? 'translate-x-0' : 'translate-x-[100%]'}
                
                `}>
                    <AiOutlineClose size={30} className="md:hidden self-end" onClick={handleToggle}  />
                    <div className='flex flex-col text-xl font-bold gap-4'> 
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/contact">Projects</Link></li>
                        <li><Link href="/contact">Testimonials</Link></li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Header
