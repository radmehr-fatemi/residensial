import Profile from "src/model/Profile";
import connectDB from "src/utils/connectDB";

//Component
import AddPDPage from "src/components/template/addPD/AddPDPage";

const Edit = async ({params: {profileId}}) => {

    try {
        connectDB()
    } catch ( err ) {
        console.log(" Error in connected to DB " ,err)
    }

    const profile = await Profile.findOne({ _id: profileId })

    if ( !profile ) return <h1> متاسفانه مشکلی رخ داده است </h1>

    return <AddPDPage data={JSON.parse(JSON.stringify(profile))} />
};

export default Edit;