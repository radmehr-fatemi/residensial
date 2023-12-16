import Link from "next/link";

//Icon
import { CgProfile } from "react-icons/cg";
import { BiLogInCircle } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

const SideBar = ({ show, setShow ,email }) => {
    return (
        <>
            <GiHamburgerMenu
                onClick={() => setShow(true)}
                style={
                    !show ? { animation: "bounceIn .2s forwards" } : { animation: "bounceOut .2s forwards" }
                }
                className="
                    text-4xl
                    text-blue-900
                    cursor-pointer
                "
            />
            <div
                style={
                    show ? { animation: "zoomInUp .3s forwards" } : { animation: "backOutLeft .3s forwards" }
                }
                className="
                    w-full
                    h-full
                    p-8
                    shadow-blue-400
                    bg-opacity-1
                    backdrop-blur-sm
                    absolute
                    top-0
                    right-0
            " >
                <div
                    className="
                        flex
                        items-center
                        justify-between
                    " >
                    <div
                        className="
                            text-xl
                            [&>svg]:text-5xl
                            [&>svg]:mb-1
                            " >
                        <CgProfile />
                        {email}
                    </div>
                    <div>
                        <ImCross
                            onClick={() => setShow(false)}
                            className="text-3xl text-blue-900 relative -top-6 cursor-pointer " />
                    </div>
                </div>

                <ul
                    className="
                [&>li]:py-2
                [&>li]:border-t
                [&>li]:border-blue-800
                "
                >
                    <li onClick={() => setShow(false)} ><Link href="/profile"> حساب کاربری </Link></li>
                    <li onClick={() => setShow(false)} ><Link href="/profile-data"> آگهی های من </Link></li>
                    <li onClick={() => setShow(false)} ><Link href="/add-profile-data"> ثبت آگهی </Link></li>

                    <button
                        className="
                    w-full
                    border-t
                    border-blue-800
                    flex
                    items-center
                    text-red-600
                    [&>svg]:text-2xl
                    py-2
                    ">
                        <BiLogInCircle />
                        خروج از حساب کاربری
                    </button>
                </ul>
            </div>
        </>
    );
};

export default SideBar;