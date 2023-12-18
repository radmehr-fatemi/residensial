const DashboardPage = ({ user }) => {

    const { createAt } = user;

    return (
        <div
        style={{animation: "bounceIn .2s"}}
            className="
        p-4
        " >
            <h3 className="text-2xl text-blue-800" >
                درود
            </h3>

            <p
                className="text-blue-950"
            > آگهی های خودرا ثبت کنید تا هزاران نفر آنرا مشاهده کنند </p>

            <div 
            className="bg-blue-200 w-fit flex items-center text-blue-600 rounded-md px-1" >
                <span
                className="text-black ml-1"
                > تاریخ عضویت: </span>
                
                <p> {new Date(createAt).toLocaleDateString("fa-IR")} </p>
            </div>
        </div>
    );
};

export default DashboardPage;