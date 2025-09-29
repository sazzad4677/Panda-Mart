"use client"
import React, {useRef} from "react"
import {Button} from "@/components/ui/button"
import {CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {GenericForm, TGenericFormRef} from "@/components/shared/form/GenericForm";
import {z} from "zod";
import {registerSchema} from "@/components/modules/auth/Register/validationSchema";
import Link from "next/link";
import {register} from "@/services/AuthService";

type TRegister = z.infer<typeof registerSchema>

const initialValues = {
    email: "",
    name: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    acceptedTerms: false,
}

export default function RegistrationForm() {

    const formRef = useRef<TGenericFormRef<TRegister>>(null);
    const isSubmitting = formRef.current?.formState.isSubmitting;

    const onSubmit = async(e: TRegister) => {
        // console.log(e)
        const res = await register(e)
        console.log(res)
    }

    //  Fill out form with test data
    const fillOutForm = () => {
        const testValues = {
            name: "John",
            lastName: "Doe",
            email: "john.doe@example.com",
            password: "Password123!",
            confirmPassword: "Password123!",
            acceptedTerms: true,
        }
        formRef.current?.reset(testValues);
    }

    return (
        <div className="md:w-2/3 flex flex-col">
            <CardHeader className="text-center py-4 px-8">
                <CardTitle className="text-2xl font-bold">Create an Account</CardTitle>
                <CardDescription className="text-gray-500 mt-1">
                    Just a few steps away. Create your account to get started!
                </CardDescription>
            </CardHeader>

            <GenericForm
                ref={formRef}
                initialValues={initialValues}
                schema={registerSchema}
                onSubmit={onSubmit}
            >
                <CardContent className="space-y-4 px-8 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <GenericForm.Text<TRegister>
                                name={"name"}
                                label={"First Name"}
                                placeholder={"John"}
                                autoComplete="given-name"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <GenericForm.Text<TRegister>
                                name={"lastName"}
                                label={"Last Name"}
                                placeholder={"Doe"}
                                autoComplete="family-name"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <GenericForm.Text<TRegister>
                            type={"email"}
                            name={"email"}
                            label={"Email"}
                            placeholder={"example@example.com"}
                            autoComplete="email"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <GenericForm.PasswordField<TRegister>
                            name="password"
                            label={"Password"}
                            required
                            placeholder="At least 8 characters"
                            showStrength
                            showMessage
                            autoComplete="new-password"
                        />
                    </div>

                    <div className="space-y-2">
                        <GenericForm.PasswordField<TRegister>
                            name="confirmPassword"
                            label={"Confirm Password"}
                            required
                            placeholder="Confirm your password"
                            autoComplete="new-password"
                        />
                    </div>

                    <div className="flex items-start space-x-2 pt-2">
                        <GenericForm.Checkbox<TRegister>
                            name={"acceptedTerms"}
                            label={
                                "Agree to the terms and conditions"
                            }
                            required
                        />
                    </div>
                </CardContent>

                <CardFooter className="flex flex-col gap-4 px-8 pb-6">
                    <Button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all duration-300 rounded-lg py-3"
                        loading={isSubmitting}
                    >
                        Create Account
                    </Button>

                    <p className="text-center text-sm text-gray-500">
                        Already have an account?{" "}
                        <Link href="/login"
                              className="text-orange-600 hover:text-orange-800 font-medium hover:underline">
                            Sign in
                        </Link>
                    </p>
                    <Button
                        type="button"
                        variant="outline"
                        className="w-full border-orange-500 text-orange-600 hover:bg-orange-50 hover:text-orange-700 font-semibold transition-all duration-300 rounded-lg py-3"
                        onClick={fillOutForm}
                    >
                        🧪 Fill Out Form (Dev)
                    </Button>
                </CardFooter>
            </GenericForm>
        </div>
    )
}