import { Box, SwipeableDrawer, Typography } from "@mui/material"
import { Item } from "../../utils/Item"
import { Cakes } from "../../utils/data"
import { ListItem } from "../components/ListItem"
import { useState } from "react";
import CheckoutDrawer from "../components/CheckoutDrawer";
import OrderForm from "../components/OrderForm";
import PricingCheckout from "../categories/PricingCheckout";

export function Mobile(){
    
    return (
        <>
            <h1> Mobile</h1>
            <Box sx={{textAlign: "center", display: "flex", justifyContent: "center", position: "sticky", top: 0, zIndex: 10}}>
                <PricingCheckout />
            </Box>
            
            {/** Content */}
            <Box sx={{margin: 2}}>
                {Cakes.map((param: Item) => (
                    <ListItem
                        key={param.name}
                        name={param.name}
                        description={param.description}
                        url={param.url}
                        cost={param.cost}
                    />
                ))}
            </Box>
            
            
            {/* <CheckoutDrawer /> */}
            
           
        </>
    )
}