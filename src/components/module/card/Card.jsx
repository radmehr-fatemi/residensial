import Link from "next/link";

//function
import { sp } from "src/utils/replaceNumber";

//Icon
import { MdVilla } from "react-icons/md";
import { RiHomeOfficeFill } from "react-icons/ri";
import { MdApartment } from "react-icons/md";
import { FaStore } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { TiArrowLeft } from "react-icons/ti";

const Card = ({ profileData }) => {

    const { title, location, category, price ,_id } = profileData;
    const icon = {
        villa: <MdVilla />,
        office: <RiHomeOfficeFill />,
        apartment: <MdApartment />,
        store: <FaStore />,
    };

    return (
        <div
            className="
        w-full
        border
        border-blue-600
        rounded-md
        p-2
        " >
            <div className="text-2xl  border  bg-blue-300 inline-block p-1 rounded-md text-blue-900 "
            > {icon[category]} </div>

            <p> {title} </p>

            <div className="flex justify-start text-slate-500 py-1" >
                <FaMapLocationDot className="text-xl ml-2" />
                {location}
            </div>

            <span> {sp(price)} تومان </span>

            <div className="py-1" >
                <Link
                 className="text-blue-500 flex justify-start items-center"
                 href={`/buy-residentials/${_id}`} >
                    <p> مشاهده آگهی </p>
                    <TiArrowLeft className="text-xl" />
                </Link>
            </div>
        </div>
    );
};

export default Card;