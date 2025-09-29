import {z} from "zod";

const passwordRequirements = {
    minLength: 6,
    hasUpperCase: /[A-Z]/,
    hasLowerCase: /[a-z]/,
    hasNumber: /[0-9]/,
    hasSpecialChar: /[^A-Za-z0-9]/,
};

export const registerSchema = z.object({
    name: z.string().nonempty({ message: "First Name is required"}),
    lastName: z.string().nonempty({ message: "Last Name is required" }),

    email: z.string().email({ message: "Email is invalid"}).nonempty({ message: "Email is required"}),
    password: z
        .string().nonempty({ message: "Password is required"})
    .min(
        passwordRequirements.minLength,
        `Password must be at least ${passwordRequirements.minLength} characters`
    )
    .regex(
        passwordRequirements.hasUpperCase,
        'Password must contain at least one uppercase letter'
    )
    .regex(
        passwordRequirements.hasLowerCase,
        'Password must contain at least one lowercase letter'
    )
    .regex(
        passwordRequirements.hasNumber,
        'Password must contain at least one number'
    )
    .regex(
        passwordRequirements.hasSpecialChar,
        'Password must contain at least one special character'
    ),
    confirmPassword: z.string().nonempty({ message: "Confirm Password" }),
    acceptedTerms: z.boolean().refine(val => val, {
        message: "You must accept the terms to continue",
    }),
})