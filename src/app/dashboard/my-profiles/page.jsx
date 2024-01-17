import UserB from "src/model/UserB";
import connectDB from "src/utils/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "src/app/api/auth/[...nextauth]/route";

//Component
import MyProfilesPage from "src/components/template/my-profiles/MyProfilesPage";

const MyProfiles = async () => {

  try {
    await connectDB()
  } catch (err) {
    console.log("Error in connected to DB", err)
  }

  const session = await getServerSession(authOptions);

  const [user] = await UserB.aggregate([
    { $match: { email: session.user.email } },
    {
      $lookup: {
        from: "profiles",
        foreignField: "userId",
        localField: "_id",
        as: "profiles"
      }
    }
  ])
  
  return <MyProfilesPage profilesData={user.profiles} />
};

export default MyProfiles;