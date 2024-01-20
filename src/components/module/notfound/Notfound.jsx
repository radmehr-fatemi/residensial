const Notfound = ({ children }) => {
    return (
        <div
            className="w-fit px-2 bg-red-100 text-red-500 rounded-md m-auto"
            style={{ animation: "fadeInDown .4s" }}
        >
            {children}
        </div >
    );
};

export default Notfound;