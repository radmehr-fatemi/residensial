import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import Profile from "src/model/Profile";
import UserB from "src/model/UserB";
import connectDB from "src/utils/connectDB";

const DELETE = async (req ,context) => {

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

        const id = context.params.profileId;

        const profile = await Profile.findOne({ _id: id });

        if (!profile) return NextResponse.json(
            {
                error: "دسترسی شما به این آگهی محدود میباشد"
            },
            { status: 422 }
        )

        if (!profile.userId.equals(existingUser._id)) return NextResponse.json(
            {
                error: "دسترسی شما به این آگهی محدود میباشد"
            },
            { status: 422 }
        )

        
        await Profile.deleteOne({ _id: id })
        
        return NextResponse.json(
            {
                massage: "اعطلاعات با موفقیت حذف شد",
            },
            { status: 200 }
        )

    } catch (err) {
        console.log("Error in post data --------------", err)
        return NextResponse.json(
            { error: "مشکل در سرور" },
            { status: 500 }
        )
    }
}

export { DELETE }