import { authOptions } from "src/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

//Component
import DashboardLayout from "src/components/template/dashboard/DashboardLayout";
import { redirect } from "next/navigation";
import connectDB from "src/utils/connectDB";
import UserB from "src/model/UserB";
import Notfound from "src/components/module/notfound/Notfound";

export const metadata = {
    title: "پنل کاربری املاک",
}

const layout = async ({ children }) => {

    const session = await getServerSession(authOptions);

    if (!session) redirect("/signin");

    try {
        await connectDB()
    } catch (err) {
        console.log("Error in connected to DB", err)
    }

    const user = await UserB.findOne({ email: session.user.email });
    
    if ( !user ) return <Notfound> مشکلی رخ داده است  </Notfound>

    return (
        <DashboardLayout userData={JSON.parse(JSON.stringify(user))} >
            {children}
        </DashboardLayout>
    );
};

export default layout;