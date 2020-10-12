import React from 'react';
import style from './Header.module.css';
import riko from '../../img_riko/riko.png';





function Header(props) {

    return (

        <header>

                <div className={style.headline}>
                    <div className={style.logo}>
                        <img src={riko} alt="Рико"/>
                    </div>
                    <div className={style.contact}>
                            +7 (495) 849-68-17
                            <button>
                                Заказать звонок
                            </button>

                    </div>
                </div>
                <div className={style.intro}>
                    <div className={style.content}>
                        <h1>Осуществляем монтаж окон<br/> в Москве и Московской области </h1>
                        <p className={style.content_p2}>Комплектующие в подарок </p>
                        <button>Оформить заявку</button>


                    </div>

                </div>


        </header>

    );
}

export default Header;

