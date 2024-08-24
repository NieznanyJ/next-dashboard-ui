"use client";

import Image from "next/image";
import React, { PureComponent } from "react";
import {
    BarChart,
    Bar,
    Rectangle,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Mon",
        present: 300,
        absent: 200,
    },
    {
        name: "Tue",
        present: 60,
        absent: 40,
    },
    {
        name: "Wed",
        present: 60,
        absent: 40,
    },
    {
        name: "Thu",
        present: 60,
        absent: 40,
    },
    {
        name: "Fri",
        present: 60,
        absent: 40,
    },
];

function AttendenceChart({className } : {className?: string}) {
    return (
<div className={`w-full  h-full md:min-h-[500px]  flex flex-col items-start justify-start bg-white p-4 rounded-md col-span-${className}`}>
                <div className="flex items-center justify-between flex-wrap w-full">
                <h1 className="font-semibold text-md">Attendance</h1>
                <Image
                    className="cursor-pointer"
                    src="/moreDark.png"
                    alt="more"
                    width={20}
                    height={20}
                />{" "}
            </div>
            
                <div className="h-full w-full">
                <ResponsiveContainer width={'100%'} height={500}>
                    <BarChart
                        width={500}
                        height={500}
                        data={data}
                        barSize={14}
                        
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"  />
                        <XAxis dataKey="name" axisLine={false}  tick={{fill: '#d1d5db'}} tickLine={false}/>
                        <YAxis axisLine={false}/>
                        <Tooltip contentStyle={{borderRadius: '10px', borderColor: 'lightgray'}}/>
                        <Legend align="left" verticalAlign="top" wrapperStyle={{paddingTop: '20px', paddingBottom: '40px'}} />
                        <Bar
                        radius={[10,10, 0 ,0]}
                        legendType="circle"
                            dataKey="present"
                            fill="#fae27c"
                            activeBar={<Rectangle fill="#FEBE10" stroke="#FFC72C" />}
                        />
                        <Bar
                        radius={[10,10, 0 ,0]}
                        legendType="circle"
                            dataKey="absent"
                            fill="#7CB9E8"
                            activeBar={
                                <Rectangle fill="#7CB9E8" stroke="#a0d4f0" />
                            }
                        />
                    </BarChart>
                </ResponsiveContainer>
                </div>
                
            </div>
            
        
    );
}

export default AttendenceChart;
