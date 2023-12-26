import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

const CustomDatePicker = ({ profileData ,setProfileData }) => {

    const { constructionDate } = profileData;
    
    const changHandler = e => {
        const data = new Date(e);
        setProfileData({
            ...profileData,
            constructionDate: data
        })
    }
    
    return (
        <div>
            <h3 className="py-1" > تاریخ </h3>

            <DatePicker
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
                value={constructionDate}
                onChange={changHandler}
             />
        </div>
    );
};

export default CustomDatePicker;