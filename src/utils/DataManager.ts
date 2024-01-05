import { CakePeopleSize, CakeFillings, CakeFlavors, CakeFruit, Headers, Genders, NoYesOptions, CakeOccasions, ProductAddOns, CakeIcing, IOrderDetails } from "./data";
import { Helper } from "./Helper";
import { IProductAddOn } from "./IProductAddOn";


export class DataManager {
    private _orderCriteria: Map<string, any>;
    private _additionalRequests: Map<string, any>;
    private _additionalAddOns: Map<string, number>;
    private _contactInfo: Map<string, any>;
    private _earliestPickupDate: Date;
    private _unavailableHours: number[];
    private readonly _minDaysBeforePickup: number = 7;
    private _currentDate: Date;
    private _helper: Helper;
    private _confirmationNumber: string = "";
    private _isOrderingCake: boolean;



    constructor() {
        this._helper = new Helper();
        this._currentDate = new Date();
        this._earliestPickupDate = new Date(this._currentDate);
        this._earliestPickupDate.setDate(this._currentDate.getDate() + this._minDaysBeforePickup);
        this._unavailableHours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 18, 19, 20, 21, 22, 23];
        this._orderCriteria = new Map();
        this._additionalRequests = new Map();
        this._additionalAddOns = new Map();
        this._contactInfo = new Map();
        this._isOrderingCake = false;

        this.initOrderCriteria();
        this.initAdditionalRequest();
        this.initAdditionalAddOns();
        this.initContactInfo();
        this.initConfirmationNumber();
    }


    private initOrderCriteria() {
        this._orderCriteria.set(Headers.CAKE_SIZE, CakePeopleSize[0]);
        this._orderCriteria.set(Headers.CAKE_OCCASION, CakeOccasions[0]);
        this._orderCriteria.set(Headers.CAKE_FILLING, CakeFillings[0]);
        this._orderCriteria.set(Headers.CAKE_FLAVOR, CakeFlavors[0]);
        this._orderCriteria.set(Headers.CAKE_ICING, CakeIcing[0]);

        const initialFruitChecked: { [key: string]: boolean } = {};
        CakeFruit.forEach((option) => {
            initialFruitChecked[option] = false;
        });
        this.orderCriteria.set(Headers.ADD_FRUIT, initialFruitChecked);

        // this.orderCriteria.set(Headers.GENDER, Genders[0]);
    }

    private initAdditionalRequest() {
        this._additionalRequests.set(Headers.COLOR, "");
        this._additionalRequests.set(Headers.CAKE_MESSAGE, "");
        this._additionalRequests.set(Headers.SPECIAL_INSTRUCTIONS, "");
        this._additionalRequests.set(Headers.FILE_UPLOAD, [null, ""])
    }

    private initAdditionalAddOns() {
        ProductAddOns.forEach((product: IProductAddOn) => {
            this.additionalAddOns.set(product.itemName, product.defaultValue);
        })
    }

    private initContactInfo() {
        this._contactInfo.set(Headers.PICKUP_DATE, null);
        this._contactInfo.set(Headers.FIRST_NAME, "");
        this._contactInfo.set(Headers.LAST_NAME, "");
        this._contactInfo.set(Headers.EMAIL, "");
        this._contactInfo.set(Headers.PHONE_NUMBER, "");
    }

    private initConfirmationNumber() {
        let indexDiff: number = 1
        let codeLength: number = 5;
        let randomCode: string = this._helper.makeRandomID(codeLength);

        this._confirmationNumber = String(this._currentDate.getMonth() + indexDiff) + String(this._currentDate.getDate()) + randomCode;
    }

    public updateOrderCriteria(criteriaType: string, value: string | any) {
        this._orderCriteria.set(criteriaType, value);
    }

    public updateSpecialNotes(criteriaType: string, value: string) {
        this._additionalRequests.set(criteriaType, value);
    }

    public updateFileUpload(file: File, dataURL: any) {
        this.additionalRequests.set(Headers.FILE_UPLOAD, [file, dataURL]);
    }

    public updateAdditionalAddOns(itemName: string, quantity: number) {
        this._additionalAddOns.set(itemName, quantity);
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
        this.initAdditionalAddOns();
    }

    private getFileUpload() {
        let dataImage = null;
        let fileUpload = this._additionalRequests.get(Headers.FILE_UPLOAD);
        if (fileUpload[0]) {
            dataImage = fileUpload[1]
        }
        return dataImage;
    }

    private getPickupDate(): string {
        let pickupDate = this._contactInfo.get(Headers.PICKUP_DATE);
        let date = new Date(pickupDate);

        let dateString = pickupDate.toString().slice(0, 16);
        let timeString = date.toLocaleTimeString();
        let dateTimeString = dateString + " " + timeString;
        return dateTimeString;
    }

    private getFruitList(): string {
        let fruit: string[] = [];
        let selectedFruit = this._orderCriteria.get(Headers.ADD_FRUIT);
        for (const option in selectedFruit) {
            if (selectedFruit[option]) {
                fruit.push(option)
            }
        };
        return fruit.toString();
    }


    public getCakeOrderSummary() {
        if (this._isOrderingCake) {
            let description: string = "";

            let criteriaKeys = Array.from(this._orderCriteria.keys());
            for (const key of criteriaKeys) {
                if (key === Headers.ADD_FRUIT) {
                    let fruit: string = this.getFruitList();

                    if (fruit.length > 0) {
                        description += Headers.ADD_FRUIT + ": " + fruit + " | ";
                    }
                } else {
                    description += key + ": " + this._orderCriteria.get(key) + " | ";
                }
            }

            let additionalRequestKeys = Array.from(this._additionalRequests.keys());
            for (const key of additionalRequestKeys) {
                if (key !== Headers.FILE_UPLOAD) {
                    let content: string = this._additionalRequests.get(key);
                    if (content.trim() !== "") {
                        description += key + ": " + this._additionalRequests.get(key) + " | ";
                    }
                }
            }

            return description;
        }
    }

    public getItemSummary(): string {
        let description: string = "";
        let itemNameKeys = Array.from(this._additionalAddOns.keys());
        for (const item of itemNameKeys) {
            let quantity: number = this._additionalAddOns.get(item)!;
            if (quantity > 0) {
                description += item + ": " + quantity + "x | "
            }
        }
        return description;
    }

    private isOrderingItems(): boolean {
        let itemNameKeys = Array.from(this._additionalAddOns.keys());
        for (const item of itemNameKeys) {
            let quantity: number = this._additionalAddOns.get(item)!;
            if (quantity > 0) {
                return true;
            }
        }
        return false;
    }


    public getDetails(): IOrderDetails {
        let details: IOrderDetails = {
            first_name: this._contactInfo.get(Headers.FIRST_NAME),
            last_name: this._contactInfo.get(Headers.LAST_NAME),
            phone_number: this._contactInfo.get(Headers.PHONE_NUMBER),
            email: this._contactInfo.get(Headers.EMAIL),
            order_number: this._confirmationNumber,
            order_date: this._currentDate.toDateString(),
            pickup_date: this.getPickupDate(),
            total_amount: "TBD",
            is_ordering_cake: this._isOrderingCake ? NoYesOptions[1] : NoYesOptions[0],
            other_items: this.getItemSummary()

        }

        if (this.isOrderingCake) {
            details.cake_size = this._orderCriteria.get(Headers.CAKE_SIZE);
            details.cake_occasion = this._orderCriteria.get(Headers.CAKE_OCCASION);
            details.cake_filling = this._orderCriteria.get(Headers.CAKE_FILLING);
            details.cake_flavor = this._orderCriteria.get(Headers.CAKE_FLAVOR);
            details.cake_icing = this._orderCriteria.get(Headers.CAKE_ICING);
            details.fruit = this.getFruitList();
            details.colors = this._additionalRequests.get(Headers.COLOR);
            details.message = this._additionalRequests.get(Headers.CAKE_MESSAGE);
            details.instructions = this._additionalRequests.get(Headers.SPECIAL_INSTRUCTIONS);
            details.image = "";
        }
        return details;
    }

    public get orderCriteria() {
        return this._orderCriteria;
    }

    public get additionalRequests() {
        return this._additionalRequests;
    }

    public get additionalAddOns() {
        return this._additionalAddOns;
    }

    public get contactInfo() {
        return this._contactInfo;
    }

    public get earliestPickupDate() {
        return this._earliestPickupDate;
    }

    public get unavailableHours() {
        return this._unavailableHours;
    }

    public get confirmationNumber() {
        return this._confirmationNumber;
    }

    public get isOrderingCake() {
        return this._isOrderingCake;
    }

    public get noOrder(): boolean {
        return !this.isOrderingCake && !this.isOrderingItems();
    }






}