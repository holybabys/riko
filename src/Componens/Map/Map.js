import style from "./Map.module.css"
import React from "react";


function Map(props) {

    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.form}>
                    <h2>Закажите <span>бесплатный замер</span> прямо сейчас</h2>
                    <p>Если у вас остались вопросы, позвоните нам по телефону <a href="tel:+74956582673">+7
                        (495)658-26-73</a> <br/> или заполните форму ниже
                        и мы свяжемся с Вами.</p>
                    <div className={style.test}>
                        <input type="text" placeholder="Имя"/>
                        <input type="tel" placeholder="Телефон"/>
                        <button> звони срочно</button>
                    </div>

                </div>
            </div>

        </div>


    )
}

export default Map;
