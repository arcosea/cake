import dayjs from "dayjs";
import { CakePeopleSize, CakeBaseStyles, CakeBaseFlavors, CakeFruit, Headers, Genders, NoYesOptions, CakeOccasions } from "./data";
import { Helper } from "./Helper";

export class DataManager {
    private _orderCriteria: Map<string, any>;
    private _additionalRequests: Map<string, any>;
    private _contactInfo: Map<string, any>;
    private _earliestPickupDate: any;
    private readonly _minDaysBeforePickup: number = 7;
    private _currentDate: any;
    private _helper: Helper;
    private _confirmationNumber: string = "";
    private _isOrderingCake: boolean;



    constructor() {
        this._helper = new Helper();
        this._currentDate = dayjs();
        this._earliestPickupDate = this._currentDate.add(this._minDaysBeforePickup, 'day');
        this._orderCriteria = new Map();
        this._additionalRequests = new Map();
        this._contactInfo = new Map();
        this._isOrderingCake = false;

        this.initOrderCriteria();
        this.initAdditionalRequest();
        this.initContactInfo();
        this.initConfirmationNumber();
    }


    private initOrderCriteria() {
        this._orderCriteria.set(Headers.CAKE_SIZE, CakePeopleSize[0]);
        this._orderCriteria.set(Headers.CAKE_OCCASION, CakeOccasions[0]);
        this._orderCriteria.set(Headers.CAKE_BASE_STYLE, CakeBaseStyles[0]);
        this._orderCriteria.set(Headers.CAKE_BASE_FLAVOR, CakeBaseFlavors[0]);

        const initialFruitChecked: { [key: string]: boolean } = {};
        CakeFruit.forEach((option) => {
            initialFruitChecked[option] = false;
        });
        this.orderCriteria.set(Headers.ADD_FRUIT, initialFruitChecked);

        // this.orderCriteria.set(Headers.GENDER, Genders[0]);
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

    private initConfirmationNumber() {
        let indexDiff: number = 1
        let codeLength: number = 5;
        let randomCode: string = this._helper.makeRandomID(codeLength);

        this._confirmationNumber = String(this._currentDate.$M + indexDiff) + String(this._currentDate.$D) + randomCode;
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

    public updateOrderingCake(isOrdering: boolean) {
        this._isOrderingCake = isOrdering;
    }

    public resetData() {
        this.initOrderCriteria();
        this.initAdditionalRequest();
        this.initContactInfo();
    }

    public orderDetails() {
        let details: Map<string, any> = new Map();
        if (this._isOrderingCake) {
            details.set(Headers.ORDERING_A_CAKE, NoYesOptions[1]);
            details.set(Headers.CAKE_SIZE, this._orderCriteria.get(Headers.CAKE_SIZE));
            details.set(Headers.CAKE_OCCASION, this._orderCriteria.get(Headers.CAKE_OCCASION))
            details.set(Headers.CAKE_BASE_STYLE, this._orderCriteria.get(Headers.CAKE_BASE_STYLE));
            details.set(Headers.CAKE_BASE_FLAVOR, this._orderCriteria.get(Headers.CAKE_BASE_FLAVOR));

            let fruit: string[] = [];
            let selectedFruit = this._orderCriteria.get(Headers.ADD_FRUIT);
            for (const option in selectedFruit) {
                if (selectedFruit[option]) {
                    fruit.push(option)
                }
            };
            details.set(Headers.ADD_FRUIT, fruit.toString());

            // details.set(Headers.GENDER, this._orderCriteria.get(Headers.GENDER));
            details.set(Headers.SPECIAL_REQUEST, this._additionalRequests.get(Headers.SPECIAL_REQUEST));
        } else {
            details.set(Headers.ORDERING_A_CAKE, NoYesOptions[0]);
        }


        return details;
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

    public get confirmationNumber() {
        return this._confirmationNumber;
    }

    public get isOrderingCake() {
        return this._isOrderingCake;
    }




}