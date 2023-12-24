export interface IProductAddOn {
    /**
     * Name of the item or product
     */
    itemName: string;


    /**
     * Minimum quantity of this product that can be purchased. Default value is 0
     */
    minValue: number | 0;


    /**
     * Maximum quantity of this product that can be purchased
     */
    maxValue: number;

    /**
     * Default quantity of this product that can be purchased. Default should be 0
     */
    defaultValue: number;

    /**
     * URL to given image
     */
    imgURL: any;
}