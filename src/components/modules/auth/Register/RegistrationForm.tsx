"use client"
import type React from "react"
import {Button} from "@/components/ui/button"
import {Label} from "@/components/ui/label"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {GenericForm} from "@/components/shared/form/GenericForm";
import {z} from "zod";
import {registerSchema} from "@/components/modules/auth/Register/validationSchema";

type TRegister = z.infer<typeof registerSchema>

const initialValues = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
}

export default function RegistrationForm() {


    const onSubmit = (e: TRegister) => {

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
            <Card className="w-full max-w-md shadow-xl border-0 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                    <CardTitle className="text-2xl font-bold">Create an Account</CardTitle>
                    <CardDescription className="text-indigo-100">Join our community today</CardDescription>
                </CardHeader>
                <GenericForm initialValues={initialValues} schema={registerSchema} onSubmit={onSubmit}>
                    <CardContent className="space-y-4 pt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <GenericForm.Text<TRegister> name={"firstName"} label={"First Name"}
                                                             placeholder={"John"}/>
                            </div>
                            <div className="space-y-2">
                                <GenericForm.Text<TRegister> name={"lastName"} label={"First Name"}
                                                             placeholder={"John"}/>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <GenericForm.Text<TRegister> type={"email"} name={"firstName"} label={"First Name"}
                                                         placeholder={"John"}/>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-sm font-medium">
                                Password
                            </Label>
                            <div className="relative">
                                <GenericForm.PasswordField<TRegister> name="password" label={"Password"} required
                                                                      placeholder="********" showStrength showIcon showMessage />

                            </div>
                        </div>

                        <div className="space-y-2">
                            <GenericForm.PasswordField<TRegister> name="confirmPassword" label={"Confirm Password"} required
                                                                  placeholder="********" />
                        </div>

                        <div className="flex items-start space-x-2 pt-2">
                            <GenericForm.Checkbox<TRegister> name={"terms"} label={"I agree to the Terms of Service and Privacy Policy"}/>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-4">
                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-md"
                        >
                            Create Account
                        </Button>
                        <p className="text-center text-sm text-gray-500">
                            Already have an account?{" "}
                            <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">
                                Sign in
                            </a>
                        </p>
                    </CardFooter>
                </GenericForm>
            </Card>
        </div>
    )
}

