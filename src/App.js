import React from 'react';

import './App.css';
import Header from "./Componens/header/header";
import Advantages from "./Componens/Advantages/Advantages";
import Build from "./Componens/TrueBuild";
import Service from "./Componens/Service/service";
import store from "./Componens/store";
import Work from "./Componens/Work";
import Footer from "./Componens/Footer/Footer";
import Map from "./Componens/Map/Map";
import Feedback from "./Componens/feedback/Feedback";
import Calc from "./Componens/Calc/Calc";
import Discount from "./Componens/discount/Discount";
import Gifts from "./Componens/Gifts/Gifts";


function App(props) {
    return (
        <div>
    {/*        <Header/>
            <Service/>
            <Advantages state={store.state.advantages}/>
            <Build/>
            <Work/>*/}
            <Calc state={store.state.calc}/>
       {/*     <Gifts state={store.state.gifts}/>
            <Feedback state={store.state.feedbacks}/>
            <Discount/>
            <Map/>
            <Footer/>*/}


        </div>

    )

        ;
}

export default App;
