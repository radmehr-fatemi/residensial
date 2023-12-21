import Link from "next/link";

const DashboardPage = ({ user }) => {

    const { createAt } = user;

    return (
        <div
            style={{ animation: "bounceIn .2s" }}
            className="min-h-screen max-w-screen-2xl  p-4 md:w-full  flex flex-col  " >

            <h3 className="text-2xl text-blue-800" >
                درود
            </h3>

            <p
                className="text-blue-950"
            > آگهی های خودرا ثبت کنید تا هزاران نفر آنرا مشاهده کنند </p>

            <div
                className="bg-blue-200 w-fit flex items-center text-blue-600 rounded-md px-1 mt-2" >
                <span
                    className="text-blue-800 ml-1"
                > تاریخ عضویت: </span>

                <p> {new Date(createAt).toLocaleDateString("fa-IR")} </p>

            </div>

            <div className="w-full w-full py-4 flex justify-center" >
                <Link
                    className=" w-80 text-center rounded-md text-white bg-blue-600 hover:bg-blue-500"
                    href="/dashboard/add"> ثبت آگهی </Link>
            </div>

        </div>
    );
};

export default DashboardPage;