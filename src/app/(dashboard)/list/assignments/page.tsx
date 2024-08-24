import React from "react";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";
import {assignmentsData } from "@/lib/data";
import {RowType} from "@/types/enums";
const columns = [
    {
        header: "subject",
        accessor: "subject",
    },
    {
        header: "class",
        accessor: "class",
        className: "table-cell",
    },
    {
        header: "Due date",
        accessor: "Due-date",
        className: "hidden md:table-cell",
    },
    {
        header: "teacher",
        accessor: "teacher",
        className: "hidden lg:table-cell",
    },
    
    {
        header: "Actions",
        accessor: "actions",
    },
];





const AssgnmentsListPage = () => {
    return (
        <div className="flex flex-col  items-start   gap-4 mt-10 h-screen bg-white p-4 rounded-md">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between w-full">
                <h1 className="text-lg font-bold">All assignments</h1>
                <TableSearch table={RowType.ASSIGNMENT} />
            </div>
            <Table
                columns={columns}
                
                data={assignmentsData}
                type={RowType.ASSIGNMENT}
            />
        </div>
    );
};

export default AssgnmentsListPage;
