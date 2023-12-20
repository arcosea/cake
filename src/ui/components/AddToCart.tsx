import { Box, Button } from "@mui/material";
import { FaCartPlus } from "react-icons/fa";


export default function AddToCart(){

    const handleClick = () => {
        
    }
    
    return (
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Button 
                fullWidth={true}
                variant="contained" 
                color="success"
                onClick={handleClick}
                sx={{textAlign: "center", margin: "auto"}}
            >
                <FaCartPlus />
            </Button>
        </Box>
    );
}