"use client"
import {
    Parent,
    Student,
    Teacher,
    Subject,
    Class,
    Lesson,
    Exam,
    Assignment,
    Result,
    Event,
    Announcement
} from "@/types";
import { FormType, RowType } from "@/types/enums";
import Image from "next/image";
import { useState, useEffect } from "react";
import CustomForm from "./CustomForm";





interface FormModalProps {
    table: RowType;
    type: FormType;
    data?: any;
    id?: number | string;

}

type ButtonType = {
    type: FormType;
    className: string;
    icon: string;
}

const buttonTypes: ButtonType[] = [
    {
        type: FormType.CREATE,
        className: 'flex items-center justify-center p-2  bg-yellow-400 rounded-full cursor-pointer bg-yellow-400',
        icon: '/plus.png'
    },
    {
        type: FormType.UPDATE,
        className: 'flex items-center justify-center p-2  bg-yellow-400 rounded-full cursor-pointer bg-sky-regular',
        icon: '/edit.png'
    },
    {
        type: FormType.DELETE,
        className: 'flex items-center justify-center p-2 bg-[#cfceff] rounded-full bg-[#cfceff]',
        icon: '/delete.png'
    },
]



function checkButtonType(type: FormType): ButtonType {
    return buttonTypes.find(btn => btn.type === type) as ButtonType;
}

function FormModal({ table, type, data, id }: FormModalProps) {



    const button = checkButtonType(type)
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <>
            <button className={button.className} onClick={() => setOpen(true)}>
                <Image src={button.icon} alt={button.type} width={16} height={16} />
            </button>

            {open &&
                <div className="w-screen h-screen fixed left-0 top-0 bg-black/60 z-10 flex items-center justify-center">
                    <div className='bg-white w-[90%] mx-auto    md:w-max  p-4 rounded-md relative'>
                        <button className="absolute top-4 right-4 cursor-pointer" onClick={() => setOpen(false)}>
                            <Image src='/close.png' alt='close' width={16} height={16} />
                        </button>
                        <CustomForm type={type} id={id} table={table}/>
                    </div>
                </div>
            }
        </>
    );
}

export default FormModal



