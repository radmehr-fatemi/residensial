import { NextResponse } from "next/server";
import UserB from "src/model/UserB";
import { hashPassword } from "src/utils/auth";
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

        const { email, password } = await req.json();

        if (!email || !password) return NextResponse.json(
            { error: "اعطلاعات نامعتبر است" },
            { status: 422 }
        );

        const existingUser = await UserB.findOne({ email });

        if (existingUser) return NextResponse.json(
            { error: "کاربر وجود دارد" },
            { status: 422 }
        );

        const hashedPassword = await hashPassword(password);

        const newUser = await UserB.create({ email, password: hashedPassword });

        return NextResponse.json(
            {
                massage: "کاربر ساخته شد",
                data: { email }
            },
            { status: 200 }
        )

    } catch (err) {
        console.log("Error in register server", err)
        return NextResponse.json(
            { error: "مشکل در سرور" },
            { status: 500 }
        )
    }
}

export { POST }