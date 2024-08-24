import React from "react";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";
import {parentsData } from "@/lib/data";
import {RowType} from "@/types/enums";
const columns = [
    {
        header: "info",
        accessor: "info",
    },
    {
        header: "Students",
        accessor: "students",
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





const ParentsListPage = () => {
    return (
        <div className="flex flex-col  items-start   gap-4 mt-10 h-screen bg-white p-4 rounded-md">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between w-full">
                <h1 className="text-lg font-bold">All parents</h1>
                <TableSearch table={RowType.PARENT} />
            </div>
            <Table
                columns={columns}
                
                data={parentsData}
                type={RowType.PARENT}
            />
        </div>
    );
};

export default ParentsListPage;
