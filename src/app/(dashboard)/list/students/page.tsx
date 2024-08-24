import React from "react";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";
import { studentsData } from "@/lib/data";
import {RowType} from "@/types/enums";


const columns = [
    {
        header: "info",
        accessor: "info",
    },
    {
        header: "Student Id",
        accessor: "studentId",
        className: "hidden md:table-cell",
    },
    {
        header: "Grade",
        accessor: "grade",
        className: "hidden lg:table-cell",
    },
    {
        header: "Email",
        accessor: "email",
        className: "hidden lg:table-cell",
    },
    {
        header: "Phone",
        accessor: "phone",
        className: "hidden xl:table-cell",
    },
    {
        header: "Address",
        accessor: "address",
        className: "hidden xl:table-cell",
    },
    {
        header: "Actions",
        accessor: "actions",
    },
];




const StudentsListPage = () => {
    return (

        <div className="flex flex-col  items-start   gap-4 mt-10 h-screen bg-white p-4 rounded-md">

            <div className="flex flex-col md:flex-row gap-4 items-center justify-between w-full">
                <h1 className="text-lg font-bold">All students</h1>
                <TableSearch table={RowType.STUDENT}/>
            </div>
            <Table
                columns={columns}

                data={studentsData}
                type={RowType.STUDENT}
            />
        </div>
    );
};

export default StudentsListPage;
