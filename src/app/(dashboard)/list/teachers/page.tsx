import React from "react";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";
import {teachersData } from "@/lib/data";
import {RowType} from "@/types/enums";



const columns = [
    {
        header: "info",
        accessor: "info",
    },
    {
        header: "Teacher Id",
        accessor: "teacherId",
        className: "hidden md:table-cell",
    },
    {
        header: "Subjects",
        accessor: "subjects",
        className: "hidden lg:table-cell",
    },
    {
        header: "Classes",
        accessor: "classes",
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




const TeachersListPage = () => {
    return (
        <div className="flex flex-col  items-start   gap-4 mt-10 h-screen bg-white p-4 rounded-md">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between w-full">
                <h1 className="text-lg font-bold">All teachers</h1>
                <TableSearch table={RowType.TEACHER} />
            </div>
            <Table
                columns={columns}
                
                data={teachersData}
                type={RowType.TEACHER}
            />
        </div>
    );
};

export default TeachersListPage;
