import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import CountChart from "@/components/charts/CountChart";
import EventCalendar from "@/components/EventCalendar";
import React from "react";

function TeacherPage() {
    return (
        <div className="flex flex-col xl:flex-row   gap-4 mt-10 h-screen"> {/* Added h-screen for full height */}
            <div className="flex flex-col flex-1 min-h-full w-full xl:w-2/3 bg-white p-4 rounded-md">
                <div className="flex items-center justify-between w-full mb-4">
                    <h1 className="text-lg font-bold">Schedule</h1>
                </div>
                <div className="flex-1 min-h-full"> 
                    <BigCalendar />
                </div>
            </div>
            <div className="w-full xl:w-1/3 flex flex-col gap-4 h-full"> {/* Ensure it takes full height */}
                <EventCalendar />
                <Announcements />
            </div>
        </div>
    );
}

export default TeacherPage;
