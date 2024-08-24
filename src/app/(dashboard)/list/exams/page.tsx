import React from "react";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";
import {examsData } from "@/lib/data";
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
        header: "date",
        accessor: "date",
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





const ExamsListPage = () => {
    return (
        <div className="flex flex-col  items-start   gap-4 mt-10 h-screen bg-white p-4 rounded-md">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between w-full">
                <h1 className="text-lg font-bold">All exams</h1>
                <TableSearch table={RowType.EXAM} />
            </div>
            <Table
                columns={columns}
                
                data={examsData}
                type={RowType.EXAM}
            />
        </div>
    );
};

export default ExamsListPage;
