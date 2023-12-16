import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "src/app/api/auth/[...nextauth]/route";

//component
import SignInPage from "src/components/template/sign in/SignInPage";

const SignIn = async () => {

    const session = await getServerSession(authOptions);
    
    if (!!session) redirect ("/")
    return <SignInPage />
};

export default SignIn;