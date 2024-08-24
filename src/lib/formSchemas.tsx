import { z } from 'zod';

const passwordSchema = z.string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(20, { message: "Password must be at most 20 characters long" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[@$!%*?&]/, { message: "Password must contain at least one special character (@$!%*?&)" });

const phoneSchema = z.string()
    .regex(/^\d{9}$/, { message: "Phone number must be exactly 9 digits long" });

const teacherFormSchema = z.object({
    username: z.string()
        .min(3, { message: 'The username must be at least 3 characters long.' })
        .max(20, { message: "Username must be shorter than 20 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    password: passwordSchema,
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "First name is required" }),
    phone: phoneSchema,
    address: z.string().min(1, { message: "Address is required" }),
    birthday: z.coerce.date(),
    sex: z.enum(['male', 'female', 'other'], {message: "Sex is required"}),
    img: z.instanceof(File).optional()

});

export { teacherFormSchema };
