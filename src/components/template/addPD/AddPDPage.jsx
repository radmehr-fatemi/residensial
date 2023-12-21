"use client"

import { useState } from "react";

//Component
import TextInput from "@/module/text input/TextInput";
import RadioList from "src/components/module/radio list/RadioList";
import TextList from "src/components/module/text list/TextList";

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

    const submitHandler = () => {
        console.log(profileData)
    }

    return (
        <div
            style={{
                animation: "zoomInDown .5s"
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

                <div className="flex justify-center py-6" >
                    <button
                        onClick={submitHandler}
                        className="w-32 bg-blue-600 text-white py-1 rounded-md hover:bg-blue-500"
                    > ثبت آگهی </button>
                </div>
            </div>
        </div>
    );
};

export default AddPDPage;