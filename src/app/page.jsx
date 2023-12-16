import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Home = async () => {

  const session = await getServerSession(authOptions);
  
  if ( !session ) redirect("/signup")

  return (
    <div>
      <h1>املاک</h1>
    </div>
  );
};

export default Home;