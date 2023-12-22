import { Item } from "./Item";
import c1 from "../assets/c1.jpg"
import c2 from "../assets/c2.jpg"
import c3 from "../assets/c3.jpg"
import c4 from "../assets/c4.jpg"



export const Cakes: Item[] = [{
    name: "White Frosting Cake", cost: 29.99, url: c1,
    description: " a sweet baked food made from a dough or thick batter usually containing"
        + "flour and sugar and often shortening, eggs, and a raising agent (such as baking powder) : a flattened usually round mass of food that is baked or fried"
}, {
    name: "Strawberry Shortcake ", cost: 10.99, url: c2,
    description: " a sweet baked food made from a dough or thick batter usually containing"
        + "flour and sugar and often shortening, eggs, and a raising agent (such as baking powder) : a flattened usually round mass of food that is baked or fried"
}, {
    name: "Chocolate Cake", cost: 20.99, url: c3,
    description: " a sweet baked food made from a dough or thick batter usually containing"
        + "flour and sugar and often shortening, eggs, and a raising agent (such as baking powder) : a flattened usually round mass of food that is baked or fried"
}, {
    name: "Rainbow Cake", cost: 50.99, url: c4,
    description: " a sweet baked food made from a dough or thick batter usually containing"
        + "flour and sugar and often shortening, eggs, and a raising agent (such as baking powder) : a flattened usually round mass of food that is baked or fried"
},
]

export const CakePeopleSize: string[] = ["0-10 people", "10-20 people", "20-40 people", "40-60 people", "60-100 people", "100+ people"];

export const CakeBaseStyles: string[] = ["Tres (3) Leches", "Layers"];

export const CakeBaseFlavors: string[] = ["Vanilla", "Chocolate"];

export const CakeFruit: string[] = ["Banana", "Peach", "Kiwi", "Strawberry", "Pineapple"];

export const Gender: string[] = ["Male", "Female"];

export enum Headers {
    CAKE_SIZE = "Cake Size",
    CAKE_BASE_STYLE = "Cake Base Style",
    CAKE_BASE_FLAVOR = "Cake Base Flavor",
    ADD_FRUIT = "Add Fruit",
    SPECIAL_REQUEST = "Special Request",
    FILE_UPLOAD = "File Upload",
    PICKUP_DATE = "Pickup Date",
    FIRST_NAME = "First Name",
    LAST_NAME = "Last Name",
    EMAIL = "Email",
    PHONE_NUMBER = "Phone Number"
}

export enum Bakery {
    NAME = "Teresita's Mexican Bakery",
    LOCATION = "3731 McKinley Ave, Tacoma, WA, United States, Washington",
    PHONE_NUMBER = "(253) 474-5110",
    SERVICES = "In-Store Pickup",
    PRODUCTS = "Bakery, 3 Leches, Cupcakes with Fillings, Mini Pies, Cheesecake, Chocoflan",
    EMAIL = "teresitasbakery@gmail.com",
    HOURS = "M (10am - 6pm) | T (closed) | W - S (10am - 6pm) | S (10am - 1pm)"
}


export enum TabLabels {
    HOME = "Home",
    PRODUCTS = "Products",
    ORDER = "Order"
}
