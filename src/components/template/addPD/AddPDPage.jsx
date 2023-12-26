"use client"

import { useState } from "react";

//Component
import TextInput from "@/module/text input/TextInput";
import RadioList from "src/components/module/radio list/RadioList";
import TextList from "src/components/module/text list/TextList";
import CustomDatePicker from "src/components/module/custom date picker/CustomDatePicker";
import SpinnerLoader from "src/components/module/spinner/SpinnerLoader";
import toast, { Toaster } from "react-hot-toast";

const AddPDPage = () => {

    const [profileData, setProfileData] = useState({
        title: "",
        description: "",
        location: "",
        phone: "",
        price: "",
        realState: "",
        constructionDate: new Date(),
        category: "",
        rules: [],
        amenities: [],
    });

    const [loading, setLoading] = useState(false);

    const submitHandler = async () => {

        const {
            title,
            description,
            location,
            phone,
            price,
            realState,
            constructionDate,
            category,
            rules,
            amenities,
        } = profileData;


        if (
            !title ||
            !description ||
            !location ||
            !phone ||
            !price ||
            !realState ||
            !constructionDate ||
            !category ||
            !rules ||
            !amenities
        ) {
            return toast.error(" اعطلاعات نامعتبر است ")

        } else {
            const res = await fetch("/api/profile", {
                method: "POST",
                headers: { "Content-Type": "Application/json" },
                body: JSON.stringify(profileData)
            })
            setLoading(true);

            const data = await res.json();
            setLoading(false)

            if ( data.error ) return toast(data.error)

            if ( res.status >= 200 ) {
                setProfileData({
                    title: "",
                    description: "",
                    location: "",
                    phone: "",
                    price: "",
                    realState: "",
                    constructionDate: new Date(),
                    category: "",
                    rules: [],
                    amenities: [],
                })
                return toast.success(data.massage)
            }

        }
    }

    return (
        <div
            style={{
                animation: "zoomInLeft .5s"
            }}
            className="max-w-screen-xl w-screen flex flex-col items-center  text-blue-900" >

            <h1 className="text-center text-2xl text-blue-600"
            > ثبت آگهی </h1>

            <div className="w-5/6" >
                <TextInput
                    title="عنوان آگهی"
                    name="title"
                    profileData={profileData}
                    setProfileData={setProfileData}
                />

                <TextInput
                    title="توضیحات"
                    name="description"
                    profileData={profileData}
                    setProfileData={setProfileData}
                    textarea={true}
                />

                <TextInput
                    title="آدرس"
                    name="location"
                    profileData={profileData}
                    setProfileData={setProfileData}
                />
                <TextInput
                    title="شماره تماس"
                    name="phone"
                    profileData={profileData}
                    setProfileData={setProfileData}
                />
                <TextInput
                    title="قیمت(تومان)"
                    name="price"
                    profileData={profileData}
                    setProfileData={setProfileData}
                />
                <TextInput
                    title="بنگاه"
                    name="realState"
                    profileData={profileData}
                    setProfileData={setProfileData}
                />

                <div>
                    <h3 className="py-2"> دسته بندس: </h3>

                    <div className="flex justify-evenly" >
                        <RadioList
                            label="ویلا"
                            name="villa"
                            profileData={profileData}
                            setProfileData={setProfileData}
                        />
                        <RadioList
                            label="آپارتمان"
                            name="apartment"
                            profileData={profileData}
                            setProfileData={setProfileData}
                        />
                        <RadioList
                            label="مغازه"
                            name="store"
                            profileData={profileData}
                            setProfileData={setProfileData}
                        />
                        <RadioList
                            label="دفتر"
                            name="office"
                            profileData={profileData}
                            setProfileData={setProfileData}
                        />
                    </div>

                </div>

                <TextList
                    profileData={profileData}
                    setProfileData={setProfileData}
                    type="amenities"
                    title="امکانات رفاهی"
                />
                <TextList
                    profileData={profileData}
                    setProfileData={setProfileData}
                    type="rules"
                    title="قوانین"
                />

                <CustomDatePicker profileData={profileData} setProfileData={setProfileData} />

                <div className="flex justify-center py-6" >
                    {
                        loading ? (
                            <SpinnerLoader />
                        ) :
                            (<button
                                onClick={submitHandler}
                                className="w-32 bg-blue-600 text-white py-1 rounded-md hover:bg-blue-500"
                            > ثبت آگهی </button>)
                    }
                </div>
            </div>

            <Toaster />
        </div>
    );
};

export default AddPDPage;