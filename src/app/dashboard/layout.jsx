import { authOptions } from "src/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

//Component
import DashboardLayout from "src/components/template/dashboard/DashboardLayout";

const layout = async ({ children }) => {

    const { user } = await getServerSession(authOptions);

    return (
        <DashboardLayout email={user.email} >
            {children}
        </DashboardLayout>
    );
};

export default layout;