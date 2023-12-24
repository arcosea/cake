import { Stack, Paper, Avatar, Typography, Button, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from "react";






interface IItemCounterProp{
    itemName: string,
    minValue: number, 
    maxValue: number,
    defaultValue: number,
    imgURL: any,
    onChange: Function,
}
export default function ItemCounter({itemName, minValue, maxValue, defaultValue, imgURL, onChange}: IItemCounterProp){

    const [count, setCount] = useState(defaultValue);
    const handleButtonCountChange = (value: number) => {
        if(value <= minValue || value > maxValue){
            setCount(minValue)
            onChange(itemName, minValue);
        } else {
            setCount(value)
            onChange(itemName, value);
        }
    }

    const handleInputCountChange = (event: any) => {
        let value = Number(event.target.value);
        handleButtonCountChange(value);
        onChange(itemName, value);
    }

    return (
        <>
            <Paper elevation={3} sx={{padding: 2, width: "100%", margin: 2}}>
                <Stack direction="row" spacing={2} sx={{justifyContent: "center"}}>
                    <Avatar alt={itemName} src={imgURL} sx={{width: "10%", height: "10%"}} />
                    <Typography sx={{width: "15%"}} fontSize={15}> {itemName} </Typography>
                    <Button
                        aria-label="reduce"
                        onClick={() => handleButtonCountChange(count - 1)}
                        sx={{width: "15%"}}
                    >
                        <RemoveIcon fontSize="small" />
                    </Button>
                    <TextField
                        label="Quantity"
                        value={count}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleInputCountChange}
                        sx={{width: "45%"}}
                    />
                    <Button
                        aria-label="increase"
                        onClick={() => handleButtonCountChange(count + 1)}
                        sx={{width: "15%"}}
                    >
                        <AddIcon fontSize="small" />
                    </Button>
                </Stack>

            </Paper>        
        </>
    )
}