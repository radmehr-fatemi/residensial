//Component
import DashboardCard from "src/components/module/dashboard-card/DashboardCard";
import Notfound from "src/components/module/notfound/Notfound";

const MyProfilesPage = async ({ profilesData }) => {

    if (!profilesData.length) return (
        <div className="min-h-screen" >
            <Notfound> موردی موجود نمیباشد </Notfound>
        </div>
    )

    return (
        <div className=" min-h-screen flex flex-wrap justify-around" >
            {
                profilesData.map(i => (<DashboardCard key={i._id} profileData={JSON.parse(JSON.stringify(i))} />))
            }
        </div>
    );
};

export default MyProfilesPage;