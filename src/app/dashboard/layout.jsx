import { authOptions } from "src/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

//Component
import DashboardLayout from "src/components/template/dashboard/DashboardLayout";
import { redirect } from "next/navigation";

const layout = async ({ children }) => {

    const session = await getServerSession(authOptions);

    if ( !session ) redirect("/signin");

    const { user } = session;

    return (
        <DashboardLayout email={user?.email} >
            {children}
        </DashboardLayout>
    );
};

export default layout;