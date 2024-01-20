//Icon
import { AiFillAlipayCircle } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import { AiTwotonePhone } from "react-icons/ai";
import { PiCalendarCheckDuotone } from "react-icons/pi";
import { MdVilla } from "react-icons/md";
import { RiHomeOfficeFill } from "react-icons/ri";
import { MdApartment } from "react-icons/md";
import { FaStore } from "react-icons/fa";

//function
import { e2p, sp } from "src/utils/replaceNumber";

//Component
import Share from "src/components/element/share/Share";

const DetailsSidebar = ({ data }) => {

    const categories = {
        villa: "خانه ویلایی",
        apartment: "آپارتمان",
        store: "مغازه",
        office: "دفتر کار"
    };

    const icons = {
        villa: <MdVilla />,
        office: <RiHomeOfficeFill />,
        apartment: <MdApartment />,
        store: <FaStore />,
    };

    const {
        phone,
        realState,
        constructionDate,
        category,
        price,
    } = data;

    return (
        <div
            className="z-10 overflow-hidden fixed top-24 left-2 w-40 p-2 rounded-md bg-white bg-opacity-50 flex flex-col justify-center items-start text-slate-600 [&>div]:py-1 2xl:right-3/4"
            style={{ boxShadow: "0 2px 5px #3B6690", animation: "shakeY 40s infinite", backdropFilter: "blur(8px)" }}
        >
            <div className="w-full flex flex-col justify-center items-center " >
                <AiFillAlipayCircle
                    style={{ animation: "rotateInUpLeft .7s " }}
                    className="text-4xl text-blue-500" />

                <p
                    style={{ animation: "backInRight .7s " }}
                    className="py-1 text-black" > {realState} </p>
            </div>

            <div
                style={{ animation: "backInRight .7s .2s " }}

                className="flex items-center" >
                <AiTwotonePhone className="text-lg" />
                {e2p(phone)}
            </div>

            <Share />

            <div
                style={{ animation: "backInRight .7s .6s " }}
                className="flex" >
                <span className="text-blue-600 text-xl ml-1" >
                    {icons[category]}
                </span>
                {categories[category]}
            </div>

            <div
                style={{ animation: "backInRight .7s .8s " }}
                className="flex items-center" >
                <PiCalendarCheckDuotone className="text-blue-600 text-xl ml-1" />
                {new Date(constructionDate).toLocaleDateString("fa", "ir")}
            </div>

            <h2
                style={{ animation: "backInRight .7s 1s " }}
                className="text-center w-full"
            >
                {sp(price)} تومان
            </h2>

        </div>
    );
};

export default DetailsSidebar;