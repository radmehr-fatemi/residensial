import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"
import Profile from "src/model/Profile"
import UserB from "src/model/UserB"
import connectDB from "src/utils/connectDB"

const PATCH = async (req, context) => {

    try {

        try {
            await connectDB()
        } catch (err) {
            console.log("Error in Connected to DB", err)
            return NextResponse.json(
                { error: "مشکل در سرور" },
                { status: 444 }
            )
        }

        const session = await getServerSession(req);

        if (!session) return NextResponse.json(
            { error: "ابتدا وارد حساب کاربری خود شوید" },
            { status: 422 }
        )

        const user = await UserB.find({ email: session.user.email });

        if (user.role !== "ADMIN") return NextResponse.json(
            { error: "دسترسی شما محدود است" },
            { status: 444 }
        )

        if (!user) return NextResponse.json(
            { error: "دسترسی شما محدود است" },
            { status: 444 }
        )

        const id = context.params.profileId;

        const profile = await Profile.find({ _id: id })

        if (!profile) return NextResponse.json(
            { error: "داده مورد نظر یافت نشد" },
            { status: 404 }
        )

        if (!profile.userId.equals(user.id)) return NextResponse.json(
            { error: "دسترسی شما به دیتا مورد نظر محدود میباشد" },
            { status: 444 }
        )

        profile.published = true
        profile.save()

        return NextResponse.json(
            { massage: "آکهی با موفقیت منتشر شد" },
            { status: 200 }
        )

    } catch (err) {
        console.log("Error in PATCh data", err)
        return NextResponse.json(
            { error: "مشکل در سرور" },
            { status: 444 }
        )
    }
}

const DELETE = async (req, context) => {

    try {

        try {
            await connectDB()
        } catch (err) {
            console.log("Error in Connected to DB", err)
            return NextResponse.json(
                { error: "مشکل در سرور" },
                { status: 444 }
            )
        }

        const session = await getServerSession(req);

        if (!session) return NextResponse.json(
            { error: "ابتدا وارد حساب کاربری خود شوید" },
            { status: 422 }
        )

        const user = await UserB.find({ email: session.user.email });

        if (user.role !== "ADMIN") return NextResponse.json(
            { error: "دسترسی شما محدود است" },
            { status: 444 }
        )

        if (!user) return NextResponse.json(
            { error: "دسترسی شما محدود است" },
            { status: 444 }
        )

        const id = context.params.profileId;

        const profile = await Profile.find({ _id: id })

        if (!profile) return NextResponse.json(
            { error: "داده مورد نظر یافت نشد" },
            { status: 404 }
        )

        if (!profile.userId.equals(user.id)) return NextResponse.json(
            { error: "دسترسی شما به دیتا مورد نظر محدود میباشد" },
            { status: 444 }
        )

        profile.deleteOne({ _id: id })

        return NextResponse.json(
            { massage: "آکهی با موفقیت حذف شد" },
            { status: 200 }
        )

    } catch (err) {
        console.log("Error in delete data", err)
        return NextResponse.json(
            { error: "مشکل در سرور" },
            { status: 444 }
        )
    }
}

export { PATCH, DELETE }