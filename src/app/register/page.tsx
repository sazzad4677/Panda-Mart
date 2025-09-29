import RegistrationForm from "@/components/modules/auth/Register/RegistrationForm";
import Logo from "@/app/assets/pngs/Logo";
import React from "react";

const Register = () => {
    return (
        <div className={"min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50"}>
            {/* Left Column: Logo */}
            <div
                className="w-full max-w-4xl shadow-lg border rounded-xl overflow-hidden flex flex-col md:flex-row bg-white py-0">
                <div
                    className="md:w-1/3 bg-orange-50 flex flex-col items-center justify-center  relative rounded-tl-xl rounded-bl-xl">
                    <Logo shadow/>
                    <div className="absolute right-0 top-0 bottom-0 w-6 pointer-events-none">
                        <div className="h-full w-full bg-gradient-to-r from-orange-50 to-transparent opacity-70"></div>
                    </div>
                </div>
                {/* Right Column: Form */}
                <RegistrationForm/>
            </div>
        </div>
    );
};
Register.displayName = `Register`
export default Register;