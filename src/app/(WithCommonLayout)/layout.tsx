import React from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const CommonLayout = ({children}: { children: React.ReactNode }) => (
    <div>
        <Navbar/>
        <main className={"min-h-screen"}>
            {children}
        </main>
        <Footer/>
    </div>
)

export default CommonLayout;