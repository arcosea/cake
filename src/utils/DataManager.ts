import { CakePeopleSize, CakeBaseStyles, CakeBaseFlavors, CakeFruit, Headers } from "./data";

export class DataManager {
    private _orderCriteria: Map<string, any>;
    private _contactInfo: Map<string, string>;
    private _specialNotes: string;
    private _fileUpload: any;



    constructor() {
        this._orderCriteria = new Map();
        this._contactInfo = new Map();
        this._specialNotes = ""
        this.initOrderCriteria();
    }


    private initOrderCriteria() {
        this._orderCriteria.set(Headers.CAKE_SIZE, CakePeopleSize[0]);
        this._orderCriteria.set(Headers.CAKE_BASE_STYLE, CakeBaseStyles[0]);
        this._orderCriteria.set(Headers.CAKE_BASE_FLAVOR, CakeBaseFlavors[0]);
    }


    public updateOrderCriteria(criteriaType: string, value: string | any) {
        this._orderCriteria.set(criteriaType, value);
    }

    public get orderCriteria() {
        return this._orderCriteria;
    }



}