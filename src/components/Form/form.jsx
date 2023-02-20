import React from "react";
import './form.css';

const Form = () => {

return (
  <div className={"form"}>
    <h3>Введите ваши данные</h3>
    <input
     className={"input"} 
     type="text"
     placeholder={'Страна'}
     />
    <input
      className={"input"}
      type="text"
      placeholder={'Улица'}
     />
     <select className={"select"}>
      <option value={'legal'}>Юр.лицо</option>
      <option value={'physical'}>Физ.лицо</option>
     </select>
  </div>
);

};


export default Form;
