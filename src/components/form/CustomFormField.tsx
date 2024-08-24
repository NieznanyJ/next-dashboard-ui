import React, { useState } from 'react';
import { FormFieldType } from "@/types/enums";
import { Control, ControllerRenderProps, FieldValues } from "react-hook-form";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { SelectSingleEventHandler } from 'react-day-picker';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface CustomFormFieldProps {
    type: FormFieldType;
    name: string;
    label: string;
    placeholder?: string;
    description?: string;
    control: Control<FieldValues>;
    options?: { value: string; label: string }[];
}

function renderCustomFormField({ 
    props, 
    field, 
    date, 
    setDate 
}: { 
    props: CustomFormFieldProps; 
    field: ControllerRenderProps<FieldValues, string>; 
    date?: Date; 
    setDate?: React.Dispatch<React.SetStateAction<Date | undefined>>;
}) {
    const { type, placeholder, options } = props;

    switch (type) {
        case FormFieldType.INPUT:
            return (
                <FormControl>
                    <Input className='w-full' placeholder={placeholder} {...field} />
                </FormControl>
            );

            case FormFieldType.DATE:
                return (
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[280px] justify-start text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={(date) => field.onChange(date)}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                );
        case FormFieldType.SELECT:
            return (
                <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder={placeholder || "Select an option"} />
                        </SelectTrigger>
                        <SelectContent>
                            {options?.map((option) => (
                                <SelectItem className='cursor-pointer hover:bg-gray-200 transition-colors' key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </FormControl>
            );

        default:
            return null;
    }
}

function CustomFormField(props: CustomFormFieldProps) {
    const [date, setDate] = useState<Date | undefined>();
    const { name, label, description, control } = props;

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className='w-full'>
                    <FormLabel>{label}</FormLabel>
                    {renderCustomFormField({ props, field, date, setDate })}
                    {description && <FormDescription>{description}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}

export default CustomFormField;