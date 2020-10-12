import style from "./Discount.module.css";
import React from "react";
import icon from "./info.png";


function Discount(props) {

    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.form}>
                    <div className={style.form_head}>
                        <div className={style.row}>
                            <div className={style.first}>
                            <span className={style.wordOne}>
                                Скидка
                            </span>
                                <span className={style.wordTwo}>
                                в день обращения
                            </span>
                            </div>
                            <div className={style.second}>
                                <span>25%</span>
                            </div>
                        </div>
                        <div className={style.head_line}>
                            <span> <img src={icon} alt=""/>Пенсионерам и новоселам скидка 30%</span>
                        </div>
                    </div>
                    <div className={style.inputs}>
                        <span>Заполните форму и получите скидку</span>
                        <input type="text" placeholder="Имя" />
                        <input type="text" placeholder="Teлефон"/>
                        <button>
                            Получить скидку
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Discount;
