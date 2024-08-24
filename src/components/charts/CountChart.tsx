"use client";

import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

import Image from "next/image";

const data = [
    {
        name: 'Total', 
        count: 606,
        fill: "#fff"
    },
    {
        name: "Boys",
        count: 33,
        fill: "#7CB9E8"
    },
    {
        name: "Girls",
        count: 303, 
        fill: "#fae27c",
    },
];

const style = {
    top: "50%",
    right: 0,
    display: "flex",
    transform: "translate(-50%,0 )",
    lineHeight: "30px",
};



function CountChart({ className } : {className?: string}) {
    const number = 6000;

    return (
<div className={`w-full h-full bg-white p-4 rounded-md ${className}`}>
                <div className="flex items-center justify-between flex-wrap w-full">
                <h1 className="font-semibold text-md">Students</h1>
                <Image
                    className="cursor-pointer"
                    src="/moreDark.png"
                    alt="more"
                    width={20}
                    height={20}
                />{" "}
            </div>
            <div className="relative w-full ">
                <ResponsiveContainer width={'100%'} height={300}>
                    <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="45%"
                        outerRadius="80%"
                        barSize={32}
                        data={data}
                    >
                        
                        <RadialBar
                            minAngle={15}
                            background
                            clockWise
                            dataKey="count"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image
                    className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    src="/maleFemale.png"
                    alt="meal-female"
                    width={50}
                    height={50}
                />
            </div>
            <div className="flex w-full text-sm items-center justify-center gap-6">
                <div className="flex flex-col leading-5">
                    <span className="w-6 aspect-square bg-sky-deep rounded-full"></span>
                    <span className="font-semibold">
                        {number.toLocaleString("en-US")}
                    </span>
                    <span className="text-gray-500 text-[10px]">
                        Boys ({45}%)
                    </span>{" "}
                </div>
                <div className="flex flex-col leading-5">
                    <span className="w-6 aspect-square bg-cyellow-regular rounded-full"></span>
                    <span className="font-semibold">
                        {number.toLocaleString("en-US")}
                    </span>
                    <span className="text-gray-500 text-[10px]">
                        Girls ({45}%)
                    </span>
                </div>
            </div>
        </div>
    );
}

export default CountChart;
