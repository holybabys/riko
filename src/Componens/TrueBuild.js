import style from './Truebuild.module.css';

import React from "react";
import warm from '../img_riko/warm.png';
import steam from '../img_riko/steam.png';
import water from '../img_riko/water.png';
import windowimg from '../img_riko/window.png';
import warmline from '../img_riko/warm_line.png';
import steamline from '../img_riko/steam_line.png';
import waterline from '../img_riko/water_line.png';

function Build() {
    return (
        <div className={style.main}>
            <div className={style.headline}>
                <h2>Что дает правильный монтаж</h2>
            </div>
            <div className={style.container}>
                <div className={style.column}>
                    <div className={style.item}>

                        <p><img src={warm} alt=""/></p>
                        <div className={style.itemText}>
                            <h2>Теплоизоляция</h2>
                            <p>Зимой в помещение всегда будет <br/>
                            тепло, а летом прохладно</p>
                        </div>
                        <p><img src={warmline} alt=""/></p>
                    </div>
                    <div className={style.item}>
                        <p><img src={warm} alt=""/></p>
                        <div className={style.itemText2}>
                            <h2>Пароизоляция</h2>
                            <p>Мы используем специальные <br/>
                                полиуретановые пены, шум улицы <br/>
                                не будет проникать через монтажные стыки</p>
                        </div>
                        <p><img src={steamline} alt=""/></p>
                    </div>
                    <div className={style.item}>

                        <p><img src={warm} alt=""/></p>
                        <div className={style.itemText3}>
                            <h2> Защита от влаги</h2>
                            <p>Защищает окно от попадания влаги <br/>
                                как внутри, так и снаружи помещения</p>
                        </div>
                        <p><img src={waterline} alt=""/></p>
                    </div>
                </div>
                <div className={style.column}>
                    <img src={windowimg} alt=""/>
                </div>

            </div>


        </div>


    );
}

export default Build;