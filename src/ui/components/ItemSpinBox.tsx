import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { GrSubtractCircle } from "react-icons/gr";
import { IoIosAddCircleOutline } from "react-icons/io"


interface IItemSpinBoxProp{
    itemName: string,
    minValue: number, 
    maxValue: number,
    defaultValue: number,
    onChange: Function,
}
export default function ItemSpinBox({itemName, minValue, maxValue, defaultValue, onChange}: IItemSpinBoxProp){

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
        handleButtonCountChange(value)
    }

    return (
        <>
            <Stack direction="row" spacing={2}>
                <Button
                    variant="outlined" color="error" 
                    onClick={() => handleButtonCountChange(count - 1)}
                    size="small"
                    >
                    <GrSubtractCircle style={{ color: 'red', fontSize: "16px"}} />
                </Button>
                <TextField
                    label="Quantity"
                    value={count}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleInputCountChange}
                />
                <Button
                    variant="outlined" color="success" 
                    onClick={() => handleButtonCountChange(count + 1)}
                    size="small"
                    >
                    <IoIosAddCircleOutline style={{ color: 'green', fontSize: "16px"}} />
                </Button>
            </Stack>
        
        </>
    )
}