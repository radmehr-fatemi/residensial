import UserB from "@/model/UserB";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

//Component
import DashboardPage from "src/components/template/dashboard/DashboardPage";

const Dashboard = async () => {
    
    const {user: {email}} = await getServerSession(authOptions);
    const user = await UserB.findOne({email})

    return <DashboardPage user={user} />
};

export default Dashboard;