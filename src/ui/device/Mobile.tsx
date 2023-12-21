import { Box, SwipeableDrawer, Typography, Accordion, AccordionSummary, AccordionDetails, Card, CardContent,  } from "@mui/material"
import { Item } from "../../utils/Item"
import { Cakes } from "../../utils/data"
import { ItemCard } from "../components/ItemCard"
import { useState } from "react";
import CheckoutDrawer from "../components/CheckoutDrawer";
import OrderForm from "../components/OrderForm";
import PricingCheckout from "../categories/PricingCheckout";
import { OrderManager } from "../../utils/OrderManager";
import { useEffect } from "react"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OrderConfirmationStepper from '../components/OrderConfirmationStepper';


let orderManager: OrderManager = new OrderManager();
export default function Mobile (){
    const [order, setOrder] = useState<Map<string, number>>()

    const handleItemCardChange = (itemName: string, quantity: number) => {
        orderManager.updateOrder(itemName, quantity);
        setExpandAccordion(false)
        setOrder(orderManager.orders);
    }

    const [expandAccordion, setExpandAccordion] = useState(false); 
    const toggleAccordion = (isExpanded: boolean) => {
        setExpandAccordion(isExpanded);
    }
    
    return (
        <>
            <Box sx={{marginTop: 0, padding: 0, marginBottom: 0, textAlign: "center", display: "flex", justifyContent: "center", position: "sticky", top: 0, zIndex: 10}}>
                <Box sx={{ display:"block", margin:"auto", position:"absolute", left:0, right:0}}>
                    <Accordion  expanded={expandAccordion} onChange={(event, isExpanded) => toggleAccordion(isExpanded)}>
                    {/* sx={{backgroundColor: "#ffffff00"}} */}

                    {/* This is the header/text on the dropdown */}
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls = "pricing-content" id = "pricing-header">
                        <Typography variant="button"> Place Order </Typography>
                    </AccordionSummary>

                    {/* This is the content of the accordion */}
                    <AccordionDetails>
                        <Card
                            sx={{
                            m: 2,
                            p: 2,
                            backgroundColor: "#F5EDE673",
                            }}
                        >
                            <Box sx={{ margin: '0 auto' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <OrderConfirmationStepper 
                                    orders={orderManager.orders}
                                    prices={orderManager.prices}
                                />
                                {/* <OrderForm /> */}
                            </CardContent>
                            </Box>
                        </Card>
                    </AccordionDetails>
                    </Accordion>
                </Box>
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