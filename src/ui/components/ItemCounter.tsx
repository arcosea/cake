import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { GrSubtractCircle } from "react-icons/gr";
import { IoIosAddCircleOutline } from "react-icons/io"

export default function ItemCounter(){
    const minCount: number = 0;
    const maxCount: number = 100;

    const [count, setCount] = useState(0);
    const handleButtonCountChange = (value: number) => {
        if(value <= 0){
            setCount(0)
        } else {
            setCount(value)
        }
    }

    const handleInputCountChange = (event: any) => {
        let value = Number(event.target.value);
        if(!value || value <= minCount || value > maxCount){
            setCount(0)
        } else {
            setCount(value)
        }
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