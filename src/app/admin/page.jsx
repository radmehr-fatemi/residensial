import AdminPage from "src/components/template/admin/AdminPage";
import { authOptions } from "../api/auth/[...nextauth]/route";
import connectDB from "src/utils/connectDB";
import UserB from "src/model/UserB";

//Component
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Profile from "src/model/Profile";

const Admin = async () => {

    const session = await getServerSession(authOptions);

    if (!session) redirect("/signin");

    try {
        await connectDB()
    } catch (err) {
        console.log("Error in connected to DB", err)
    }

    const [user] = await UserB.find({ email: session.user.email });
    
    if ( !user ) return <h1> مشکلی رخ داده است </h1>

    if ( user.role !== "ADMIN" ) redirect("/");

    const profiles = await Profile.find({ published: false });

    return <AdminPage profiles={profiles} />
};

export default Admin;