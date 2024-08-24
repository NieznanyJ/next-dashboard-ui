import React from "react";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";
import {classesData } from "@/lib/data";
import {RowType} from "@/types/enums";
const columns = [
    {
        header: "name",
        accessor: "name",
    },
    {
        header: "grade",
        accessor: "grade",
        className: "table-cell",
    },
    {
        header: "Capacity",
        accessor: "capacity",
        className: "hidden md:table-cell",
    },
    
    {
        header: "supervisor",
        accessor: "supervisor",
        className: "hidden lg:table-cell",
    },

    {
        header: "Actions",
        accessor: "actions",
    },
];





const ClassesListPage = () => {
    return (
        <div className="flex flex-col  items-start   gap-4 mt-10 h-screen bg-white p-4 rounded-md">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between w-full">
                <h1 className="text-lg font-bold">All classes</h1>
                <TableSearch table={RowType.CLASS} />
            </div>
            <Table
                columns={columns}
                
                data={classesData}
                type={RowType.CLASS}
            />
        </div>
    );
};

export default ClassesListPage;
