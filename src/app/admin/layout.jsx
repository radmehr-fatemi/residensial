import { authOptions } from "src/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";
import connectDB from "src/utils/connectDB";
import UserB from "src/model/UserB";

//Component
import DashboardLayout from "src/components/template/dashboard/DashboardLayout";

const layout = async ({ children }) => {

    const session = await getServerSession(authOptions);

    if (!session) redirect("/signin");

    try {
        await connectDB()
    } catch (err) {
        console.log("Error in connected to DB", err)
    }

    const [user] = await UserB.find({ email: session.user.email });
    
    if ( !user ) return <h1> مشکلی رخ داده است </h1>

    return (
        <DashboardLayout userData={JSON.parse(JSON.stringify(user))} >
            {children}
        </DashboardLayout>
    );
};

export default layout;