import z from "zod";
export declare const signupInput: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
}, {
    username: string;
    password: string;
}>;
export declare const signinInput: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
}, {
    username: string;
    password: string;
}>;
export declare const createtaskInput: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    description: string;
}, {
    title: string;
    description: string;
}>;
export declare const updatetaskInput: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    title: string;
    description: string;
    id: number;
}, {
    title: string;
    description: string;
    id: number;
}>;
export declare const updatecompleted: z.ZodObject<{
    Completed: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    Completed: boolean;
}, {
    Completed: boolean;
}>;
export type SignupInput = z.infer<typeof signupInput>;
export type SigninInput = z.infer<typeof signinInput>;
export type CreatetaskInput = z.infer<typeof createtaskInput>;
export type UpdatetaskInput = z.infer<typeof updatetaskInput>;
export type UpdateCompleted = z.infer<typeof updatecompleted>;
