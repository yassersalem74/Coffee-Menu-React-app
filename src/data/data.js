
import AMERICANO from '../images/drinks/americano.jpg'
import LATTE from '../images/drinks/Caffe_Latte.jpg'
import MOCHA from '../images/drinks/Cafe_Mocha.jpg'
import WHITE from '../images/drinks/Flat_White.jpg'
import CAPPUCCINO from '../images/drinks/cappuccino_0.jpg'
import BREW from '../images/drinks/cold brew.jpg'
import FRAPPE from '../images/drinks/Frappe.jpg'
import ICEDMOCHA from '../images/drinks/IcedMocha.jpg'
import Chocolatesponge from '../images/drinks/choclatesponge.jpg'
import ClassicSwissroll from '../images/drinks/Classic-Swiss-Roll.jpg'
import icelatte from '../images/drinks/ice latte.jpg'


const items = [
  {
    id: "0",
    title: "AMERICANO ",
    description: "Espresso with added hot water (100–150 ml)",
    price: "7$",
    category: "Hot Coffe",
    img: AMERICANO,
  },
  {
    id: "1",
    title: "CAFFÈ LATTE ",
    description: "An espresso with steamed milk and only a little milk foam poured",
    price: "15$",
    category: "Hot Coffe",
    img: LATTE,
  },
  
  {
    id: "2",
    title: "CAFFÈ MOCHA ",
    description: "A caffè latte with chocolate and whipped cream",
    price: "13$",
    category: "Hot Coffe",
    img: MOCHA,
  },
  
  {
    id: "3",
    title: "FLAT WHITE ",
    description: "A coffee drink with a double espresso and lightly frosted milk ",
    price: "13$",
    category: "Hot Coffe",
    img: WHITE,
  },
  
  {
    id: "4",
    title: "CAPPUCCINO ",
    description: "A coffee drink consisting of espresso and a milk foam mixture ",
    price: "10$",
    category: "Hot Coffe",
    img: CAPPUCCINO,
  },

  {
    id: "5",
    title: "ICED LATTE",
    description: "Ice, cold milk and an espresso in a latte glass",
    price: "13$",
    category: "Cold Coffe",
    img: icelatte,
  },
  {
    id: "6",
    title: "ICED MOCHA",
    description: "like iced latte, but garnished and flavoured like caffè mocha",
    price: "19$",
    category: "Cold Coffe",
    img: ICEDMOCHA,
  },
  {
    id: "7",
    title: "FRAPPÉ",
    description: "Rich iced coffee made of espresso, milk and ice.",
    price: "17$",
    category: "Cold Coffe",
    img: FRAPPE,
  },
  {
    id: "8",
    title: "COLD BREW COFFEE",
    description: "cold beverage prepared by brewing freshly ground coffee in cold water",
    price: "8$",
    category: "Cold Coffe",
    img: BREW,
  },
  {
    id: "9",
    title: "Chocolate sponge ",
    description: "Chocolate sponge with hot chocolate sauce",
    price: "22$",
    category: "DESERT",
    img: Chocolatesponge,
  },
  {
    id: "10",
    title: "Classic Swiss roll",
    description: " Sponge, coated in crunchy sugar and bursting with fruity jam",
    price: "33$",
    category: "DESERT",
    img: ClassicSwissroll,
  },
  
  
 
];

export default items;
