import style from "../Service/Service.module.css";
import React from "react";
import balkony from "../../img_riko/serviceItem_balcony.png";
import window from "../../img_riko/serviceItem_window.png";
import house from "../../img_riko/house.png";


const ServiceItem = (props) => {
    return (
        <div className={style.item}>
            <img src={props.img} alt=""/>

            <p>{props.text} </p>
        </div>
    )

}

function Service (props) {
    let serviceData = [
        {text: 'Балконы', img: balkony},
        {text: 'Окна', img: window},
        {text: 'Дома', img: house},
    ]

    let serviceItems = serviceData
        .map((data) =>
            <ServiceItem img={data.img} text={data.text}/>);
    return (
        <div className={style.service}>
            <h2>Мы остекляем:</h2>
            <div className={style.serviceItems}>

                {serviceItems}


            </div>
        </div>
    )
}
export default Service;