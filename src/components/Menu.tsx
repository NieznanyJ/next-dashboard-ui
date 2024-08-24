import Link from "next/link";
import Image from "next/image";
import { role } from "@/lib/data";

const menuItems = [
    {
        title: "MENU",
        items: [
            {
                icon: "/home.png",
                label: "Home",
                href: "/",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/teacher.png",
                label: "Teachers",
                href: "/list/teachers",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/student.png",
                label: "Students",
                href: "/list/students",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/parent.png",
                label: "Parents",
                href: "/list/parents",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/subject.png",
                label: "Subjects",
                href: "/list/subjects",
                visible: ["admin"],
            },
            {
                icon: "/class.png",
                label: "Classes",
                href: "/list/classes",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/lesson.png",
                label: "Lessons",
                href: "/list/lessons",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/exam.png",
                label: "Exams",
                href: "/list/exams",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/assignment.png",
                label: "Assignments",
                href: "/list/assignments",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/result.png",
                label: "Results",
                href: "/list/results",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/attendance.png",
                label: "Attendance",
                href: "/list/attendance",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/calendar.png",
                label: "Events",
                href: "/list/events",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/message.png",
                label: "Messages",
                href: "/list/messages",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/announcement.png",
                label: "Announcements",
                href: "/list/announcements",
                visible: ["admin", "teacher", "student", "parent"],
            },
        ],
    },
    {
        title: "OTHER",
        items: [
            {
                icon: "/profile.png",
                label: "Profile",
                href: "/profile",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/setting.png",
                label: "Settings",
                href: "/settings",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/logout.png",
                label: "Logout",
                href: "/logout",
                visible: ["admin", "teacher", "student", "parent"],
            },
        ],
    },
];

function Menu() {
    return (
        <div className="space-y-4 mt-4  text-sm">
            {menuItems.map((menuItem) => (
                <div
                    className="space-y-4 p-2 md:text-center"
                    key={menuItem.title}
                >
                    <h3 className="text-center md:text-start text-gray-700 font-semibold">
                        {menuItem.title}
                    </h3>
                    <ul className="flex flex-col items-center md:items-start md:ml-2 justify-between gap-4">
                        {menuItem.items.map((item, index) => {
                            if (item.visible.includes(role)) {
                                return (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className="text-gray-500  hover:bg-gray-200 p-2 w-full rounded-md transition-colors"
                                    >
                                        <li className="flex items-center gap-4 justify-center md:justify-start  w-full">
                                            <Image
                                                src={item.icon}
                                                alt={item.label}
                                                width={25}
                                                height={25}
                                            ></Image>
                                            <p className="hidden md:block">
                                                {item.label}
                                            </p>
                                        </li>
                                    </Link> /*  */
                                );
                            }
                        })}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Menu;
