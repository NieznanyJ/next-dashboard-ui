"use client";
import React from "react";
import Link from "next/link";

function Shortcuts() {
    return (
        <div className="bg-white rounded-md p-4">
            <h3 className="font-semibold text-lg ">Shortcuts </h3>
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mt-4">
                <Link className="p-3 rounded-md capitalize odd:bg-sky-regular/50 even:bg-cyellow-regular/50 odd:hover:bg-sky-regular even:hover:bg-cyellow-regular transition-colors"  href="/">Teacher&apos;s classes</Link>
                <Link className="p-3 rounded-md capitalize odd:bg-sky-regular/50 even:bg-cyellow-regular/50 odd:hover:bg-sky-regular even:hover:bg-cyellow-regular transition-colors"  href="/">Teacher&apos;s students</Link>
                <Link className="p-3 rounded-md capitalize odd:bg-sky-regular/50 even:bg-cyellow-regular/50 odd:hover:bg-sky-regular even:hover:bg-cyellow-regular transition-colors"  href="/">Teacher&apos;s lessons</Link>
                <Link className="p-3 rounded-md capitalize odd:bg-sky-regular/50 even:bg-cyellow-regular/50 odd:hover:bg-sky-regular even:hover:bg-cyellow-regular transition-colors"  href="/">Teacher&apos;s exams</Link>
                <Link className="p-3 rounded-md capitalize odd:bg-sky-regular/50 even:bg-cyellow-regular/50 odd:hover:bg-sky-regular even:hover:bg-cyellow-regular transition-colors"  href="/">Teacher&apos;s assignments</Link>
            </div>
        </div>
    );
}

export default Shortcuts;
