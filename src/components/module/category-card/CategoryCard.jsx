"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ data ,index }) => {

    const [ isClick ,setIsClick ] = useState(false);
    
    return (
        <div
                className="p-2 my-3 rounded-md hover:scale-105"
                style={{ 
                animation: isClick ? "flipOutX .3s forwards" : `zoomIn .5s .${index + 2}s`,
                boxShadow: "0 3px 8px #3B6690"
             }}
             onClick={() => setIsClick(true)}
        >
            <Link
                href={{ pathname: "/buy-residentials" ,query: { "category": Object.keys(data) } }}
                className="flex flex-col justify-center items-center "
            >
                <Image src={`/images/${Object.keys(data)}.png`} width={300} height={240} priority={true} alt="تصویر مکان" />
                <p
                    className="text-xl py-1"
                > {Object.values(data)} </p>
            </Link>
        </div>
    );
};


export default CategoryCard;