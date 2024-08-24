import React from "react";
import UserCard from "@/components/UserCard";
import CountChart from "@/components/charts/CountChart";
import AttendenceChart from "@/components/charts/AttendanceChart";
import FinanceChart from "@/components/charts/FinanceChart";
import EventCalendar from "@/components/EventCalendar";
import Announcements from "@/components/Announcements";

export enum UserTypes {
    STUDENTS = "students",
    TEACHERS = "teachers",
    PARENTS = "parents",
    STAFF = "staff",
}

function AdminPage() {
    return (
        <div className=" flex flex-col xl:flex-row items-start gap-4 mt-10 ">
            <div className=" w-full xl:w-2/3 gap-4 flex  flex-col">
                <div className="w-full   grid gap-4 grid-cols-1 xsm:grid-cols-2  lg:grid-cols-4">
                    <UserCard
                        className="flex-1 odd:bg-cyellow-regular bg-sky-regular"
                        type={UserTypes.STUDENTS}
                    />
                    <UserCard
                        className="flex-1 odd:bg-cyellow-regular bg-sky-regular"
                        type={UserTypes.TEACHERS}
                    />
                    <UserCard
                        className="flex-1 odd:bg-cyellow-regular bg-sky-regular"
                        type={UserTypes.PARENTS}
                    />
                    <UserCard
                        className="flex-1 odd:bg-cyellow-regular bg-sky-regular"
                        type={UserTypes.STAFF}
                    />
                </div>

                <div className="w-full flex flex-col lg:grid grid-cols-2 gap-6">
                    <CountChart />
                    <AttendenceChart  />
                    <FinanceChart className="col-span-2"  />
                </div>
            </div>

            <div className="w-full flex flex-col gap-6 xl:w-1/3">
                <EventCalendar />
                <Announcements />
            </div>
        </div>
    );
}

export default AdminPage;
