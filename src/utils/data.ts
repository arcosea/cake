import { IProduct } from "./IProduct";
import c0 from "../assets/c0.jpg"
import c1 from "../assets/c1.jpg"
import c2 from "../assets/c2.jpg"
import c3 from "../assets/c3.jpg"
import c4 from "../assets/c4.jpg"
import c5 from "../assets/c5.jpg"
import c6 from "../assets/c6.jpg"
import c7 from "../assets/c7.jpg"
import c8 from "../assets/c8.jpg"
import c9 from "../assets/c9.jpg"
import c10 from "../assets/c10.jpg"
import { IProductAddOn } from "./IProductAddOn";
import axios from 'axios';


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

export interface elem {
    title: string;
    url: any;
}

export const items: any[] = [{
    title: "Cake", url: c5
}, {
    title: "Contact", content: []
}, {
    title: "Cake", url: c7
}, {
    title: "Cake", content: ["Mon: 10am - 6pm", "Mon: 10am - 6pm", "Mon: 10am - 6pm", "Mon: 10am - 6pm"]
}, {
    title: "Cake", url: c9
}, {
    title: "Cake", url: c10
}, {
    title: "Cake", url: c0
}]


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
    COLOR = "Colors",
    CAKE_MESSAGE = "Message on Cake",
    SPECIAL_INSTRUCTIONS = "Special Instructions",
    FILE_UPLOAD = "File Upload",
    PICKUP_DATE = "Pickup Date",
    PICKUP_TIME = "Pickup Time",
    FIRST_NAME = "First Name",
    LAST_NAME = "Last Name",
    EMAIL = "Email",
    PHONE_NUMBER = "Phone Number",
    ADDITIONAL_ITEMS = "Additional Items",
}

export enum BakeryHeaders {
    INFO = "General Info",
    HOURS = "Hours",
    SOCIALS = "Social Media",
    FACEBOOK = "Facebook",
    INSTAGRAM = "Instagram",
    PRODUCTS = "Products",
    PLACE_ORDER = "Place an Order",
    VIEW_WORK = "View Examples"
}


export enum Bakery {
    NAME = "Teresita's Mexican Bakery",
    LOCATION = "3731 McKinley Ave, Tacoma, WA",
    PHONE_NUMBER = "(253) 474-5110",
    SERVICES = "In-Store Pickup",
    PRODUCTS = "Bakery, 3 Leches, Cupcakes with Fillings, Mini Pies, Cheesecake, Chocoflan",
    EMAIL = "teresitasbakery@gmail.com",
    HOURS = "M (10am - 6pm) | T (closed) | W - S (10am - 6pm) | S (10am - 1pm)"
}

export enum Hours {
    MONDAY = "Mon: 10am - 6pm",
    TUESDAY = "Tue: --closed--",
    WEDNESDAY = "Wed: 10am - 6pm",
    THURSDAY = "Thu: 10am - 6pm",
    FRIDAY = "Fri: 10am - 6pm",
    SATURDAY = "Sat: 10am - 6pm",
    SUNDAY = "Sun: 10am - 1pm",
}

export enum Links {
    LOCATION = "https://maps.app.goo.gl/2NPiYpWFGWRTJwUj9",
    FACEBOOK = "https://www.facebook.com/teresitasmexicanbakery/",
    INSTAGRAM = "https://www.instagram.com/teresitasmexicanbakery/"
}


export enum TabLabels {
    HOME = "Home",
    PRODUCTS = "Products",
    ORDER = "Order"
}


export interface IOrderDetails {
    first_name?: string;
    last_name?: string;
    phone_number?: string;
    email?: string;
    order_number?: string;
    order_date?: string;
    pickup_date?: string;
    total_amount?: string;
    is_ordering_cake?: string;
    cake_size?: string;
    cake_occasion?: string;
    cake_filling?: string;
    cake_flavor?: string;
    cake_icing?: string;
    fruit?: string;
    colors?: string;
    message?: string;
    instructions?: string;
    image?: string;
    other_items?: string;
}


export interface IAsanaTask {
    name: string;
    notes: string;
    due_at: string;
}

export async function createAsanaEvent(ASANA_API_URL: string, ASANA_PROJECT_ID: string, ASANA_ACCESS_TOKEN: string, task: IAsanaTask): Promise<void> {
    try {
        const response = await axios.post(
            `${ASANA_API_URL}/tasks`,
            {
                data: {
                    projects: [ASANA_PROJECT_ID],
                    name: task.name,
                    due_at: task.due_at,
                    notes: task.notes
                },
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${ASANA_ACCESS_TOKEN}`,
                },
            }
        );

        console.log('Event created successfully:', response.data.data);
    } catch (error: any) {
        console.error('Error creating event on Asana:', error.response?.data || error.message);
    }
}



export async function fetchAsanaTasks(ASANA_API_URL: string, ASANA_PROJECT_ID: string, ASANA_ACCESS_TOKEN: string) {
    try {
      const today = new Date()
      const earliestDate = new Date(today);
      earliestDate.setDate(today.getDate() + 7);
      const earliestDateString = earliestDate.toISOString().split('T')[0];
  
  
      // Get current date in ISO format
      const options = {
        method: 'GET',
        url: `${ASANA_API_URL}/projects/${ASANA_PROJECT_ID}/tasks`,
        params: {
          opt_fields: 'name,notes,due_on,completed'
        },
        headers: {
          accept: 'application/json',
          authorization: `Bearer ${ASANA_ACCESS_TOKEN}`
        }
      };
      
      axios
        .request(options)
        .then(function (response) {
          let tasks = response.data.data;
          let remaining: any[] = []
  
          tasks.forEach( (task: any) => {
            if (task.due_on >= earliestDateString){
              remaining.push(task)
            }
          })
          console.log(remaining);
  
        })
        .catch(function (error) {
          // console.error(error);
        });
    } catch (error: any) {
        // console.error('Error fetching tasks from Asana:', error.response?.data || error.message);
    }
  }