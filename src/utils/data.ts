import { IProduct } from "./IProduct";
import c1 from "../assets/c1.jpg"
import c2 from "../assets/c2.jpg"
import c3 from "../assets/c3.jpg"
import c4 from "../assets/c4.jpg"
import { IProductAddOn } from "./IProductAddOn";



export const Cakes: IProduct[] = [{
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


export const ProductAddOns: IProductAddOn[] = [
    { itemName: "Cheesecake Pie", minValue: 0, maxValue: 10, defaultValue: 0, imgURL: c1 },
    { itemName: "Chocoflan Pie", minValue: 0, maxValue: 10, defaultValue: 0, imgURL: c2 },
    { itemName: "Cheesecake Cupcake", minValue: 0, maxValue: 100, defaultValue: 0, imgURL: c3 },
    { itemName: "Vanilla Cupcake", minValue: 0, maxValue: 100, defaultValue: 0, imgURL: c3 },
    { itemName: "Chocolate Cupcake", minValue: 0, maxValue: 100, defaultValue: 0, imgURL: c4 },
]

export const CakePeopleSize: string[] = ["0-10 people", "10-20 people", "20-40 people", "40-60 people", "60-100 people", "100+ people"];

export const CakeFillings: string[] = ["Tres (3) Leches", "Lemon Mousse", "Raspberry Mousse", "Strawberry Mousse", "Orange Mousse", "Chocolate Mousse", "Mocha Mousse", "White Chocolate Mousse", "Banana Mousse"];

export const CakeFlavors: string[] = ["None", "Vanilla White", "Deep Chocolate", "Swirled Marble", "Lemon", "Pink Champagne", "Spiced Carrot", "Pumpkin Spice", "Red Velvet", "Orange"];

export const CakeIcing: string[] = ["None", "Vanilla Butter Cream", "Chocolate Butter Cream", "Raspbery Butter Cream", "Orange Butter Cream", "White Chocolate Fondant"];

export const CakeFruit: string[] = ["Banana", "Peach", "Kiwi", "Strawberry", "Pineapple"];

export const Genders: string[] = ["Male", "Female"];

export const NoYesOptions: string[] = ["No", "Yes"];

export const CakeOccasions: string[] = ["Birthday (Male)", "Birthday (Female)", "Anniversary", "Graduation", "Wedding", "Bachelors Party", "Engagement", "Valentine's Day", "Mother's Day", "Father's Day", "Christmas", "New Years", "Baby Shower (Boy)", "Baby Shower (Girl)", "Family Get Together", "House-Warming Party", "Gender Reveal", "Holiday", "Other"]

export enum Headers {
    CAKE = "Cake",
    ORDERING_A_CAKE = "Are You Ordering a Cake?",
    CAKE_SIZE = "Cake Size",
    CAKE_OCCASION = "Occassion of Cake",
    CAKE_FILLING = "Cake Filling",
    CAKE_FLAVOR = "Cake Flavor",
    CAKE_ICING = "Cake Icing",
    ADD_FRUIT = "Add Fruit",
    GENDER = "Cake Intended For",
    SPECIAL_REQUEST = "Special Request",
    FILE_UPLOAD = "File Upload",
    PICKUP_DATE = "Pickup Date",
    FIRST_NAME = "First Name",
    LAST_NAME = "Last Name",
    EMAIL = "Email",
    PHONE_NUMBER = "Phone Number",
    ADDITIONAL_ITEMS = "Additional Items"
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
