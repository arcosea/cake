export interface IProduct {

    /**
     * Name of the item
     */
    name: string

    /**
     * Price of the item in USD
     */
    cost: number

    /**
     * Description or notes related to item
     */
    description: string

    /**
     * URL of image
     */
    url?: string | any

    /**
     * Additional notes related to order request
     */
    notes?: string

    /**
     * Number of items to be ordered
     */
    quantity?: number
}