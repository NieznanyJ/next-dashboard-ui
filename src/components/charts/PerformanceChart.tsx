"use client"

import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import Image from 'next/image'

const data = [
  { name: 'Group A', value: 92, fill: "#c3ebfa" },
  { name: 'Group B', value: 8, fill: "#fae27c" },

];

function PerformanceChart() {

  return (
    <div className="bg-white rounded-md p-4">
      <div className='flex items-center justify-between'>
        <h4 className="font-semibold text-lg">Performance</h4>
        <Image className='cursor-pointer' src='/moreDark.png' width={20} height={20} alt="more" />
      </div>
      <div className="w-full h-full max-h-[300px] flex items-center justify-center relative mt-10">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={300}>
            <Pie
              width={400}
              height={400}
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={data}
              cx="50%"
              cy="50%"

              fill="#8884d8"

              labelLine={false}

              innerRadius={'60%'}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60px] text-center"
        >
          <p className='text-3xl font-bold'>9.2</p>
          <span className='text-xs text-gray-500'>of 10 max LTS</span>

        </div>
        <p className='absolute bottom-16 left-0 right-0 m-auto font-medium text-center'>1st Semester - 2nd Semester</p>

      </div>
    </div>
  );

}

export default PerformanceChart
