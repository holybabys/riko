import style from "./Gifts.module.css";
import React from "react";
const Gift = (props) => {
    return (
        <div className={style.gift}>
            <img src={props.img} alt=""/>
            <div className={style.test}>
                <h3>{props.header}</h3>
                <div>
                    <p className={style.free}>
                        Бесплатно
                    </p>
                    <p className={style.price}>
                        {props.price}
                    </p>
                    <button>Получить</button>
                </div>


            </div>

        </div>
    )

}

function Gifts(props) {
    let giftsItems = props.state.giftsData
        .map((data) =>
            <Gift img={data.img} price={data.price} header={data.header}/>);
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <h2>
                    Выбрать подарок
                </h2>
                <p className={style.headtxt}>При заказе окна Вы получаете в подарок комплектующие</p>
                <div className={style.giftsGroup}>
                    {giftsItems}
                </div>
            </div>
        </div>
    )
}

export default Gifts;
