import connectDB from "src/utils/connectDB";
import Profile from "src/model/Profile";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

//Component
import BuyResidentialsPage from "src/components/template/buy-residentials/BuyResidentialsPage";

const BuyResidentials = async ({ searchParams }) => {

    const session = await getServerSession(authOptions);

    if ( !session ) return redirect("/signin")

    try {
        await connectDB()
    } catch (err) {
        console.log("Error in Connected to Db", err)
    }

    const profiles = await Profile.find({ published: true }).select("-userId");

    if (!profiles.length) return (
        <h1
        className="w-fit m-auto px-1 rounded-md text-center text-red-500 first-letter bg-red-200"
        style={{ animation: "fadeInDown .6s" }}
        > هنوز هیچ آگهی ثبت نشده است </h1>
    )

    let finalData = profiles;
    if ( !!searchParams.category ) finalData = profiles.filter( i => i.category === searchParams.category );

    if ( !finalData.length ) return  (
        <h1
        className="w-fit m-auto px-1 rounded-md text-center text-orange-500 first-letter bg-orange-200"
        style={{ animation: "fadeInDown .6s" }}
        > آگهی مورد نظر یافت نشد </h1>
    )
    
    return <BuyResidentialsPage data={finalData} />
};

export default BuyResidentials;