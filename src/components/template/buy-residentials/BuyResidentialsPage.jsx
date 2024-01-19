//Component
import Card from "src/components/module/card/Card";

const BuyResidentialsPage = ({ data }) => {

    return (
        <div
            className="p-4 flex flex-wrap justify-evenly items-baseline"
        >

            {
                data.map(((i, index) => (
                    <div
                        className="w-full my-3 md:w-80"
                        style={{ animation: `zoomInUp .3s .${index + 1}s` }}
                        key={i._id}>
                        <Card profileData={i} />
                    </div>
                )
                ))
            }
        </div>
    );
};

export default BuyResidentialsPage;