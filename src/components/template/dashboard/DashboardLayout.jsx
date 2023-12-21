"use client"

import { useState } from "react";

//Component
import SideBar from "src/components/module/sidebar/SideBar";

const DashboardLayout = ({ children, email }) => {

    const [show, setShow] = useState(false);

    return (
        <div className="w-screen relative p-4 m-auto overflow-x-hidden " >
            <SideBar show={show} setShow={setShow} email={email} />

            <div> {children} </div>
        </div>
    );
};

export default DashboardLayout;