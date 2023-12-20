import { Item } from "./Item";


export class OrderManager{
    private _orders: Map<string, Item[]>;


    constructor(){
        this._orders = new Map();
    }
    


}