//Component
import AdminCard from "src/components/module/admin-card/AdminCard";
import Notfound from "src/components/module/notfound/Notfound";

const AdminPage = ({ profiles }) => {

    if (!profiles.length) return (
        <div
            className="min-h-screen"
        >
            <Notfound >موردی موجود نمیباشد</Notfound>
        </div>
    )

    return (
        <div
            className="min-h-screen flex justify-start items-start content-start  flex-wrap md:px-10"
        >
            {
                profiles.map(i => (
                    <AdminCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
                ))
            }
        </div>
    );
};

export default AdminPage;