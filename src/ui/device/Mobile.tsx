import { Box, SwipeableDrawer, Typography } from "@mui/material"
import { Item } from "../../utils/Item"
import { Cakes } from "../../utils/data"
import { ItemCard } from "../components/ItemCard"
import { useState } from "react";
import CheckoutDrawer from "../components/CheckoutDrawer";
import OrderForm from "../components/OrderForm";
import PricingCheckout from "../categories/PricingCheckout";
import { OrderManager } from "../../utils/OrderManager";


interface IMobileProp{
    orders: Map<string, number>
    prices: Map<string, number>
    onChange: Function
}

export default function Mobile ({orders, prices, onChange} : IMobileProp){

    const handleItemCardChange = (itemName: string, quantity: number) => {
        onChange(itemName, quantity)
    }
    
    return (
        <>
            <Box sx={{marginTop: 0, padding: 0, marginBottom: 0, textAlign: "center", display: "flex", justifyContent: "center", position: "sticky", top: 0, zIndex: 10}}>
                <PricingCheckout 
                    orders={orders}
                    prices={prices}
                />
            </Box>
            
            {/** Content */}
            <Box sx={{marginTop: 0}}>
                {Cakes.map((param: Item) => (
                    <ItemCard
                        key={param.name}
                        name={param.name}
                        description={param.description}
                        url={param.url}
                        cost={param.cost}
                        onChange={handleItemCardChange}
                    />
                ))}
            </Box>
            
            
            {/* <CheckoutDrawer /> */}
            
           
        </>
    )
}