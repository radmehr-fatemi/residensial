//Icon
import { MdOutlineAddChart } from "react-icons/md";

const TextList = ({ profileData, setProfileData, type, title }) => {

    const addHandler = () => {
        setProfileData({
            ...profileData,
            [type]: [...profileData[type] ,""]
        })
    }

    const deleteHandler = ( index ) => {
        const list = [...profileData[type]];
        list.splice(index ,1);

        setProfileData({
            ...profileData,
            [type]: [...list]
        })
    }
    
    const changeHandler = (e ,index) => {
        const { value } = e.target;
        const list = [...profileData[type]];
        list[index] = value

        setProfileData({
            ...profileData,
            [type]: [...list]
        })
        console.log(profileData[type[index]] ,value)
    }
    
    return (
        <div className="py-6" >
            <h3 className="mb-2"> {title} </h3>
            {
                profileData[type].map((item, index) => (
                    <div
                        key={index}
                        style={{
                            animation: "zoomInDown .3s"
                        }}
                        className="flex items-center justify-between py-1"
                    >

                        <input
                            onChange={ e  => changeHandler(e ,index)}
                            type="text"
                            className="w-9/12 border border-blue-900 rounded-md"
                        />

                        <button
                        onClick={ e  => deleteHandler(index)}
                            className="w-2/12 border border-red-600 text-red-600 rounded-md"
                        > حذف </button>
                    </div>
                ))
            }
            <button
                onClick={addHandler}
                className="flex items-center justify-between bg-blue-600 text-white rounded-md px-2 py-1 mt-2"
            >
                <MdOutlineAddChart className="text-2xl ml-1" />
                افزودن </button>
        </div>
    );
};

export default TextList;