import React from "react";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";
import {eventsData } from "@/lib/data";
import {RowType} from "@/types/enums";
const columns = [
    {
        header: "title",
        accessor: "title",
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
        header: "start time",
        accessor: "start-time",
        className: "hidden lg:table-cell",
    },
    {
        header: "end time",
        accessor: "end-time",
        className: "hidden lg:table-cell",
    },
     
    
    {
        header: "Actions",
        accessor: "actions",
    },
];





const ResultsListPage = () => {
    return (
        <div className="flex flex-col  items-start   gap-4 mt-10 h-screen bg-white p-4 rounded-md">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between w-full">
                <h1 className="text-lg font-bold">All events</h1>
                <TableSearch  table={RowType.EVENT}/>
            </div>
            <Table
                columns={columns}
                
                data={eventsData}
                type={RowType.EVENT}
            />
        </div>
    );
};

export default ResultsListPage;
