import { Box, Stack, Card, CardHeader, CardContent, Typography, CardActions, IconButton} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { Headers } from "../../utils/data";
interface IOrderSummaryCardProp{
    cakeTitle?: string,
    cakeDescription?: string[] | string;
    addItems: Map<string, number>;
    onClick: Function
}

export default function OrderSummaryCard({cakeTitle, cakeDescription, addItems, onClick}: IOrderSummaryCardProp){

    const handleCakeEditClick = () => {
        onClick(Headers.CAKE)
    }

    const handleAddItemsEditClick = () => {
        onClick(Headers.ADDITIONAL_ITEMS)
    }

    function displayCakeCard(){
        return (
            <>
                <Card sx={{ maxWidth: "100%", marginBottom: 2}}>
                    <CardHeader   
                        title={cakeTitle}
                        sx={{backgroundColor: "#52a869"}}
                    />
                    
                    <CardContent>
                        {/* {cakeDescription?.map((item, index) => (
                            <Typography key={index} variant="body1">
                                {item} {" | "}
                            </Typography>
                        ))} */}

                        <Typography> {cakeDescription}</Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="Edit" onClick={handleCakeEditClick}>
                            <EditIcon />
                        </IconButton>
                    </CardActions>
                </Card> 
            </>
        )
    }

    function displayOtherItems(){
        if(addItems.size > 0){
            return (
                <>
                    <Card sx={{ maxWidth: "100%", }}>
                        <CardHeader   
                            title={Headers.ADDITIONAL_ITEMS}
                            sx={{backgroundColor: "#52a869"}}
                        />
                        
                        <CardContent>
                            {Array.from(addItems)?.map(([itemName, quantity]) => (
                                <Typography key={itemName + quantity}> {itemName}: {quantity}x </Typography>
                            ))}
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="Edit" onClick={handleAddItemsEditClick}>
                                <EditIcon />
                            </IconButton>
                        </CardActions>
                    </Card> 
                </>
            )
        }
        
    }


    return (
        <>
            <Stack sx={{margin: 2}}>
                {displayCakeCard()}
                {displayOtherItems()}
            </Stack>

        </>
    )
}