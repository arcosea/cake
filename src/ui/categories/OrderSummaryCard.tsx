import { Box, Stack, Card, CardHeader, CardContent, Typography, CardActions, IconButton, Tooltip} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { Headers } from "../../utils/data";
interface IOrderSummaryCardProp{
    cakeDescription?: string[] | string;
    addItems: string;
    onClick: Function
}

export default function OrderSummaryCard({cakeDescription, addItems, onClick}: IOrderSummaryCardProp){

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
                        title={Headers.CAKE}
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
                        <Tooltip title="Edit">
                            <IconButton aria-label="Edit" onClick={handleCakeEditClick}>
                                    <EditIcon />
                                </IconButton>
                        </Tooltip>

                    </CardActions>
                </Card> 
            </>
        )
    }

    function displayOtherItems(){
        return (
            <>
                <Card sx={{ maxWidth: "100%", marginBottom: 2}}>
                    <CardHeader   
                        title={Headers.ADDITIONAL_ITEMS}
                        sx={{backgroundColor: "#52a869"}}
                    />
                    
                    <CardContent>
                        <Typography> {addItems}</Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Tooltip title="Edit">
                            <IconButton aria-label="Edit" onClick={handleAddItemsEditClick}>
                                    <EditIcon />
                                </IconButton>
                        </Tooltip>
                    </CardActions>
                </Card> 
            </>
        )
        
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