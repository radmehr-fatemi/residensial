"use client"

//function
import { sp } from "src/utils/replaceNumber";

//Icon
import { MdOutlineLocationOn } from "react-icons/md";

const AdminCard = ({ data }) => {

    const { title, description, location, price, _id } = data;

    return (
        <div
            className="w-full h-fit overflow-hidden p-3 border border-blue-500 rounded-md my-2 md:w-96 md:mx-2"
            style={{ animation: "zoomIn .4s" }}
        >
            <h3
                style={{ animation: "lightSpeedInRight .4s .2s" }}
                className="text-xl text-blue-900"
            > {title} </h3>

            <p
                style={{ animation: "lightSpeedInRight .4s .4s" }}
            > {description} </p>

            <div
                style={{ animation: "lightSpeedInRight .4s .6s" }}
                className="py-1 border-y-2 border-blue-200" >
                <h4 className="text-slate-600 flex">
                    <MdOutlineLocationOn />
                    {location}
                </h4>

                <h4
                    style={{ animation: "lightSpeedInRight .4s .8s" }}
                > {sp(price)} تومان </h4>
            </div>

            <div
                className="
                    flex
                    items-center
                    justify-between
                    pt-2
                    [&>button]:w-24 
                    [&>button]:border 
                    [&>button]:rounded-md 
            "
            >
                <button
                    style={{ animation: "zoomInUp .4s .2s" }}
                    className="border-green-600 text-green-600 hover:bg-green-100"
                > انتشار </button>

                <button
                    style={{ animation: "zoomInUp .4s .2s" }}
                    className="border-red-600 text-red-600 hover:bg-red-100"
                    > حذف </button>
            </div>
        </div>
    );
};

export default AdminCard;