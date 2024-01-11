import shippingIcon from "./assets/free-shiping-icon.svg";
import paymentIcon from "./assets/quick-payment-icon.svg";
import supportIcon from "./assets/support-icon.svg";

import productOneIcon from "./assets/product-one.svg";
import productTwoIcon from "./assets/produc-two.svg";
import productThreeIcon from "./assets/product-three.svg";
import lightS from "./assets/lightS.svg";

// import light from "public/light.png";

// const light1 = "public/light.png";
const light2 = "/light2.png";
const marshelUrl = "/marshel2.png"
const gen1 = "/gen1.png";
//-----------------Hero Page---------------------
export const heroTitle = "השכרת ציוד לאירועים";
export const heroSubtitle =
    "הפוך את חלומות האירוע שלך למציאות עם מלאי ההשכרה המוביל שלנו";
export const heroButton = "Shop Now"

export const stats = [
    {
        text: "שנות ניסיון",
        value: "9"
    },
    {
        text: "סניפים",
        value: "5"
    },
    {
        text: "לקוחות",
        value: "10000"
    },
    {
        text: "מדינות",
        value: "3"
    },
]
// -------------------------------------

//------------------------ NavBar--------------------
export const categories = [
    "בית", "מוצרים", "ביקורות", "צור קשר"
]


//-------------------- Service Page--------------------
export const services = [
    {
        title: "Free Shipping",
        subtitle: "No charge for your delivery",
        icon: shippingIcon,
    },
    {
        title: "Quick Payment",
        subtitle: "100% secure",
        icon: paymentIcon,
    },
    {
        title: "24/7 Support",
        subtitle: "Don't hesitate to contact us",
        icon: supportIcon,
    },
];

export const productsTitle = "המוצרים הנמכרים ביותר";
export const productsBtnText = "<- לכל המוצרים";


export const products = [

    //Generators
    {
        title: "Rubber Plant",
        price: "$75.00",
        img: lightS,
    },
    {
        title: "Golden Pothos",
        price: "$65.99",
        img: productThreeIcon,
    },

    {
        title: "Cast Iron Plant",
        price: "$88.50",
        img: productThreeIcon,
    },

    //Lighting
    {
        title: "Golden Pothos",
        price: "$65.99",
        img: light2,
    },

    {
        title: "Cast Iron Plant",
        price: "$88.50",
        img: light2,
    },

    //Sound
    {
        title: "Golden Pothos",
        price: "$65.99",
        img: marshelUrl,
    },
    {
        title: "Rubber Plant",
        price: "$75.00",
        img: marshelUrl,
    },
    {
        title: "Golden Pothos",
        price: "$65.99",
        img: marshelUrl,
    },
    {
        title: "Cast Iron Plant",
        price: "$88.50",
        img: marshelUrl,
    }
];


export const generators = [
    {
        title: "Rubber Plant",
        price: "$75.00",
        img: marshelUrl,
    },
    {
        title: "Golden Pothos",
        price: "$65.99",
        img: gen1,
    },

    {
        title: "Cast Iron Plant",
        price: "$88.50",
        img: productThreeIcon,
    }
];

export const lighting = [
    {
        title: "Golden Pothos",
        price: "$65.99",
        img: light2,
    },

    {
        title: "Cast Iron Plant",
        price: "$88.50",
        img: light2,
    }
];

export const amplification = [
    {
        title: "Golden Pothos",
        price: "$65.99",
        img: marshelUrl,
    },
    {
        title: "Rubber Plant",
        price: "$75.00",
        img: marshelUrl,
    },
    {
        title: "Golden Pothos",
        price: "$65.99",
        img: marshelUrl,
    },
    {
        title: "Cast Iron Plant",
        price: "$88.50",
        img: marshelUrl,
    }
];



// productsNew
export const categoryProducts = [generators, lighting, amplification];
export const categoryTitle = ["גנרטורים", "תאורה", "הגברה"];
export const firstSentence = "המוצרים שלנו";
export const secondSentence = "גלה את השילוב החלק של חדשנות ואיכות במוצרים שלנו, מעוצבים בקפידה כדי לשפר את החוויה שלך ולעורר עולם של אפשרויות";
export const productsBest = [
    {
        title: "Golden Pothos",
        price: "$65.99",
        img: productOneIcon,
    },
    {
        title: "Rubber Plant",
        price: "$75.00",
        img: productTwoIcon,
    },
    {
        title: "Cast Iron Plant",
        price: "$88.50",
        img: productThreeIcon,
    },
    {
        title: "Cast Iron Plant",
        price: "$88.50",
        img: productThreeIcon,
    }, {
        title: "Cast Iron Plant",
        price: "$88.50",
        img: productThreeIcon,
    },
];



// ---------------Reference---------------------
export const refTitles = ["תאורה", "הגברה", "גנרטורים"];
export const referenceTitle = "חוויה חלקה עם הציוד המתקדם שלנו";
export const referenceSubtitle = "תאורה מרהיבה ושידור עוצמתי עד מחוללי חשמל אמינים";

export const testimonials = [
    {
        image: "https://www.kindpng.com/picc/m/78-786038_-hd-png-download.png",
        occupation: "Manager",
        name: "Noam Cohen",
        text: "מעולם לא פגשתי מפתח אינטרנט שבאמת אכפת לו מהצלחת הלקוחות שלהם כמו שריק עושה"
    },
    {
        image: "/man_1.png",
        occupation: "Manager",
        name: "Lior shukrun",
        text: "לאחר שריק ביצע אופטימיזציה לאתר שלנו, התנועה שלנו גדלה ב-50%. אנחנו לא יכולים להודות להם מספיק!"
    },
    {
        image: "//man_2.png",
        occupation: "Manager",
        name: "Tal Levi",
        text: "חשבתי שאי אפשר לעשות אתר יפה כמו המוצר שלנו, אבל ריק הוכיח שאני טועה."
    }
];

//Testiamonials

export const testMainSentence = "מה אומרים עלינו"