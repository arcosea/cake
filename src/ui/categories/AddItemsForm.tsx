import { Box, Grid, Paper, Typography } from "@mui/material"
import { ProductAddOns } from "../../utils/data"
import { IProductAddOn } from "../../utils/IProductAddOn"
import ItemCounter from "../components/ItemCounter"


interface IAddItemsFormProp{
    values: Map<string, number>
    onChange: Function
}
export default function AddItemsForm({values, onChange}: IAddItemsFormProp){

    const handleItemCounterChange = (itemName: string, quantity: number) => {
        onChange(itemName, quantity);
    }

    function displayContent(){
        return (
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: "center"}}>   
                {ProductAddOns.map((param: IProductAddOn) => {
                    return (
                        <ItemCounter key={param.itemName} itemName={param.itemName} minValue={param.minValue} maxValue={param.maxValue} defaultValue={values.get(param.itemName)!} imgURL={param.imgURL} onChange={handleItemCounterChange} />
                    )
                })}
            </Box>      
        )
    }

    return (
        <>
            <Box sx={{width: "90%", marginLeft: "5%"}}>
                <Paper sx={{marginBottom: 2, border: 1, padding: 2}}>
                    <Typography sx={{backgroundColor: "#1976d2", marginBottom: 3, color: "whitesmoke"}}> Add Additional Items </Typography>
                    {displayContent()}
                </Paper>
            </Box>
            
        </>


    )

}