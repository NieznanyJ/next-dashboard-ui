"use client";

import React from "react";
import Image from "next/image";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
const data = [
    {
        name: "Jan",
        income: 3000,
        expense: 1398,
    },
    {
        name: "Feb",
        income: 2000,
        expense: 9800,
    },
    {
        name: "Mar",
        income: 2780,
        expense: 3908,
    },
    {
        name: "Apr",
        income: 1890,
        expense: 4800,
    },
    {
        name: "May",
        income: 2390,
        expense: 3800,
    },
    {
        name: "Jun",
        income: 3490,
        expense: 4300,
    },
    {
        name: "Jul",
        income: 2400,
        expense: 2400,
    },
    {
        name: "Aug",
        income: 3200,
        expense: 2100,
    },
    {
        name: "Sep",
        income: 3100,
        expense: 2200,
    },
    {
        name: "Oct",
        income: 2900,
        expense: 2400,
    },
    {
        name: "Nov",
        income: 3300,
        expense: 2500,
    },
    {
        name: "Dec",
        income: 3400,
        expense: 2600,
    },
];

function FinanceChart({ className }: { className?: string }) {
    return (
        <div
            className={`w-full h-full min-h-[500px]  flex flex-col items-start justify-start bg-white p-4 rounded-md ${className}`}
        >
            <div className="flex items-center justify-between flex-wrap w-full">
                <h1 className="font-semibold text-md">Finance</h1>
                <Image
                    className="cursor-pointer"
                    src="/moreDark.png"
                    alt="more"
                    width={20}
                    height={20}
                />{" "}
            </div>
            <div className="w-full h-[300px] md:h-[500px] mt-10">
                <ResponsiveContainer width={'100%'} height={'100%'}>
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickMargin={10}
                            tick={{ fill: "#d1d5db" }}
                            tickLine={false}
                        />
                        <YAxis axisLine={false} tickMargin={10} />
                        <Tooltip />
                        <Legend
                            align="center"
                            verticalAlign="top"
                            wrapperStyle={{
                                paddingTop: "10px",
                                paddingBottom: "30px",
                            }}
                        />
                        <Line
                            strokeWidth={4}
                            type="monotone"
                            dataKey="income"
                            stroke="#fae27c"
                            activeDot={{ r: 8 }}
                        />
                        <Line
                            strokeWidth={4}
                            type="monotone"
                            dataKey="expense"
                            stroke="#7CB9E8"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default FinanceChart;
