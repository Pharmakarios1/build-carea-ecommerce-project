import logo from "../assets/Logo/Logomark.png";
import arrow_down from "../assets/icons/arrow_down.png";
import Search from "../assets/icons/Search.png";
import Shop from "../assets/icons/shop.png";
import User from "../assets/icons/User.png";
import star from "../assets/hero/Burst-pucker.png";
import Ellipse from "../assets/hero/Ellipse.png";
import hero_img from "../assets/hero/hero_img.png";
import feature_1 from "../assets/icons/feature_1.png";
import feature_2 from "../assets/icons/feature_2.png";
import feature_3 from "../assets/icons/feature_3.png";
import best_1 from "../assets/BestSelling/classic_mono.png";
import best_2 from "../assets/BestSelling/mono_ward.png";
import best_3 from "../assets/BestSelling/Essential_neut.png";
import best_4 from "../assets/BestSelling/utraanet.png";
import cta_img from "../assets/hero/cta_img.png";

export {
  logo,
  arrow_down,
  Search,
  Shop,
  User,
  star,
  Ellipse,
  hero_img,
  feature_1,
  feature_2,
  feature_3,
  cta_img,
};

export const menus = [
  { id: 1, label: "Home", to: "/", icon: null },
  { id: 2, label: "Categories", to: "/categories", icon: arrow_down },
  { id: 3, label: "About", to: "/about", icon: null },
  { id: 4, label: "Contact", to: "/contact", icon: null },
];

export const bestSelling = [
  {
    id: 1,
    name: "T-shirt",
    availability: "In Stock",
    price: "$20.00",
    img: best_1,
  },
  {
    id: 2,
    name: "T-shirt",
    availability: "In Stock",
    price: "$50.00",
    img: best_2,
  },
  {
    id: 3,
    name: "T-shirt",
    availability: "In Stock",
    price: "$90.00",
    img: best_3,
  },
  {
    id: 4,
    name: "T-shirt",
    availability: "In Stock",
    price: "$40.00",
    img: best_4,
  },
];
