"use client"

import { useState } from "react";
import SideBar from "src/components/module/sidebar/SideBar";

const DashboardLayout = ({ children, email }) => {

    const [show, setShow] = useState(false);

    return (
        <div className="w-screen h-screen relative p-4 overflow-hidden" >
            <SideBar show={show} setShow={setShow} email={email} />

            <div> {children} </div>
        </div>
    );
};

export default DashboardLayout;