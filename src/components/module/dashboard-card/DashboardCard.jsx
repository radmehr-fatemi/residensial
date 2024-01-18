"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

//Component
import Card from "../card/Card";
import SpinnerLoader from "../spinner/SpinnerLoader";

const DashboardCard = ({ profileData }) => {

    const router = useRouter();
    const [loading, setLoading] = useState(false)

    const editHandler = () => {
        router.push(`/dashboard/my-profiles/${profileData._id}`)
    }

    const deleteHandler = async () => {
        const res = await fetch(`/api/profile/delete/${profileData._id}`, {
            method: "DELETE",
        })
        setLoading(true)

        const data = await res.json()
        setLoading(false)

        if (!!data.error) return toast.error(data.error)

        if (res.status >= 200) {
            toast.success(data.massage)
            router.refresh()
        }
    }

    return (
        <div
            className="w-full h-fit my-4 p-2 py-3 rounded-md border-2 border-blue-600 md:m-4 md:w-80"
            style={{ animation: "zoomInDown 1s" }}
        >
            <Card profileData={profileData} />

            {
                loading ?
                    <div className="w-full h-8 pr-6 " >
                        <SpinnerLoader error={true} />
                    </div> :

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
            }

            <Toaster />
        </div>
    );
};

export default DashboardCard;