import React from "react";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";
import {subjectsData } from "@/lib/data";
import {RowType} from "@/types/enums";
const columns = [
    {
        header: "name",
        accessor: "name",
    },
    {
        header: "Teachers",
        accessor: "teachers",
        className: "hidden md:table-cell",
    },
    {
        header: "Actions",
        accessor: "actions",
    },
];





const SubjectsListPage = () => {
    return (
        <div className="flex flex-col  items-start   gap-4 mt-10 h-screen bg-white p-4 rounded-md">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between w-full">
                <h1 className="text-lg font-bold">All subjects</h1>
                <TableSearch table={RowType.SUBJECT}/>
            </div>
            <Table
                columns={columns}
                
                data={subjectsData}
                type={RowType.SUBJECT}
            />
        </div>
    );
};

export default SubjectsListPage;
