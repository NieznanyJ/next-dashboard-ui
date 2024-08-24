import React from "react";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";
import {lessonsData } from "@/lib/data";
import {RowType} from "@/types/enums";
const columns = [
    {
        header: "subject",
        accessor: "subject",
    },
    {
        header: "class",
        accessor: "class",
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





const LessonsListPage = () => {
    return (
        <div className="flex flex-col  items-start   gap-4 mt-10 h-screen bg-white p-4 rounded-md">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between w-full">
                <h1 className="text-lg font-bold">All lessons</h1>
                <TableSearch table={RowType.LESSON} />
            </div>
            <Table
                columns={columns}
                
                data={lessonsData}
                type={RowType.LESSON}
            />
        </div>
    );
};

export default LessonsListPage;
