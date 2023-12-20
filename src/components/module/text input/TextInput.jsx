import { p2e } from "src/utils/replaceNumber";

const TextInput = (props) => {

    const { title, name, profileData, setProfileData, textarea = false } = props;

    const changHandler = ({ target }) => {
        const { name, value } = target;

        setProfileData({
            ...profileData,
            [name]: value
        })
    }

    return (
        <div 
        style={{
            animation:"backInDown .5s"
        }}
        className="py-2"  >
            <p className="text-blue-950" > {title} </p>
            {
                textarea ? (
                    <textarea
                        className="border border-blue-900 rounded-sm focus:outline-blue-600 w-full"
                        type="text"
                        name={name}
                        value={profileData[p2e(name)]}
                        onChange={changHandler}
                    />
                ) :
                    (
                        <input
                            className="border border-blue-900 rounded-sm focus:outline-blue-600 w-full"
                            type="text"
                            name={name}
                            value={profileData[p2e(name)]}
                            onChange={changHandler}
                        />
                    )
            }
        </div>
    )
};

export default TextInput;