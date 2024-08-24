export interface Student {
    id: number;
    studentId?: string;
    name: string;
    email?: string;
    photo: string;
    phone: string;
    grade: number;
    class: string;
    address: string;
}

export interface Parent {
    id: number;
    name: string;
    students: string[];
    email?: string;
    phone: string;
    address: string;
}

export interface Teacher {
    id: number;
    teacherId?: string;
    name: string;
    email?: string;
    photo: string; // URL to the teacher's photo
    phone: string;
    subjects: string[]; // Array of subjects the teacher teaches
    classes: string[]; // Array of class names/identifiers the teacher is assigned to
    address: string;
}

export interface Subject {
    id: number;
    name: string;
    teachers: string[];
}

export interface Class {
    id: number;
    name: string;
    capacity: number;
    grade: number;
    supervisor: string;
}

export interface Lesson {
    id: number;
    subject: string;
    class: string;
    teacher: string;
}

export interface Exam {
    id: number;
    subject: string;
    class: string;
    teacher: string;
    date: string;
}

export interface Assignment {
    id: number;
    subject: string;
    class: string;
    teacher: string;
    dueDate: string;
}

export interface Result {
    id: number;
    subject: string;
    class: string;
    teacher: string;
    student: string;
    date: string;
    type: string;
    score: number;
}

export interface Event{
    id: number,
    title: string,
    class: string,
    date: string,
    startTime: string,
    endTime: string,
}


export interface Announcement{
    id: number,
    title: string,
    class: string,
    date: string,
}
