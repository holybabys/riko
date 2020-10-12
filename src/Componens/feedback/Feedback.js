import style from "./feedback.module.css"
import React from "react";

const Item = (props) => {
    return (
        <div className={style.item}>
            <div className={style.row}>
                <img src={props.img} alt=""/>
                <div>
       gdgfgdfgfdgfgfgf
                </div>

            </div>
        </div>
    )

}


function Feedback(props) {
    let feedbacksItems = props.state.feedbacksData
        .map((data) =>
            <Item img={data.img} text={data.text} name={data.name} city={data.city}/>);
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <h3>Отзывы</h3>
                <div className={style.items}>
                    {feedbacksItems}
                </div>
            </div>
        </div>


    )
}

export default Feedback;