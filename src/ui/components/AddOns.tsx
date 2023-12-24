import { Box, Paper, Typography } from "@mui/material"
import { ProductAddOns } from "../../utils/data"
import ItemCounter from "./ItemCounter"
import { IProductAddOn } from "../../utils/IProductAddOn"

interface IAddOnsProp{
    onChange: Function
}
export default function AddOns({onChange}: IAddOnsProp){

    const handleItemCounterChange = (itemName: string, quantity: number) => {
        onChange(itemName, quantity);
    }

    function displayContent(){
        return (
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>   
                {ProductAddOns.map((param: IProductAddOn) => {
                    return (
                        <ItemCounter key={param.itemName} itemName={param.itemName} minValue={param.minValue} maxValue={param.maxValue} defaultValue={param.defaultValue} imgURL={param.imgURL} onChange={handleItemCounterChange} />
                    )
                })}
            </Box>
            
        )
    }
    return (
        <>
            <Paper sx={{marginBottom: 2, border: 1, padding: 2}}>
                <Typography sx={{backgroundColor: "#1976d2", marginBottom: 3, color: "whitesmoke"}}> Add Additional Items </Typography>
                {displayContent()}
            </Paper>
        </>


    )

}