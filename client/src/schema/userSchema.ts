import { z } from "zod";

export const userSignupSchema = z.object({
    fullname: z.string().min(1, "Fullname is required"),
    email: z.string().email("Email is required"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    contact: z.string().min(10,  "Contact number must be atleast 10 digits long")
})

export type SignupInputTypes = z.infer<typeof userSignupSchema>;

export const userLoginSchema = z.object({
    email: z.string().email("Email is required"),
    password: z.string().min(6, "Password must be at least 6 characters long")
})

export type LoginInputTypes = z.infer<typeof userLoginSchema>;