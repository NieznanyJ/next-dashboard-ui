"use client"
import { FormType, RowType, FormFieldType } from "@/types/enums";
import { zodResolver } from '@hookform/resolvers/zod';
import { teacherFormSchema } from "@/lib/formSchemas";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import CustomFormField from "./CustomFormField";
import { Button } from "../ui/button";

interface TeacherFormProps {
    table: RowType;
    type: FormType.CREATE | FormType.UPDATE;
    data?: any;
}

const sexOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
];

function TeacherForm({ table, type, data }: TeacherFormProps) {
    const form = useForm({
        resolver: zodResolver(teacherFormSchema),
        defaultValues: data 
    });

    function onSubmit(formData: any) {
        console.log(formData); 
       
    }

    return (
        <Form {...form}>
            <h1 className="font-semibold text-lg">
                {type === FormType.CREATE ? 'Create new teacher' : 'Update teacher'}
            </h1>
            <form 
                className="p-4 h-max flex flex-col justify-between items-stretch gap-10 mt-6 overflow-y-auto md:overflow-auto max-h-[600px] xl:max-h-[800px] xl:h-[600px]"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <section className='flex flex-col gap-4'>
                    <h2 className="text-sm text-gray-500">Authentication information</h2>
                    <div className="w-full flex flex-col md:grid grid-cols-2 xl:grid-cols-3 items-center justify-between gap-6">
                        <CustomFormField type={FormFieldType.INPUT} name='username' label='Username' placeholder="eg. user1234" control={form.control} />
                        <CustomFormField type={FormFieldType.INPUT} name='email' label='Email' placeholder="eg. user@gmail.com" control={form.control} />
                        <CustomFormField type={FormFieldType.INPUT} name='password' label='Password' placeholder="******" control={form.control} />
                    </div>
                </section>
                <section className='flex flex-col gap-4'>
                    <h2 className="text-sm text-gray-500">Personal information</h2>
                    <div className="flex flex-col items-stretch md:grid grid-cols-2 xl:grid-cols-3 gap-6">
                        <CustomFormField type={FormFieldType.INPUT} name='firstName' label='First Name' placeholder="eg. Bob" control={form.control} />
                        <CustomFormField type={FormFieldType.INPUT} name='lastName' label='Last Name' placeholder="eg. Smith" control={form.control} />
                        <CustomFormField type={FormFieldType.INPUT} name='phone' label='Phone number' placeholder="eg. 123456789" control={form.control} />
                        <CustomFormField type={FormFieldType.INPUT} name='address' label='Address' placeholder="eg. 5th Street" control={form.control} />
                        <CustomFormField type={FormFieldType.DATE} name='birthday' label='Date of birth' placeholder="eg. 1990-09-12" control={form.control} />
                        <CustomFormField type={FormFieldType.SELECT} name='sex' label='Sex' options={sexOptions} control={form.control} />
                    </div>
                </section>
                <Button className='bg-sky-500' type='submit'>
                    {type === FormType.CREATE ? 'Create' : 'Update'}
                </Button>
            </form>
        </Form>
    );
}

export default TeacherForm;