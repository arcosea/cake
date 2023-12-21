import { useState } from 'react';
import { Accordion, Box, Typography, AccordionSummary, AccordionDetails, Card, CardContent} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OrderForm from '../components/OrderForm';
import OrderConfirmationStepper from '../components/OrderConfirmationStepper';

export default function PricingCheckout(){
    const [expandAccordion, setExpandAccordion] = useState(false); 
    const toggleAccordion = (isExpanded: boolean) => {
        setExpandAccordion(isExpanded);
    }
    return (
        <>
          

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
                            <OrderConfirmationStepper />
                            {/* <OrderForm /> */}
                        </CardContent>
                        </Box>
                    </Card>
                </AccordionDetails>
                </Accordion>
            </Box>
            
        </>
    )
}