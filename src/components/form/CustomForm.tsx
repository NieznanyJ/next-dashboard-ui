"use client";

import { FormType, RowType } from "@/types/enums";
import DeleteForm from "./DeleteForm";
import TeacherForm from "./TeacherForm";

interface FormProps {
    table: RowType;
    type: FormType;
    id?: number | string;
}

function checkFormTypeAndTable(props: FormProps): React.ReactNode {
    const { table, type, id } = props;

    switch (table) {
        case RowType.TEACHER:
            return (
                <TeacherForm 
                    type={type === FormType.CREATE ? FormType.CREATE : FormType.UPDATE} 
                    table={table} 
                />
            );
        
        default:
            return null; 
    }
}

function CustomForm(props: FormProps) {
    const { table, type, id } = props;

    return (
        <>
            {type === FormType.DELETE && id ? (
                <DeleteForm table={table} />
            ) : (
                checkFormTypeAndTable(props)
            )}
        </>
    );
}

export default CustomForm;
