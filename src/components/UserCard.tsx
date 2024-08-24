import React from "react";
import Image from "next/image";

interface UserCardProps {
    type: string;
    className?: string
}





function UserCard({ type, className }: UserCardProps) {
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const number = 6000

    return (
        <div className={`flex flex-col justify-between gap-4 items-start  p-4 rounded-md ${className}` }>
            <div className="flex justify-between items-center w-full flex-wrap ">
                <span className="bg-white text-[10px] rounded-full  p-1 px-2 ">
                    {currentYear}/{nextYear}
                </span>
                <Image className="cursor-pointer" src='/more.png' alt="more" width={20} height={20}/>
            </div>
            <p className="font-semibold text-sm md:text-md lg:text-lg  tracking-wide ">{number.toLocaleString('en-Us')}</p>
            <p className="capitalize text-sm md:text-md lg:text-lg font-semibold tracking-wide">{type}</p>
        </div>
    );
}

export default UserCard;
