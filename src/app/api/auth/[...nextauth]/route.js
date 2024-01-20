import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";
import UserB from "src/model/UserB";
import { verifyPassword } from "src/utils/auth";
import connectDB from "src/utils/connectDB";

export const authOptions = {
    session: { strategy: "jwt" },
    providers: [
        CredentialsProvider({
            async authorize(credential) {

                try {
                    await connectDB()
                } catch (err) {
                    console.log("Error in connected to DB", err)
                    return NextResponse.json({
                        error: "مشکل در سرور"
                    })
                }

                const { email, password } = credential;

                if (!email || !password) throw new Error("اعطلاعات نامعتبر است")

                const existingUser = await UserB.findOne({ email });

                if (!existingUser) throw new Error("کاربر وجود ندارد")

                const isValid = await verifyPassword(password, existingUser.password)

                if (!isValid) throw new Error("ایمیل یا پسورد نادرست است")

                NextResponse.json({
                    massage: "با موفقیت وارد شدید",
                },
                    { status: 200 }
                )

                return { email }
            }
        })
    ]
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }