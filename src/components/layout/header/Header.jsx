"use client"

import { useSession } from "next-auth/react";
import Link from "next/link";

//Icon
import { BiLogInCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const Header = () => {

    const session = useSession();

    return (
        <header
            style={{
                animation: "fadeInDown .2s"
            }}
            className="
            flex
            justify-between
            items-center
            p-4
            bg-blue-700
            bg-opacity-80
            text-white
            md:px-8
            ">
            <div
                className="
                flex
                items-center
                [&>a]:text-white
                [&>a]:px-1
                md:[&>a]:px-4
             " >
                <Link
                    href="/"
                    className="hover:scale-105"
                > صفحه اصلی </Link>
                
                <Link
                    href="/buy-residentials"
                    className="hover:scale-105"
                > آگهی ها </Link>
            </div>

            <div>
                {
                    session.status === "authenticated" ? (
                        <Link href="/dashboard" className="text-white  inline-block" >
                            <CgProfile
                                className="
                            hover:bg-white
                            hover:text-blue-600
                            rounded-2xl
                            text-3xl
                            cursor-pointer
                            " />
                        </Link>

                    ) : (
                        <Link
                            href="/signin"
                            className='
                                flex 
                                items-center
                                border 
                                rounded-md
                                p-0.5
                                text-white
                                hover:bg-white
                                hover:text-blue-600
                        '>
                            <BiLogInCircle className="w-6 h-6" />
                            ورود
                        </Link>
                    )}
            </div>
        </header>
    );
};

export default Header;