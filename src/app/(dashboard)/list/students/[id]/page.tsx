import SmallInfoCard from "@/components/SmallInfoCard";
import UserInfoCard from "@/components/UserInfoCard";
import PerformanceChart from '@/components/charts/PerformanceChart'
import BigCalendar from '@/components/BigCalendar'
import Announcements from "@/components/Announcements";
import Shortcuts from "@/components/Shortcuts";
import { studentsData } from "@/lib/data";
import { Student } from "@/types";


function checkGradeNumber(grade: number) : string{
    return grade === 1 ? 'st' : grade === 2 ? 'nd' : grade === 3 ? 'rd' : 'th'
}


function SingleStudentPage({ params }: { params: { id: string } }) {
    const id = params.id;
    const student = studentsData.find(s => s.studentId === id);


    return (
        <div className="flex-1 py-4 flex flex-col xl:flex-row   gap-4 rounded-md">
            <div className="w-full h-max  flex flex-col  items-stretch  gap-6 flex-1 xl:w-2/3">
                <div className="flex  flex-col 2xl:flex-row gap-4 ">
                    <UserInfoCard info={student as Student} />
                    <div className=" flex-1  flex flex-col md:grid grid-cols-2  gap-4">
                        <SmallInfoCard
                            icon="/singleAttendance.png"
                            label="attendance"
                            data="55%"
                        />
                        <SmallInfoCard
                            icon="/singleBranch.png"
                            label="grade"
                            data={`${student?.grade}${checkGradeNumber(student?.grade as number)}`}
                        />
                        <SmallInfoCard
                            icon="/singleLesson.png"
                            label="lessons"
                            data="18"
                        />
                        <SmallInfoCard
                            icon="/singleClass.png"
                            label="class name"
                            data={student?.class as string}
                        />
                    </div>
                </div>
                <div className="bg-white h-[800px]  p-4 rounded-md">
                    <h2 className="font-semibold text-lg"> Teachers schedule </h2>
                    <BigCalendar />
                </div>
            </div>
            <div className="w-full  flex flex-col gap-4   xl:w-1/3 ">
            <Shortcuts />
            <PerformanceChart />
                <Announcements />            
            </div>
        </div>
    );
}

export default SingleStudentPage;
