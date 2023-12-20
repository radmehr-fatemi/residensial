"use client"

import { useState } from "react";

//Component
import TextInput from "@/module/text input/TextInput";

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
        rules: "",
        amenities: "",
    });

    const submitHandler = () => {
        console.log(profileData)
    }

    return (
        <div
            style={{
                animation: "zoomInDown .5s"
            }}
            className="md:w-4/6 m-auto" >

            <h1 className="text-center text-2xl text-blue-600"
            > ثبت آگهی </h1>

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
                title="َماره تماس"
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
            <div className="flex justify-center mt-2" >
                <button
                    onClick={submitHandler}
                    className="w-32 bg-blue-600 text-white py-1 rounded-md hover:bg-blue-500"
                > ثبت آگهی </button>
            </div>
        </div>
    );
};

export default AddPDPage;