//Component
import DashboardCard from "src/components/module/dashboard-card/DashboardCard";

const MyProfilesPage = async ({ profilesData }) => {

    return (
        <div className="min-h-screen flex flex-wrap justify-around" >
            {
                profilesData.map(i => ( <DashboardCard key={i._id} profileData={i} /> ))
            }
        </div>
    );
};

export default MyProfilesPage;