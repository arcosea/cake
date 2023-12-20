import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { GrSubtractCircle } from "react-icons/gr";
import { IoIosAddCircleOutline } from "react-icons/io"

export default function ItemCounter(){
    const [count, setCount] = useState(0);

    const updateCount = (value: number) => {
        if(value <= 0){
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
                    onClick={() => updateCount(count - 1)}
                    size="small"
                    >
                    <GrSubtractCircle style={{ color: 'red', fontSize: "16px"}} />
                </Button>
                <TextField
                    id="outlined-number"
                    label="Quantity"
                    type="number"
                    value={count}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button
                    variant="outlined" color="success" 
                    onClick={() => updateCount(count + 1)}
                    size="small"
                    >
                    <IoIosAddCircleOutline style={{ color: 'green', fontSize: "16px"}} />
                </Button>
            </Stack>
        
        </>
    )
}