"use client"

import { InfinitySpin} from "react-loader-spinner";

const SpinnerLoader = ({ children }) => {
    return (
        <div 
        className="
            w-full
            flex
            flex-col
            justify-center
            items-center
        " >
            <InfinitySpin
                width='200'
                color="#4fa9ff"
            />
            <p className="text-blue-900" > {children} </p>
        </div>
    );
};

export default SpinnerLoader;