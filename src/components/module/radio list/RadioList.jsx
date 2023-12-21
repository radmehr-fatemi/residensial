const RadioList = (props) => {

    const {profileData ,setProfileData ,name ,label} = props;
    const { category } = profileData;
    
    const changHandler = ({target}) => {
        const { name ,value } = target;
        setProfileData({
            ...profileData,
            [name]: value
        })
        console.log("category" ,category)
    } 
    return (
        <div className="border border-blue-600 w-16 px-1 text-blue-800 rounded-md flex items-center justify-between" >
            <label htmlFor={name}> { label } </label>
            <input 
            type="radio"
            name="category"
            value={name}
            onChange={changHandler}
            id={name}
            checked={ category === name }
             />
        </div>
    );
};

export default RadioList;