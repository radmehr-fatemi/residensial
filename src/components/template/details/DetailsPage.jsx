//Icon
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiFillAlipayCircle } from "react-icons/ai";

//Component
import DetailsSidebar from "src/components/module/details-sideBar/DetailsSidbar";

const DetailsPage = ({ profileData }) => {

    const {
        title,
        description,
        location,
        rules,
        amenities,
    } = profileData;

    return (
        <div className="max-w-screen-2xl w-screen min-h-screen m-auto p-4 flex flex-col justify-start" >
            <DetailsSidebar data={profileData} />

            <div style={{ animation: "rotateInUpLeft .8s" }} >
                <AiFillAlipayCircle
                    className=" text-blue-500"
                    style={{ fontSize: "20rem" }}
                />
            </div>

            <h2
                style={{ animation: `fadeInRightBig .5s ` }}
                className="text-blue-600 text-2xl "
            > {title} </h2>

            <p 
                style={{ animation: `fadeInRightBig .5s .2s ` }}
                className="text-slate-500 flex items-center" >
                <HiOutlineLocationMarker className="ml-1" />
                {location}
            </p>

            <TitleDescription title="توضیحات" > {description} </TitleDescription>

            <TitleDescription title="امکانات" />
            <ListItem data={amenities} />

            <TitleDescription title="قوانین" />
            <ListItem data={rules} />

        </div>
    );
};

export default DetailsPage;

const TitleDescription = ({ children, title }) => {
    return (
        <div
            style={{ animation: `fadeInUp .5s` }}
            className="mt-8 mb-2" >
            <h3
                className="text-blue-600 text-xl border-b-2"
            > {title}</h3>

            <p> {children} </p>
        </div>
    )
}

const ListItem = ({ data }) => {

    if (!data.length) return (
        <h3
            style={{ animation: "fadeInDown .8s" }}
            className="text-red-500 bg-red-100 px-2 rounded-md w-fit"
        > موردی ثبت نشده است </h3>
    )

    return (
        <div>
            {
                data.map((i, index) => (
                    <li
                    className="marker:text-blue-600"
                        style={{ animation: `fadeInRightBig .5s .${index + 2}s` }}
                        key={index} > {i} </li>
                ))
            }
        </div>
    )
}