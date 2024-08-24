import {
    Parent,
    Student,
    Teacher,
    Subject,
    Class,
    Lesson,
    Exam,
    Assignment,
    Result,
    Event,
    Announcement
} from "@/types";
import Image from "next/image";
import Link from "next/link";
import { role } from "@/lib/data";
import {RowType, FormType} from "@/types/enums";
import FormModal from '@/components/form/FormModal'

type ItemType =
    | Parent
    | Student
    | Teacher
    | Subject
    | Class
    | Lesson
    | Exam
    | Assignment
    | Result
    | Event
    | Announcement;

function CustomRow({
    item,
    type,
    itemId,
}: {
    item: ItemType;
    type: RowType;
    itemId: number;
}) {
    switch (type) {
        case RowType.TEACHER:
            const teacher = item as Teacher;
            return (
                <tr
                    key={itemId}
                    className="  space-y-6 text-sm even:bg-cyellow-light even:hover:bg-cyellow-regular/50 transition-colors odd:bg-sky-light odd:hover:bg-sky-regular/50 p-2 rounded-md border-b border-gray-200"
                >
                    <td className="pl-2 flex items-center justify-start gap-2 mt-4">
                        <Image
                            src={teacher.photo}
                            alt={teacher.name}
                            width={40}
                            height={40}
                            className="md:hidden xl:block w-10 h-10 object-cover rounded-full"
                        />
                        <div className="text-sm flex flex-col gap-1">
                            <h3 className="font-semibold">{teacher.name}</h3>
                            <span className="text-gray-500 text-xs">
                                {teacher.email}
                            </span>
                        </div>
                    </td>
                    <td className="hidden md:table-cell text-xs">
                        {teacher.teacherId}
                    </td>
                    <td className="hidden lg:table-cell text-xs">
                        {teacher.subjects.join(", ")}
                    </td>
                    <td className="hidden lg:table-cell text-xs">
                        {teacher.classes.join(", ")}
                    </td>
                    <td className="hidden xl:table-cell text-xs">
                        {teacher.phone}
                    </td>
                    <td className="hidden xl:table-cell text-xs">
                        {teacher.address}
                    </td>
                    <td>
                        <ActionButtons type={type} id={teacher.teacherId as string} />
                    </td>
                </tr>
            );

        case RowType.STUDENT:
            const student = item as Student;

            return (
                <tr
                    key={itemId}
                    className=" space-y-6 text-sm even:bg-cyellow-light even:hover:bg-cyellow-regular/50 transition-colors odd:bg-sky-light odd:hover:bg-sky-regular/50 p-2 rounded-md border-b border-gray-200"
                >
                    <td className="pl-2 flex items-center justify-start gap-2 my-4">
                        <Image
                            src={student.photo}
                            alt={student.name}
                            width={40}
                            height={40}
                            className="md:hidden xl:block w-10 h-10 object-cover rounded-full"
                        />
                        <div className="text-sm flex flex-col gap-1">
                            <h3 className="font-semibold">{student.name}</h3>
                            <span className="text-gray-500 text-xs">
                                {student.class}
                            </span>
                        </div>
                    </td>
                    <td className="hidden md:table-cell text-xs">
                        {student.studentId}
                    </td>
                    <td className="hidden lg:table-cell text-xs">
                        {student.grade}
                    </td>
                    <td className="hidden lg:table-cell text-xs">
                        {student?.email}
                    </td>
                    <td className="hidden xl:table-cell text-xs">
                        {student.phone}
                    </td>
                    <td className="hidden xl:table-cell text-xs">
                        {student.address}
                    </td>
                    <td>
                        <ActionButtons type={type} id={student.studentId as string} />

                    </td>
                </tr>
            );

        case RowType.PARENT:
            const parent = item as Parent;
            return (
                <tr
                    key={itemId}
                    className="space-y-6 text-sm even:bg-cyellow-light even:hover:bg-cyellow-regular/50 transition-colors odd:bg-sky-light odd:hover:bg-sky-regular/50 p-2 rounded-md border-b border-gray-200"
                >
                    <td className="pl-2 flex items-center justify-start gap-2 mt-2">
                        <div className="text-sm flex flex-col gap-1">
                            <h3 className="font-semibold">{parent.name}</h3>
                            <span className="text-gray-500 text-xs">
                                {parent.email}
                            </span>
                        </div>
                    </td>
                    <td>{parent.students.join(",")}</td>
                    <td className="hidden xl:table-cell text-xs">
                        {parent.phone}
                    </td>
                    <td className="hidden xl:table-cell text-xs">
                        {parent.address}
                    </td>
                    <td>
                        <ActionButtons type={type} id={parent.id} />

                    </td>
                </tr>
            );
        case RowType.SUBJECT:
            const subject = item as Subject;
            return (
                <tr
                    key={itemId}
                    className="space-y-6 text-sm even:bg-cyellow-light even:hover:bg-cyellow-regular/50 transition-colors odd:bg-sky-light odd:hover:bg-sky-regular/50 p-2 rounded-md border-b border-gray-200"
                >
                    <td className="pl-2 text-sm">{subject.name}</td>
                    <td className="hidden md:table-cell ">
                        {subject.teachers.join(", ")}
                    </td>
                    <td>
                    <ActionButtons type={type} id={subject.id} />
                    </td>
                </tr>
            );

        case RowType.CLASS:
            const classItem = item as Class;
            return (
                <tr
                    key={itemId}
                    className="space-y-6 text-sm even:bg-cyellow-light even:hover:bg-cyellow-regular/50 transition-colors odd:bg-sky-light odd:hover:bg-sky-regular/50 p-2 rounded-md border-b border-gray-200"
                >
                    <td className="pl-2 text-sm">{classItem.name}</td>
                    <td className="table-cell text-xs">{classItem.grade}</td>
                    <td className="hidden md:table-cell text-xs">
                        {classItem.capacity}
                    </td>
                    <td className="table-cell text-xs">
                        {classItem.supervisor}
                    </td>
                    <td>
                    <ActionButtons type={type} id={classItem.id} />
                    </td>
                </tr>
            );

        case RowType.LESSON:
            const lesson = item as Lesson;
            return (
                <tr
                    key={itemId}
                    className="space-y-6 text-sm even:bg-cyellow-light even:hover:bg-cyellow-regular/50 transition-colors odd:bg-sky-light odd:hover:bg-sky-regular/50 p-2 rounded-md border-b border-gray-200"
                >
                    <td className="pl-2 text-sm">{lesson.subject}</td>
                    <td className="hidden md:table-cell text-xs">
                        {lesson.class}
                    </td>
                    <td className="hidden lg:table-cell text-xs">
                        {lesson.teacher}
                    </td>

                    <td>
                    <ActionButtons type={type} id={lesson.id} />
                    </td>
                </tr>
            );
        case RowType.EXAM:
            const exam = item as Exam;
            return (
                <tr
                    key={itemId}
                    className="space-y-6 text-sm even:bg-cyellow-light even:hover:bg-cyellow-regular/50 transition-colors odd:bg-sky-light odd:hover:bg-sky-regular/50 p-2 rounded-md border-b border-gray-200"
                >
                    <td className="pl-2 text-sm">{exam.subject}</td>
                    <td className=" table-cell text-xs">{exam.class}</td>
                    <td className="hidden md:table-cell text-xs">
                        {exam.date}
                    </td>
                    <td className=" hidden lg:table-cell text-xs">
                        {exam.teacher}
                    </td>

                    <td>
                    <ActionButtons type={type} id={exam.id} />
                    </td>
                </tr>
            );

        case RowType.ASSIGNMENT:
            const assignment = item as Assignment;
            return (
                <tr
                    key={itemId}
                    className="space-y-6 text-sm even:bg-cyellow-light even:hover:bg-cyellow-regular/50 transition-colors odd:bg-sky-light odd:hover:bg-sky-regular/50 p-2 rounded-md border-b border-gray-200"
                >
                    <td className="pl-2 text-sm">{assignment.subject}</td>

                    <td className="table-cell text-xs">{assignment.class}</td>
                    <td className="hidden md:table-cell text-xs">
                        {assignment.dueDate}
                    </td>
                    <td className="hidden lg:table-cell text-xs">
                        {assignment.teacher}
                    </td>
                    <td>
                    <ActionButtons type={type} id={assignment.id} />
                    </td>
                </tr>
            );

        case RowType.RESULT:
            const result = item as Result;
            return (
                <tr
                    key={itemId}
                    className="space-y-6 text-sm even:bg-cyellow-light even:hover:bg-cyellow-regular/50 transition-colors odd:bg-sky-light odd:hover:bg-sky-regular/50 p-2 rounded-md border-b border-gray-200"
                >
                    <td className="pl-2 flex items-center justify-start gap-2 mt-2">
                        <div className="text-sm flex flex-col gap-1">
                            <h3 className="font-semibold">{result.subject}</h3>
                            <span className="text-gray-500 text-xs">
                                {result.class}
                            </span>
                        </div>
                    </td>
                    <td className="table-cell text-xs">{result.student}</td>
                    <td className=" text-xs">{result.score}</td>
                    <td className="hidden md:table-cell text-xs">
                        {result.type}
                    </td>
                    <td className="hidden lg:table-cell text-xs">
                        {result.date}
                    </td>
                    <td className="hidden xl:table-cell text-xs">
                        {result.teacher}
                    </td>
                    <td>
                    <ActionButtons type={type} id={result.id} />
                    </td>
                </tr>
            );
        case RowType.EVENT:
            const event = item as Event;
            return (
                <tr
                    key={itemId}
                    className="space-y-6 text-sm even:bg-cyellow-light even:hover:bg-cyellow-regular/50 transition-colors odd:bg-sky-light odd:hover:bg-sky-regular/50 p-2 rounded-md border-b border-gray-200"
                >
                    <td className="pl-2 text-sm">{event.title}</td>
                    <td className="table-cell text-xs">{event.class}</td>
                    <td className="hidden md:table-cell text-xs">{event.date}</td>
                    <td className="hidden md:table-cell text-xs">
                        {event.startTime}
                    </td>
                    <td className="hidden lg:table-cell text-xs">
                        {event.endTime}
                    </td>

                    <td>
                    <ActionButtons type={type} id={event.id} />
                    </td>
                </tr>
            );

        case RowType.ANNOUNCEMENT:
            const annoucement = item as Announcement;
            return (
                <tr
                    key={itemId}
                    className="space-y-6 text-sm even:bg-cyellow-light even:hover:bg-cyellow-regular/50 transition-colors odd:bg-sky-light odd:hover:bg-sky-regular/50 p-2 rounded-md border-b border-gray-200"
                >
                    <td className="pl-2 text-sm">{annoucement.title}</td>
                    <td className="table-cell text-xs">{annoucement.class}</td>
                    <td className="hidden md:table-cell text-xs">{annoucement.date}</td>


                    <td>
                    <ActionButtons type={type} id={annoucement.id} />
                    </td>
                </tr>
            );

        default:
            return null;
    }
}

export default CustomRow;




function ActionButtons({ type, id }: { type: RowType; id: string | number }) {
    return (
        <div className="flex items-center gap-2">
            <Link href={`/list/${type}${type === 'class' ? 'es' : 's'}/${id}`}>
                <button className="flex items-center justify-center p-2 bg-[#c3ebfa] rounded-full">
                    <Image
                        src="/view.png"
                        alt="view"
                        width={16}
                        height={16}
                    />
                </button>
            </Link>
            {role === "admin" && (
                
                <FormModal type={FormType.DELETE} table={type} id={id} />
            )}
        </div>
    );
}
