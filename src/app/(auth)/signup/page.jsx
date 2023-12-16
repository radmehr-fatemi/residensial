import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "src/app/api/auth/[...nextauth]/route";

//Component
import SignUpPage from "src/components/template/sign up/SignUpPage";

const SignUp = async () => {

    const session = await getServerSession(authOptions)

    if ( !!session ) redirect("/")
    return <SignUpPage />
};

export default SignUp;