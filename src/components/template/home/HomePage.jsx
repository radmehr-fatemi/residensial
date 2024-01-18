//Icon
import { FaStumbleuponCircle } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";
import CategoryCard from "src/components/module/category-card/CategoryCard";


const HomePage = () => {

    const services = ["خرید", "فروش", "رهن", "اجاره"];
    const cities = [
        "تهان",
        "سنندج",
        "اصفهان",
        "اهواز",
        "کرمانشاه",
        "شیراز",
        "مشهد",
        "خرم آباد",
    ];

    const categories = [
        { villa: "خانه ویلایی" },
        { apartment: "آپارتمان" },
        { store: "مغازه" },
        { office: "دفتر کار" },
    ];

    return (
        <div>
            <h1
                className="text-center text-3xl text-blue-600 font-bold pt-6"
                style={{ animation: "jackInTheBox .4s" }}
            > سامانه خرید و اجاره ملک </h1>

            <div
                className="w-full flex flex-wrap justify-between items-center p-4 md:w-3/5 lg:w-2/5 m-auto" >
                {
                    services.map((i, index) => (
                        <li
                            key={index}
                            className="flex justify-center items-center bg-blue-500 text-white px-3 rounded-md"
                            style={{ animation: `zoomIn .5s .${index + 2}s` }}
                        >
                            <FaStumbleuponCircle className="ml-2" />
                            {i}
                        </li>))
                }
            </div>

            <div
                className="w-full flex flex-wrap justify-center items-center p-4 md:justify-evenly m-auto"
            >
                {
                    categories.map((i, index) => (
                        <CategoryCard key={index} data={i} index={index} />
                    ))
                }
            </div>

            <h2
                className="text-center text-2xl text-blue-500 font-bold py-3"
            > شهر های پر بازدید </h2>

            <div
                className="w-full flex flex-wrap justify-between items-center px-4 pb-4  md:w-3/5 lg:w-2/5 m-auto" >
                {
                    cities.map((i, index) => (
                        <li
                            key={index}
                            className="w-24 flex justify-center content- items-center bg-blue-500 text-white px-3 my-1 rounded-md md:w-32"
                            style={{ animation: `zoomIn .5s .${index + 4}s` }}
                        >
                            <MdLocationCity className="ml-2" />
                            {i}
                        </li>))
                }
            </div>

        </div>
    );
};

export default HomePage;