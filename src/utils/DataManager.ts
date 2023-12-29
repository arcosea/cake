import { CakePeopleSize, CakeFillings, CakeFlavors, CakeFruit, Headers, Genders, NoYesOptions, CakeOccasions, ProductAddOns, CakeIcing } from "./data";
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

        // this._confirmationNumber = String(this._currentDate.$M + indexDiff) + String(this._currentDate.$D) + randomCode;
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

    public orderDetails() {
        let details: Map<string, any> = new Map();
        if (this._isOrderingCake) {
            details.set(Headers.ORDERING_A_CAKE, NoYesOptions[1]);
            details.set(Headers.CAKE_SIZE, this._orderCriteria.get(Headers.CAKE_SIZE));
            details.set(Headers.CAKE_OCCASION, this._orderCriteria.get(Headers.CAKE_OCCASION))
            details.set(Headers.CAKE_FILLING, this._orderCriteria.get(Headers.CAKE_FILLING));
            details.set(Headers.CAKE_FLAVOR, this._orderCriteria.get(Headers.CAKE_FLAVOR));

            let fruit: string[] = [];
            let selectedFruit = this._orderCriteria.get(Headers.ADD_FRUIT);
            for (const option in selectedFruit) {
                if (selectedFruit[option]) {
                    fruit.push(option)
                }
            };
            details.set(Headers.ADD_FRUIT, fruit.toString());

            // details.set(Headers.GENDER, this._orderCriteria.get(Headers.GENDER));
            details.set(Headers.SPECIAL_INSTRUCTIONS, this._additionalRequests.get(Headers.SPECIAL_INSTRUCTIONS));
        } else {
            details.set(Headers.ORDERING_A_CAKE, NoYesOptions[0]);
        }


        return details;
    }

    public getCakeOrderTitle() {
        if (this._isOrderingCake) {
            let title: string = this._orderCriteria.get(Headers.CAKE_OCCASION) + " " + Headers.CAKE;
            return title;
        }
    }
    public getCakeOrderSummary() {
        if (this._isOrderingCake) {
            let description: string = "";

            let criteriaKeys = Array.from(this._orderCriteria.keys());
            for (const key of criteriaKeys) {
                if (key === Headers.ADD_FRUIT) {
                    let fruit: string[] = [];
                    let selectedFruit = this._orderCriteria.get(Headers.ADD_FRUIT);
                    for (const option in selectedFruit) {
                        if (selectedFruit[option]) {
                            fruit.push(option)
                        }
                    };

                    if (fruit.length > 0) {
                        description += Headers.ADD_FRUIT + ": " + fruit.toString() + " | ";
                    }
                } else {
                    description += key + ": " + this._orderCriteria.get(key) + " | ";
                }
            }

            let additionalRequestKeys = Array.from(this._additionalRequests.keys());
            for (const key of additionalRequestKeys) {
                if (key !== Headers.FILE_UPLOAD) {
                    description += key + ": " + this._additionalRequests.get(key) + " | ";
                }
            }

            return description;
        }
    }

    public getItemSummary() {
        let description: string = "";
        let itemNameKeys = Array.from(this._additionalAddOns.keys());
        for (const item of itemNameKeys) {
            let quantity: number = this._additionalAddOns.get(item)!;
            if (quantity > 0) {
                description += item + ": " + quantity + "x | "
            }
        }

        if (description === "") {
            description = "NA"
        }
        return description;
    }

    public getAdditionalItemOrderSummary() {
        let details: Map<string, number> = new Map();
        ProductAddOns.forEach((product: IProductAddOn) => {
            let quantity: number = this.additionalAddOns.get(product.itemName)!;

            if (quantity > 0) {
                details.set(product.itemName, quantity);
            }
        });

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




}