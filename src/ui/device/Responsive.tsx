import { useState } from "react";
import { Box, Tabs, Tab} from "@mui/material";
import CustomTabPage from "../components/CustomTabPage";
import CheckoutPage from "../pages/CheckoutPage";
import { CardHomePage } from "../pages/CardHomePage";
import ProductsPage from "../pages/ProductsPage";
import { TabLabels } from "../../utils/data"; 
import { FaHouse } from "react-icons/fa6";
import { BsCake2Fill } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";


function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
// #e1b7ed
// "#fff0db"
interface IResponsiveProp{
  onMobile: boolean
}
export default function Responsive({onMobile}: IResponsiveProp) {
    const [value, setValue] = useState(0);
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%'}}>
        <Box sx={{ borderBottom: 1,  
            borderColor: 'divider', 
            justifyContent: "center", 
            display: "flex", 
            alignItems: "center", 
            position: "sticky", 
            top: 0,
            backgroundColor: "#f5e1e8",
            minHeight: '4rem',
            zIndex: 10
            
            }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label= {onMobile ? <FaHouse/> : TabLabels.HOME} {...a11yProps(0)} sx={{color: "black"}}/>
            <Tab label= {onMobile ? <BsCake2Fill/> : TabLabels.PRODUCTS} {...a11yProps(1)} sx={{color: "black"}}/>
            <Tab label= {onMobile ? <MdShoppingCart/> : TabLabels.ORDER} {...a11yProps(2)} sx={{color: "black"}}/>
          </Tabs>
        </Box>
        <Box>
          <CustomTabPage value={value} index={0}>
            <CardHomePage/>
          </CustomTabPage>
          <CustomTabPage value={value} index={1}>
            <ProductsPage/>
          </CustomTabPage>
          <CustomTabPage value={value} index={2}>
            <CheckoutPage/>
          </CustomTabPage>
        </Box>
      </Box>
    );
  }