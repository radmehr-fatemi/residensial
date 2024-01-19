import Link from "next/link";

//Icon
import { BsBodyText } from "react-icons/bs";


const BuyResidentialsSidbar = () => {

    const categories = [
        { villa: "خانه ویلایی" },
        { apartment: "آپارتمان" },
        { store: "مغازه" },
        { office: "دفتر کار" },
    ];

    return (
        <div
            className="fixed top-24 left-2 p-4 rounded-md backdrop-blur-sm md:left-10"
            style={{ boxShadow: "0 0px 12px #3B6690", animation: "shakeY 40s infinite" }}
        >
            <h3
                style={{ animation: "backInRight .7s" }}
                className="flex justify-center items-center border-b-2 border-blue-300" >
                <BsBodyText className="text-blue-600 ml-2 text-xl  " />
                دسته بندی
            </h3>

            <ul
                className="flex flex-col overflow-hidden"
                style={{}}
            >
                {
                    categories.map((i, index) => (
                        <Link
                            style={{ animation: `backInRight .7s .2s ` }}
                            className="pt-2 hover:text-blue-900 hover:px-2"
                            href={{ pathname: "/buy-residentials", query: { "category": Object.keys(i) } }}
                            key={index}
                        > {Object.values(i)} </Link>
                    ))
                }
            </ul>
        </div>
    );
};

export default BuyResidentialsSidbar;