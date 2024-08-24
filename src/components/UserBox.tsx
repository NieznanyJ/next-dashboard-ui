"use client"
import React from 'react'
import Image from 'next/image'

function UserBox() {
  return (
    <div className="flex items-center gap-4 cursor-pointer ">
                <div className="flex flex-col leading-5">
                    <span className="text-sm leading-3 font-medium">Jon Doe</span>
                    <span className="text-[10px] text-gray-500 text-right">Admin</span>
                </div>
                <Image className="rounded-full" src="/avatar.png" alt="avatar" width={36} height={36} />
                </div>
  )
}

export default UserBox