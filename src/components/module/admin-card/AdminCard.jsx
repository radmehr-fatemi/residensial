"use client"

import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";

//function
import { sp } from "src/utils/replaceNumber";

//Icon
import { MdOutlineLocationOn } from "react-icons/md";
import SpinnerLoader from "../spinner/SpinnerLoader";

const AdminCard = ({ data }) => {

    const { title, description, location, price, _id } = data;

    const [done, setDone] = useState(false);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const publishHandler = async () => {
        const res = await fetch(`/api/profile/published/${_id}`, {
            method: "PATCH"
        });

        setLoading(true)
        setDone(false)

        const data = await res.json();

        setLoading(false)

        if (data.error) return toast.error(data.error)

        if (res.status >= 200) {
            toast.success(data.massage)
            setDone(true)
            setTimeout(() => router.refresh(), 500)
        }
    }

    const deleteHandler = async () => {
        const res = await fetch(`/api/profile/published/${_id}`, {
            method: "DELETE"
        });

        setLoading(true)
        setDone(false)

        const data = await res.json();

        setLoading(false)

        if (data.error) return toast.error(data.error)

        if (res.status >= 200) {
            toast.success(data.massage)
            setDone(true)
            setTimeout(() => router.refresh(), 500)
        }
    
     }

    return (
        <div
            className="w-full h-fit overflow-hidden p-3 border border-blue-500 rounded-md my-2 md:w-96 md:mx-2"
            style={done ? { animation: "zoomOutDown .3s forwards" } : { animation: "zoomIn .4s" }}
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
            {
                loading ?
                    <div className="h-10 pr-8" >
                        <SpinnerLoader width={100} />
                    </div> :

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
                            onClick={publishHandler}
                        > انتشار </button>

                        <button
                            style={{ animation: "zoomInUp .4s .2s" }}
                            className="border-red-600 text-red-600 hover:bg-red-100"
                            onClick={deleteHandler}
                        > حذف </button>
                    </div>
            }
            <Toaster />
        </div>
    );
};

export default AdminCard;