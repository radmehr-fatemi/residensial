import UserB from "@/model/UserB";
import connectDB from "src/utils/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

//Component
import DashboardPage from "src/components/template/dashboard/DashboardPage";
import SpinnerLoader from "src/components/module/spinner/SpinnerLoader";

const Dashboard = async () => {
    try {
        await connectDB()
    } catch (err) {
        console.log("Error-----------------------" ,err)
        return <SpinnerLoader> آینترنت خود را برسی کنید </SpinnerLoader>
    }
        const {user: {email}} = await getServerSession(authOptions);
        const user = await UserB.findOne({email})
        
        return <DashboardPage user={user} />
};

export default Dashboard;