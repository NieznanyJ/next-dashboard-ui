import React from "react";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";
import {resultsData } from "@/lib/data";
import {RowType} from "@/types/enums";
const columns = [
    {
        header: "Subject",
        accessor: "Subject",
    },
    {
        header: "student",
        accessor: "student",
        className: "table-cell",
    },
    {
        header: "score",
        accessor: "score",
        className: "table-cell",
    },
    {
        header: "type",
        accessor: "type",
        className: "hidden md:table-cell",
    },
    {
        header: "date",
        accessor: "date",
        className: "hidden lg:table-cell",
    },
     
    {
        header: "teacher",
        accessor: "teacher",
        className: "hidden xl:table-cell",
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
                <h1 className="text-lg font-bold">All results</h1>
                <TableSearch table={RowType.RESULT}/>
            </div>
            <Table
                columns={columns}
                
                data={resultsData}
                type={RowType.RESULT}
            />
        </div>
    );
};

export default ResultsListPage;
