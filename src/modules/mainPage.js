import {React, useState} from 'react';
import DatePicker from './datePicker';
import '../styles/main.scss';
export default function MainPage(){
    const [isToggle, setToggle] = useState(false);
    const openFunc = () => setToggle(!isToggle);
    return(
        <>
        <div className="wrapper">
            <input 
            onClick={openFunc}
            placeholder="Click here"
            >
            </input>
        {isToggle && <DatePicker setOpen={openFunc}/>}
        </div>
        </>
    );
}