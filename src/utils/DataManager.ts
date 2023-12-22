import { CakePeopleSize, CakeBaseStyles, CakeBaseFlavors, CakeFruit, Headers } from "./data";

export class DataManager {
    private _orderCriteria: Map<string, any>;
    private _additionalRequests: Map<string, any>;
    private _contactInfo: Map<string, string>;





    constructor() {
        this._orderCriteria = new Map();
        this._additionalRequests = new Map();
        // this._fileUpload = new Map();
        this._contactInfo = new Map();
        // this._specialNotes = ""
        this.initOrderCriteria();
        this.initAdditionalRequest();
    }


    private initOrderCriteria() {
        this._orderCriteria.set(Headers.CAKE_SIZE, CakePeopleSize[0]);
        this._orderCriteria.set(Headers.CAKE_BASE_STYLE, CakeBaseStyles[0]);
        this._orderCriteria.set(Headers.CAKE_BASE_FLAVOR, CakeBaseFlavors[0]);

        const initialFruitChecked: { [key: string]: boolean } = {};
        CakeFruit.forEach((option) => {
            initialFruitChecked[option] = false;
        });

        this.orderCriteria.set(Headers.ADD_FRUIT, initialFruitChecked);
    }

    private initAdditionalRequest() {
        this._additionalRequests.set(Headers.SPECIAL_REQUEST, "");
        this._additionalRequests.set(Headers.FILE_UPLOAD, [null, ""])
    }


    public updateOrderCriteria(criteriaType: string, value: string | any) {
        this._orderCriteria.set(criteriaType, value);
    }

    public updateSpecialNotes(value: string) {
        // this._specialNotes = value;
        this._additionalRequests.set(Headers.SPECIAL_REQUEST, value);
    }

    public updateFileUpload(file: File, dataURL: any) {
        this.additionalRequests.set(Headers.FILE_UPLOAD, [file, dataURL]);
    }

    public get orderCriteria() {
        return this._orderCriteria;
    }

    public get specialNotes() {
        return this._additionalRequests.get(Headers.SPECIAL_REQUEST);
    }

    public get additionalRequests() {
        return this._additionalRequests;
    }




}