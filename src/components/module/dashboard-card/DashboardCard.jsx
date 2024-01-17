"use client"

//Component
import Card from "../card/Card";

const DashboardCard = ({ profileData }) => {

    const editHandler = () => { }
    const deleteHandler = () => { }

    return (
        <div
            className="w-full h-fit my-4 p-2 py-3 rounded-md border-2 border-blue-600 md:m-4 md:w-80"
            style={{ animation: "zoomInDown 1s" }}
        >
            <Card profileData={profileData} />

            <div
                className="
            flex justify-between items-center pt-3 
            [&>button]:w-20
            [&>button]:border
            [&>button]:rounded-md
            
            " >
                <button
                    className="border-green-600 text-green-600 hover:bg-green-100"
                    onClick={editHandler} > ویرایش </button>
                <button

                    className="border-red-500 text-red-500 hover:bg-red-100"
                    onClick={deleteHandler} > حذف </button>
            </div>
        </div>
    );
};

export default DashboardCard;