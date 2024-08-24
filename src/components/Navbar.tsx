'use client'

import React from "react";
import Image from "next/image";
import UserBox from "./UserBox";



function Navbar() {
    return (
        <nav className="flex flex-wrap items-center justify-end md:justify-between p-4 bg-white rounded-md">
            {/* searchbar */}
            <div className="group hidden md:flex items-center gap-2 border-2 p-1 px-2 rounded-full transition-colors hover:border-gray-500 focus-within:border-gray-500">
                <Image src="/search.png" alt="search" width={14} height={14} />
                <input
                    type="text"
                    placeholder="Search..."
                    className="outline-none border-none bg-transparent peer cursor-pointer"
                />
            </div>

            {/* user */}
            <div className="flex items-center gap-6">
                <div className="bg-white  rounded-full  w-8 aspect-square flex items-center justify-center cursor-pointer relative">
                    <Image src='/message.png' alt="message" width={25} height={25} />
                    <div className="absolute -top-1 -right-2 bg-purple-500 rounded-full flex items-center justify-center w-4 aspect-square text-[10px] text-white">1</div>
                </div>
                <div className="bg-white  rounded-full w-8 aspect-square  flex items-center justify-center cursor-pointer relative">
                    <Image src='/announcement.png' alt="announcement" width={25} height={25} />
                    <div className="absolute -top-1 -right-2 bg-purple-500 rounded-full flex items-center justify-center w-4 aspect-square text-[10px] text-white">1</div>
                </div>
                <UserBox />
            </div>
        </nav>
    );
}

export default Navbar;
