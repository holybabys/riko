import style from "./footer.module.css"
import React from "react";
import logo from "./logo_footer.png";

function Footer(props) {

    return (
        <footer>
            <div className={style.wrapper}>
                <div className={style.item}>

                    <span><a href="#">Наверх</a></span>
                    <span>© РИКО 2017</span>
                    <span>Москва, ул. Вернандского, стр 4,оф. 715</span>
                </div>
                <div className={style.item}>
                   <span>
                       <img src={logo} alt=""/>
                   </span>
                </div>

            </div>

        </footer>


    )
}

export default Footer;
