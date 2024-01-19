import connectDB from "src/utils/connectDB";

//Component
import BuyResidentialsPage from "src/components/template/buy-residentials/buyResidentialsPage";
import Profile from "src/model/Profile";

const BuyResidentials = async () => {

    try {
        await connectDB()
    } catch (err) {
        console.log("Error in Connected to Db", err)
    }

    const profiles = await Profile.find().select("-userId");

    if (!profiles.length) return (
        <h1
        className="w-fit m-auto px-1 rounded-md text-center text-red-500 first-letter bg-red-200"
        style={{ animation: "fadeInDown .6s" }}
        > هنوز هیچ آگهی ثبت نشده است </h1>
    )

    return <BuyResidentialsPage data={profiles} />
};

export default BuyResidentials;