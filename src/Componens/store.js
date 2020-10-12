import garant from "../img_riko/garant.png";
import price from "../img_riko/low_price.png";
import hq from "../img_riko/hq.png";
import size from "../img_riko/size.png";
import build from "../img_riko/build.png";
import dilivery from "../img_riko/dilivery.png";
import wp from "../img_riko/wp.png";
import epay from "../img_riko/epay.png";
import avatar from "../img_riko/avatar.png";
import under from "../img_riko/under_window.png";
import otliv from "../img_riko/otliv.png";
import kozirek from "../img_riko/kozirek.png";
import otkos from "../img_riko/otkos.png";
import heand from "../img_riko/heand.png";
import grid from "../img_riko/grid.png";


let store = {
    state: {
        advantages: {
            advantagesData: [
                {text: 'Гарантия 3 года ', img: garant},
                {text: 'Низкая цена ', img: price},
                {text: 'Отличное качество ', img: hq},
                {text: 'Беспланый замер ', img: size},
                {text: 'Чистый монтаж', img: build},
                {text: 'Беслатная доставка ', img: dilivery},
                {text: 'Славянские монтажники ', img: wp},
                {text: 'Безналичная оплата ', img: epay},

            ]
        },

        feedbacks: {
            feedbacksData: [
                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid atque beatae, dicta distinctio dolore error\n' +
                        '    magnam nisi omnis placeat possimus provident quisquam sequi tempore. ',
                    img: avatar,
                    name: 'Семен',
                    city: 'г.Череповец'
                },
                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid atque beatae, dicta distinctio dolore error\n' +
                        '    magnam nisi omnis placeat possimus provident quisquam sequi tempore. ',
                    img: avatar,
                    name: 'Николай',
                    city: 'г.Череповец'
                },
                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid atque beatae, dicta distinctio dolore error\n' +
                        '    magnam nisi omnis placeat possimus provident quisquam sequi tempore. ',
                    img: avatar,
                    name: 'Владимир Петрович',
                    city: 'г.Череповец'
                },
                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid atque beatae, dicta distinctio dolore error\n' +
                        '    magnam nisi omnis placeat possimus provident quisquam sequi tempore. ',
                    img: avatar,
                    name: 'Остап Бендер',
                    city: 'г.Череповец'
                },
            ]
        },
        gifts: {
            giftsData: [
                {price: '1500', img: under, header: 'Подоконник'},
                {price: '2100', img: otliv, header: 'Отливы'},
                {price: '3300', img: kozirek, header: 'Козырек'},
                {price: '950', img: otkos, header: 'Откосы'},
                {price: '950', img: heand, header: 'Ручки'},
                {price: '950', img: grid, header: 'Москитная сетка'},

            ]
        },
        calc: {
            calcData: [
                {price: 2194, width: 800, height: 1000, type: "blind", section: "1"},
                {price: 2424, width: 800, height: 1200, type: "blind", section: "1"},
                {price: 2654, width: 800, height: 1300, type: "blind", section: "1"},
                {price: 2884, width: 800, height: 1400, type: "blind", section: "1"},
                {price: 3113, width: 800, height: 1500, type: "blind", section: "1"},
                {price: 2414, width: 900, height: 1000, type: "blind", section: "1"},
                {price: 2666, width: 900, height: 1200, type: "blind", section: "1"},
                {price: 2918, width: 900, height: 1300, type: "blind", section: "1"},
                {price: 3170, width: 900, height: 1400, type: "blind", section: "1"},
                {price: 3422, width: 900, height: 1500, type: "blind", section: "1"},
                {price: 2636, width: 1000, height: 1000, type: "blind", section: "1"},
                {price: 2910, width: 1000, height: 1200, type: "blind", section: "1"},
                {price: 3184, width: 1000, height: 1300, type: "blind", section: "1"},
                {price: 3458, width: 1000, height: 1400, type: "blind", section: "1"},
                {price: 3732, width: 1000, height: 1500, type: "blind", section: "1"},
                {price: 2857, width: 1100, height: 1000, type: "blind", section: "1"},
                {price: 3153, width: 1100, height: 1200, type: "blind", section: "1"},
                {price: 3449, width: 1100, height: 1300, type: "blind", section: "1"},
                {price: 3745, width: 1100, height: 1400, type: "blind", section: "1"},
                {price: 4041, width: 1100, height: 1500, type: "blind", section: "1"},
                {price: 3078, width: 1200, height: 1000, type: "blind", section: "1"},
                {price: 3096, width: 1200, height: 1200, type: "blind", section: "1"},
                {price: 3714, width: 1200, height: 1300, type: "blind", section: "1"},
                {price: 4062, width: 1200, height: 1400, type: "blind", section: "1"},
                {price: 4350, width: 1200, height: 1500, type: "blind", section: "1"},
                {price: 4196, width: 800, height: 1000, type: "rotary", section: "1"},
                {price: 4488, width: 800, height: 1200, type: "rotary", section: "1"},
                {price: 4780, width: 800, height: 1300, type: "rotary", section: "1"},
                {price: 5072, width: 800, height: 1400, type: "rotary", section: "1"},
                {price: 5364, width: 800, height: 1500, type: "rotary", section: "1"},
                {price: 4650, width: 900, height: 1000, type: "rotary", section: "1"},
                {price: 4964, width: 900, height: 1200, type: "rotary", section: "1"},
                {price: 5278, width: 900, height: 1300, type: "rotary", section: "1"},
                {price: 5592, width: 900, height: 1400, type: "rotary", section: "1"},
                {price: 5906, width: 900, height: 1500, type: "rotary", section: "1"},
                {price: 4914, width: 1000, height: 1000, type: "rotary", section: "1"},
                {price: 5250, width: 1000, height: 1200, type: "rotary", section: "1"},
                {price: 5586, width: 1000, height: 1300, type: "rotary", section: "1"},
                {price: 5922, width: 1000, height: 1400, type: "rotary", section: "1"},
                {price: 6258, width: 1000, height: 1500, type: "rotary", section: "1"},
                {price: 5179, width: 1100, height: 1000, type: "rotary", section: "1"},
                {price: 5537, width: 1100, height: 1200, type: "rotary", section: "1"},
                {price: 5895, width: 1100, height: 1300, type: "rotary", section: "1"},
                {price: 6253, width: 1100, height: 1400, type: "rotary", section: "1"},
                {price: 6611, width: 1100, height: 1500, type: "rotary", section: "1"},
                {price: 5442, width: 1200, height: 1000, type: "rotary", section: "1"},
                {price: 5822, width: 1200, height: 1200, type: "rotary", section: "1"},
                {price: 6202, width: 1200, height: 1300, type: "rotary", section: "1"},
                {price: 6582, width: 1200, height: 1400, type: "rotary", section: "1"},
                {price: 6962, width: 1200, height: 1500, type: "rotary", section: "1"},
                {price: 3498, width: 1100, height: 1100, type1: "blind", type2: "blind", section: "2"},
                {price: 3737, width: 1200, height: 1100, type1: "blind", type2: "blind", section: "2"},
                {price: 3974, width: 1300, height: 1100, type1: "blind", type2: "blind", section: "2"},
                {price: 4112, width: 1400, height: 1100, type1: "blind", type2: "blind", section: "2"},
                {price: 4450, width: 1500, height: 1100, type1: "blind", type2: "blind", section: "2"},
                {price: 4688, width: 1600, height: 1100, type1: "blind", type2: "blind", section: "2"},
                {price: 3757, width: 1100, height: 1200, type1: "blind", type2: "blind", section: "2"},
                {price: 4014, width: 1200, height: 1200, type1: "blind", type2: "blind", section: "2"},
                {price: 4269, width: 1300, height: 1200, type1: "blind", type2: "blind", section: "2"},
                {price: 4524, width: 1400, height: 1200, type1: "blind", type2: "blind", section: "2"},
                {price: 4779, width: 1500, height: 1200, type1: "blind", type2: "blind", section: "2"},
                {price: 5035, width: 1600, height: 1200, type1: "blind", type2: "blind", section: "2"},
                {price: 4016, width: 1100, height: 1300, type1: "blind", type2: "blind", section: "2"},
                {price: 4291, width: 1200, height: 1300, type1: "blind", type2: "blind", section: "2"},
                {price: 4564, width: 1300, height: 1300, type1: "blind", type2: "blind", section: "2"},
                {price: 4836, width: 1400, height: 1300, type1: "blind", type2: "blind", section: "2"},
                {price: 5108, width: 1500, height: 1300, type1: "blind", type2: "blind", section: "2"},
                {price: 5382, width: 1600, height: 1300, type1: "blind", type2: "blind", section: "2"},
                {price: 4275, width: 1100, height: 1400, type1: "blind", type2: "blind", section: "2"},
                {price: 4568, width: 1200, height: 1400, type1: "blind", type2: "blind", section: "2"},
                {price: 4859, width: 1300, height: 1400, type1: "blind", type2: "blind", section: "2"},
                {price: 5148, width: 1400, height: 1400, type1: "blind", type2: "blind", section: "2"},
                {price: 5437, width: 1500, height: 1400, type1: "blind", type2: "blind", section: "2"},
                {price: 5729, width: 1600, height: 1400, type1: "blind", type2: "blind", section: "2"},
                {price: 4534, width: 1100, height: 1500, type1: "blind", type2: "blind", section: "2"},
                {price: 4845, width: 1200, height: 1500, type1: "blind", type2: "blind", section: "2"},
                {price: 5154, width: 1300, height: 1500, type1: "blind", type2: "blind", section: "2"},
                {price: 5460, width: 1400, height: 1500, type1: "blind", type2: "blind", section: "2"},
                {price: 5766, width: 1500, height: 1500, type1: "blind", type2: "blind", section: "2"},
                {price: 6067, width: 1600, height: 1500, type1: "blind", type2: "blind", section: "2"},
                {price: 4793, width: 1100, height: 1600, type1: "blind", type2: "blind", section: "2"},
                {price: 5122, width: 1200, height: 1600, type1: "blind", type2: "blind", section: "2"},
                {price: 5447, width: 1300, height: 1600, type1: "blind", type2: "blind", section: "2"},
                {price: 5771, width: 1400, height: 1600, type1: "blind", type2: "blind", section: "2"},
                {price: 6096, width: 1500, height: 1600, type1: "blind", type2: "blind", section: "2"},
                {price: 6422, width: 1600, height: 1600, type1: "blind", type2: "blind", section: "2"},

                {price: 5196, width: 1100, height: 1100, type1: "blind", type2: "rotary", section: "2"},
                {price: 5463, width: 1200, height: 1100, type1: "blind", type2: "rotary", section: "2"},
                {price: 5713, width: 1300, height: 1100, type1: "blind", type2: "rotary", section: "2"},
                {price: 5914, width: 1400, height: 1100, type1: "blind", type2: "rotary", section: "2"},
                {price: 6459, width: 1500, height: 1100, type1: "blind", type2: "rotary", section: "2"},
                {price: 6906, width: 1600, height: 1100, type1: "blind", type2: "rotary", section: "2"},
                {price: 5531, width: 1100, height: 1200, type1: "blind", type2: "rotary", section: "2"},
                {price: 5814, width: 1200, height: 1200, type1: "blind", type2: "rotary", section: "2"},
                {price: 6034, width: 1300, height: 1200, type1: "blind", type2: "rotary", section: "2"},
                {price: 6314, width: 1400, height: 1200, type1: "blind", type2: "rotary", section: "2"},
                {price: 6854, width: 1500, height: 1200, type1: "blind", type2: "rotary", section: "2"},
                {price: 7319, width: 1600, height: 1200, type1: "blind", type2: "rotary", section: "2"},
                {price: 5866, width: 1100, height: 1300, type1: "blind", type2: "rotary", section: "2"},
                {price: 6165, width: 1200, height: 1300, type1: "blind", type2: "rotary", section: "2"},
                {price: 6355, width: 1300, height: 1300, type1: "blind", type2: "rotary", section: "2"},
                {price: 6714, width: 1400, height: 1300, type1: "blind", type2: "rotary", section: "2"},
                {price: 7249, width: 1500, height: 1300, type1: "blind", type2: "rotary", section: "2"},
                {price: 7732, width: 1600, height: 1300, type1: "blind", type2: "rotary", section: "2"},
                {price: 6201, width: 1100, height: 1400, type1: "blind", type2: "rotary", section: "2"},
                {price: 6516, width: 1200, height: 1400, type1: "blind", type2: "rotary", section: "2"},
                {price: 6676, width: 1300, height: 1400, type1: "blind", type2: "rotary", section: "2"},
                {price: 7114, width: 1400, height: 1400, type1: "blind", type2: "rotary", section: "2"},
                {price: 7644, width: 1500, height: 1400, type1: "blind", type2: "rotary", section: "2"},
                {price: 8145, width: 1600, height: 1400, type1: "blind", type2: "rotary", section: "2"},
                {price: 6536, width: 1100, height: 1500, type1: "blind", type2: "rotary", section: "2"},
                {price: 6867, width: 1200, height: 1500, type1: "blind", type2: "rotary", section: "2"},
                {price: 6997, width: 1300, height: 1500, type1: "blind", type2: "rotary", section: "2"},
                {price: 7514, width: 1400, height: 1500, type1: "blind", type2: "rotary", section: "2"},
                {price: 8039, width: 1500, height: 1500, type1: "blind", type2: "rotary", section: "2"},
                {price: 8558, width: 1600, height: 1500, type1: "blind", type2: "rotary", section: "2"},
                {price: 6872, width: 1100, height: 1600, type1: "blind", type2: "rotary", section: "2"},
                {price: 7220, width: 1200, height: 1600, type1: "blind", type2: "rotary", section: "2"},
                {price: 7318, width: 1300, height: 1600, type1: "blind", type2: "rotary", section: "2"},
                {price: 7912, width: 1400, height: 1600, type1: "blind", type2: "rotary", section: "2"},
                {price: 8435, width: 1500, height: 1600, type1: "blind", type2: "rotary", section: "2"},
                {price: 8971, width: 1600, height: 1600, type1: "blind", type2: "rotary", section: "2"},


                {price: 9265, width: 1700, height: 1500, section: "3"},
                {price: 9587, width: 1800, height: 1500, section: "3"},
                {price: 9907, width: 1900, height: 1500, section: "3"},
                {price: 10230, width: 2000, height: 1500, section: "3"},
                {price: 10510, width: 2100, height: 1500, section: "3"},
                {price: 10935, width: 2200, height: 1500, section: "3"},
            ],

        }


    }
}


export default store;