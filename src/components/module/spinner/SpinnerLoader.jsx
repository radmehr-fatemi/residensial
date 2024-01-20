"use client"

import { InfinitySpin} from "react-loader-spinner";

const SpinnerLoader = ({ children ,error ,width }) => {
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
                width={ width}
                color={ error ? "red" : "#4fa9ff" }
            />
            <p className="text-blue-900" > {children} </p>
        </div>
    );
};

export default SpinnerLoader;