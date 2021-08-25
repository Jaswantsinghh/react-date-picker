import {React, useState} from 'react';
import DatePicker from './datePicker';
import '../styles/main.scss';
export default function MainPage(){
    const [isToggle, setToggle] = useState(false);
    return(
        <>
        <div className="wrapper">
            <input 
            onClick={()=>setToggle(!isToggle)}
            placeholder="Click here"
            >
            </input>
        {isToggle && <DatePicker/>}
        </div>
        </>
    );
}