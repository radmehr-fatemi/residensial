import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import Profile from "src/model/Profile";
import UserB from "src/model/UserB";
import connectDB from "src/utils/connectDB";

const POST = async (req) => {

    try {

        try {
            await connectDB()
        } catch (err) {
            console.log("Error in connected to DB", err)
            return NextResponse.json({
                error: "مشکل در سرور"
            })
        }

        const session = await getServerSession(req);

        if (!session) return NextResponse.json(
            { error: "لطفا واردحساب کاربری خود شوید" },
            { status: 401 }
        )

        const existingUser = await UserB.findOne({ email: session.user.email });

        if (!existingUser) return NextResponse.json(
            { error: "حساب کاربری وجود ندارد" },
            { status: 404 }
        )

        const body = await req.json();

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
        } = body;

        if (
            !title ||
            !description ||
            !location ||
            !phone ||
            !price ||
            !realState ||
            !constructionDate ||
            !category
        ) return NextResponse.json(
            { error: "اعطلاعات نا معتبر است" },
            { status: 402 }
        )

        const newProfile = await Profile.create({
            title,
            description,
            location,
            phone,
            price: +price,
            realState,
            constructionDate,
            category,
            rules,
            amenities,
            userId: new Types.ObjectId(existingUser._id)
        });

        return NextResponse.json(
            {
                massage: "اعطلاعات با موفقیت ثبت شد",
                data: body
            },
            { status: 201 }
        )

    } catch (err) {
        console.log("Error in post data --------------", err)
        return NextResponse.json(
            { error: "مشکل در سرور" },
            { status: 500 }
        )
    }
}

const PATCH = async (req) => {

    try {

        try {
            await connectDB()
        } catch (err) {
            console.log("Error in connected to DB", err)
            return NextResponse.json({
                error: "مشکل در سرور"
            })
        }

        const session = await getServerSession(req);

        if (!session) return NextResponse.json(
            { error: "لطفا واردحساب کاربری خود شوید" },
            { status: 401 }
        )

        const existingUser = await UserB.findOne({ email: session.user.email });

        if (!existingUser) return NextResponse.json(
            { error: "حساب کاربری وجود ندارد" },
            { status: 404 }
        )

        const body = await req.json();

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
            _id
        } = body;

        if (
            !id ||
            !title ||
            !description ||
            !location ||
            !phone ||
            !price ||
            !realState ||
            !constructionDate ||
            !category
        ) return NextResponse.json(
            { error: "اعطلاعات نا معتبر است" },
            { status: 402 }
        )

        const profile = await Profile.findOne({ _id });

        if (!profile) return NextResponse.json(
            {
                error: "دسترسی شما به این آگهی محدود میباشد"
            },
            { status: 422 }
        )

        console.log("Hear----------------", _id ,"Hesr" ,profile.userId)
        // return NextResponse.json("ccc")

        if (!profile.userId.equals(existingUser._id)) return NextResponse.json(
            {
                error: "دسترسی شما به این آگهی محدود میباشد"
            },
            { status: 422 }
        )

        profile.title = title
        profile.description = description
        profile.location = location
        profile.phone = phone
        profile.price = price
        profile.realState = realState
        profile.constructionDate = constructionDate
        profile.category = category
        profile.rules = rules
        profile.amenities = amenities
        profile.save()

        return NextResponse.json(
            {
                massage: "اعطلاعات با موفقیت ویرایش شد",
                data: profile
            },
            { status: 201 }
        )

    } catch (err) {
        console.log("Error in patch data --------------", err)
        return NextResponse.json(
            { error: "مشکل در سرور" },
            { status: 500 }
        )
    }
}

export { POST, PATCH }