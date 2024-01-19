import connectDB from "src/utils/connectDB";

//Component
import DetailsPage from "src/components/template/details/DetailsPage";
import Profile from "src/model/Profile";

const Details = async ({ params: { profileId } }) => {

    try {
        await connectDB()
    } catch (err) {
        console.log("Error in Connected to Db", err)
    }

    const [profile] = await Profile.find({ _id: profileId });

    if (!profile) return (
        <h1
            className="text-center text-red-500 bg-red-100 px-2 rounded-md w-fit m-auto"
            style={{ animation: "fadeInDown .6s" }}
        > متاسفانه مشکلی رخ داده است </h1>
    )

    return <DetailsPage profileData={profile} />
};

export default Details;