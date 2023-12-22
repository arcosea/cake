import dayjs from "dayjs";
import { CakePeopleSize, CakeBaseStyles, CakeBaseFlavors, CakeFruit, Headers } from "./data";

export class DataManager {
    private _orderCriteria: Map<string, any>;
    private _additionalRequests: Map<string, any>;
    private _contactInfo: Map<string, any>;
    private _earliestPickupDate: any;





    constructor() {
        let currentDate = dayjs();
        this._earliestPickupDate = currentDate.add(7, 'day');
        this._orderCriteria = new Map();
        this._additionalRequests = new Map();
        this._contactInfo = new Map();

        this.initOrderCriteria();
        this.initAdditionalRequest();
        this.initContactInfo();
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

    private initContactInfo() {
        this._contactInfo.set(Headers.PICKUP_DATE, "");
        this._contactInfo.set(Headers.FIRST_NAME, "");
        this._contactInfo.set(Headers.LAST_NAME, "");
        this._contactInfo.set(Headers.EMAIL, "");
        this._contactInfo.set(Headers.PHONE_NUMBER, "");
    }





    public updateOrderCriteria(criteriaType: string, value: string | any) {
        this._orderCriteria.set(criteriaType, value);
    }

    public updateSpecialNotes(value: string) {
        this._additionalRequests.set(Headers.SPECIAL_REQUEST, value);
    }

    public updateFileUpload(file: File, dataURL: any) {
        this.additionalRequests.set(Headers.FILE_UPLOAD, [file, dataURL]);
    }

    public updateContactInfo(criteriaType: string, value: string | any) {
        this._contactInfo.set(criteriaType, value);
    }

    public get orderCriteria() {
        return this._orderCriteria;
    }

    public get additionalRequests() {
        return this._additionalRequests;
    }

    public get contactInfo() {
        return this._contactInfo;
    }

    public get earliestPickupDate() {
        return this._earliestPickupDate;
    }




}