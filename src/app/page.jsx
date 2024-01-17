import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

//Component
import HomePage from "src/components/template/home/HomePage";

const Home = async () => {

  const session = await getServerSession(authOptions);

  if (!session) redirect("/signup")

  return <HomePage />
};

export default Home;