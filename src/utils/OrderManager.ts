import { Item } from "./Item";
import dayjs from 'dayjs';

export class OrderManager {
    private _orders: Map<string, Item[]>;

    private _dateOrder: any;
    private _firstName: string;
    private _lastName: string
    private _email: string;
    private _phoneNumber: string | number;



    constructor() {
        this._orders = new Map();
        this._dateOrder = dayjs();
        this._firstName = ""
        this._lastName = ""
        this._email = ""
        this._phoneNumber = ""
    }




    




}