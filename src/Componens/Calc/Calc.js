import style from "./calc.module.css"
import React, {useState} from "react";
import kbe from "./img/kbe_radio.png"
import rehau from "./img/rehau_radio.png"
import mont from "./img/mont_radio.png"
import windowOne from "./img/window_one.png"
import windowTwo from "./img/window_two.png"
import windowThree from "./img/window_three.png"


function Calc(props) {
    let choiceWidth = React.createRef();
    let choiceHeight = React.createRef();

    const [fPrice, setFPrice] = useState("");
    const [mPrice, setMPrice] = useState("");
    const [type, setType] = useState("blind");
    const [type1, setType1] = useState();
    const [type2, setType2] = useState();
    const [section, setSection] = useState("1");
    const [companyKf, setCompanyKf] = useState("1");
    const [profile, setProfile] = useState(1)

    let calc = () => {
        let width = choiceWidth.current.value;
        let height = choiceHeight.current.value;

        const windowArray = props.state.calcData
        if (section == 1) {
            let price = windowArray.filter(item => {
                return item.width == width && item.height == height && item.type == type && item.section == section
            });
            if (price.length) {
                let currentPrice = price[0].price;
                let finalPrice = Math.floor(currentPrice * companyKf*profile)
                setFPrice(finalPrice)
                let middlePrice = Math.floor(currentPrice * 1.2)
                setMPrice(middlePrice + " руб")
            } else {
                setFPrice("")
                setMPrice("")
            }

        }
        if (section == 2) {
            let price = windowArray.filter(item => {
                return item.width == width && item.height == height
                    && item.type1 == type1 && item.type2 == type2 && item.section == section
            });
            if (price.length) {
                let currentPrice = price[0].price;
                let finalPrice = Math.floor(currentPrice * companyKf*profile)
                setFPrice(finalPrice)
                let middlePrice = Math.floor(currentPrice * 1.2)
                setMPrice(middlePrice + " руб")
            } else {
                setFPrice("")
                setMPrice("")
            }

        }
        if (section == 3) {
            let price = windowArray.filter(item => {
                return item.width == width && item.height == height && item.section == section
            })
            if (price.length) {
                let currentPrice = price[0].price;
                let finalPrice = Math.floor(currentPrice * companyKf*profile)
                setFPrice(finalPrice)
                let middlePrice = Math.floor(fPrice * 1.2)
                setMPrice(middlePrice)

            } else {
                setFPrice("")
                setMPrice("")
            }
        }

    }


    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.calc}>
                    <div className={style.head}>
                        <p>
                            Рассчитайте стоимость вашего окна
                        </p>
                    </div>
                    <div className={style.inputs}>
                        <div className={style.size}>
                       <span>

                           Размер окна, мм
                       </span>
                            <div className={style.sizeinputs}>
                                <input type="number" ref={choiceWidth} placeholder="Ширина" min="800" max="2200"
                                       step="100" onChange={calc}/>
                                <span>Х</span>
                                <input type="number" ref={choiceHeight} placeholder="Высота" min="1000" max="1800"
                                       step="100" onChange={calc}/>
                            </div>

                        </div>
                        <div className={style.product}>
                            <span>
                                Производитель

                            </span>
                            <br/>
                            <label>
                                <input type="radio" name="production"
                                       onClick={() => setCompanyKf(1)}/>
                                <img src={kbe} alt=""/>
                            </label>
                            <label>
                                <input type="radio" name="production"
                                       onClick={() => setCompanyKf(1.4)} />
                                <img src={rehau} alt=""/>
                            </label>
                            <label>
                                <input type="radio" name="production"
                                       onClick={() => setCompanyKf(1.5)}/>
                                <img src={mont} alt=""/>
                            </label>


                        </div>
                        <div className={style.profile}>
                            <span>
                                Тип профиля
                            </span>
                            <p>
                                <select name="" id="" placeholder="Выбрать" onChange={(e) => {
                                    setProfile(e.target.value)
                                }} onClick={calc}>
                                    <optgroup label="KBE">
                                        <option value="1">
                                            KBE Engine
                                        </option>
                                        <option value="1.4">
                                            KBE Expert
                                        </option>
                                    </optgroup>
                                    <optgroup label="REHAU">
                                        <option value="1">
                                            Rehau Engine
                                        </option>
                                        <option value="1.5">
                                            Rehau Expert
                                        </option>
                                    </optgroup>
                                    <optgroup label="MONTBLANK">
                                        <option value="1">
                                            MONTBALNK Engine
                                        </option>
                                        <option value="1.4">
                                            MONTBLANK Expert
                                        </option>
                                    </optgroup>
                                </select>
                            </p>
                        </div>
                    </div>
                    <div className={style.windows}>
                        <span>Количество секций</span>
                        <div className={style.buttons}>

                            <div className={style.col_2}>
                                <label>
                                    <input type="radio" name="section"
                                           onChange={() => setSection(1)} onClick={calc}/>
                                    <img src={windowOne} alt="окно"/>
                                </label>
                                <br/>

                                <select value={type} name="" id=""
                                        onChange={(e) => {
                                            setType(e.target.value)
                                        }} onClick={calc}>

                                    <option value="blind">
                                        Глухая

                                    </option>
                                    <option value="rotary">
                                        Поворотная
                                    </option>
                                </select>


                            </div>
                            <div className={style.col_3}>
                                <label>
                                    <input type="radio" name="section"
                                           onChange={() => setSection(2)} onClick={calc}/>
                                    <img src={windowTwo}/>
                                </label>

                                <br/>
                                <select value={type1} name="" id="" onChange={(e) => {
                                    setType1(e.target.value)
                                }} onClick={calc}>
                                    <option value="blind">
                                        Глухая
                                    </option>
                                    <option value="">
                                        Поворотная
                                    </option>
                                </select>
                                <select value={type2} name="" id="" onChange={(e) => {
                                    setType2(e.target.value)
                                }} onClick={calc}>
                                    <option value="blind">
                                        Глухая
                                    </option>
                                    <option value="rotary">
                                        Поворотная
                                    </option>
                                    <option value="">
                                        Поворотно-откидная
                                    </option>
                                </select>

                            </div>
                            <div className={style.col_5}>
                                <label>
                                    <input type="radio" name="section"
                                           onChange={() => {
                                               setSection(3);
                                               calc(section)
                                           }
                                           }/>
                                    <img src={windowThree}/>
                                </label>

                            </div>
                        </div>

                    </div>
                    <div className={style.results}>
                        <div>
                            <div className={style.row}>
                                <p className={style.finalPrice}>
                                    {fPrice}
                                </p>
                                <p className={style.commentFinalPrice}>
                                    Стоимость Вашего окна <br/>с учетом монтажных работ
                                </p>
                            </div>
                            <div className={style.row}>
                                <p className={style.MiddlePrice}>
                                    {mPrice}
                                </p>
                                <p className={style.commentMidllePrice}> Средняя цена по Москве
                                </p>
                            </div>
                        </div>

                        <button className={style.callback}>
                            Заказать точный замер
                        </button>

                    </div>
                </div>
            </div>
            <div className={style.bottomLine}>
<span>
    ↓Не забудьте выбрать подарок↓
</span>
            </div>
        </div>


    )
}

export default Calc;
