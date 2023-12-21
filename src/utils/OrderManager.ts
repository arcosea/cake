import { Item } from "./Item";
import dayjs from 'dayjs';
import { Cakes } from "./data";


export class OrderManager {
    private _orders: Map<string, number>;
    private _prices: Map<string, number>;

    private _dateOrder: any;
    private _firstName: string;
    private _lastName: string
    private _email: string;
    private _phoneNumber: string | number;



    constructor() {
        this._orders = new Map();
        this._prices = new Map();
        this._dateOrder = dayjs();
        this._firstName = ""
        this._lastName = ""
        this._email = ""
        this._phoneNumber = ""
        this.initPrices();
    }

    private initPrices() {
        for (let cake of Cakes) {
            this._prices.set(cake.name, cake.cost);
        }
    }

    public resetData() {
        this._orders.clear();
        this._dateOrder = dayjs();
        this._firstName = ""
        this._lastName = ""
        this._email = ""
        this._phoneNumber = ""
    }

    public updateOrder(itemName: string, quantity: number) {
        if (quantity === 0) {
            this._orders.delete(itemName)
        } else {
            this._orders.set(itemName, quantity);
        }

    }


    public updateFormInfo(type: string, value: string | number) {

    }

    public get orders() {
        return this._orders;
    }

    public get prices() {
        return this._prices;
    }












}