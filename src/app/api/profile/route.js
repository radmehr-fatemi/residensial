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
            !category ||
            !rules ||
            !amenities
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

export { POST }