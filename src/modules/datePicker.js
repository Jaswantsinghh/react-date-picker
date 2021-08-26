import React from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from 'react-date-range';
import * as locales from 'react-date-range/dist/locale';
import {useRef, useState} from 'react';
import '../styles/datePicker.scss';
import useOutsideClick from './useOutsideClick';

export default function DatePicker(props){
const [locale] = React.useState('es');
const [date, setDate] = useState(null);
 const ref = useRef();
  useOutsideClick(ref, () => {
    props.setOpen(false);
  });
return(
    <>
    <div ref={ref} className="datePickerWrapper">
  <Calendar 
  className="calendar"
  onChange={item => setDate(item)}
  locale={locales[locale]} date={date} />
</div>
</>
);
}