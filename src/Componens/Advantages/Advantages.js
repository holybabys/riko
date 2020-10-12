import React from 'react';
import style from './Advantages.module.css';


const Item = (props) => {
    return (
        <div className={style.advantages_item}>
            <img src={props.img} alt=""/>
            <h3>{props.text}</h3>
        </div>
    )

}


function Advantages(props) {
    let advantagesItems = props.state.advantagesData
        .map((data) =>
            <Item img={data.img} text={data.text}/>);

    return (
        <div className={style.main}>
            <h2>Наши преимущества </h2>

            <div className={style.advantages__container}>
                <div className={style.advantages}>
                    {advantagesItems}
                </div>
            </div>
        </div>
    );
}

export default Advantages;