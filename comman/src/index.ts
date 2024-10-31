import z from "zod"

export const signupInput = z.object({
    username: z.string().email(),
    password: z.string().min(6)
})

export const signinInput = z.object({
    
    username: z.string().email(),
    password: z.string().min(6)
})

export const  createtaskInput = z.object ({
    title: z.string(),
    description: z.string()
})

export const  updatetaskInput = z.object ({
    title: z.string(),
    description: z.string(),
    id: z.number()
})

export const updatecompleted = z.object ({
     Completed: z.boolean()
})

export type SignupInput = z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof signinInput>
export type CreatetaskInput = z.infer<typeof createtaskInput>
export type UpdatetaskInput = z.infer<typeof updatetaskInput>
export type UpdateCompleted = z.infer<typeof updatecompleted>