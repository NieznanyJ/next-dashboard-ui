import { Parent, Student, Teacher, Subject, Class, Lesson, Exam, Assignment, Result, Event, Announcement  } from "@/types";
import React from "react";
import RowType from "@/types/enums";
import CustomRow from "./CustomRow";

type DataType = Parent[] | Student[] | Teacher[] | Subject[] | Class[] | Lesson[] | Exam[] | Announcement[] | Result[] | Event[] | Annoucements[];

interface TableProps {
    columns: { header: string; accessor: string; className?: string }[];
   
    data: DataType;
    type: RowType;
}

function Table({ columns, data, type }: TableProps) {
    return (
        <table className="w-full mt-4 table-auto h-full">
            <thead >
                <tr className="text-left text-gray-500 text-sm">
                  {columns.map(col => (
                    <th className={`capitalize ${col.className}`} key={col.accessor}>{col.header}</th>
                  ))}
                </tr>
            </thead>
            <tbody className="w-full space-y-6 ">{data.map(item => (
              <CustomRow key={item.id} type={type} itemId={item.id} item={item}/>
            ))}</tbody>
        </table>
    );
}

export default Table;
