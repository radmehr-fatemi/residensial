"use client"

import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

//Icon
import { AiOutlineShareAlt } from "react-icons/ai";

const Share = () => {

    const [location, setLocation] = useState("");

    useEffect(() => {
        setLocation(window.location.href)
    } ,[])

    return (
        <CopyToClipboard text={location} >
            <div
                style={{ animation: "backInRight .7s .4s " }}
                className="flex items-center" >
                <AiOutlineShareAlt className="ml-1 text-xl text-blue-600" />
                اشتراک گذاری
            </div>
        </CopyToClipboard>
    );
};

export default Share;