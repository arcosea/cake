import { useState } from "react";
import { Box, Tabs, Tab} from "@mui/material";
import CustomTabPage from "../components/CustomTabPage";
import OrderForm from "../components/OrderForm";
import CheckoutStepper from "../categories/CheckoutStepper";
import { CardHomePage } from "../categories/CardHomePage";
import ProductsPage from "../categories/ProductsPage";


function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Responsive() {
    const [value, setValue] = useState(0);
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', justifyContent: "center", display: "flex", alignItems: "center"}}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Home" {...a11yProps(0)} />
            <Tab label="Cakes" {...a11yProps(1)} />
            <Tab label="Place Order" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPage value={value} index={0}>
          <CardHomePage/>
        </CustomTabPage>
        <CustomTabPage value={value} index={1}>
          <ProductsPage/>
        </CustomTabPage>
        <CustomTabPage value={value} index={2}>
          <CheckoutStepper/>
        </CustomTabPage>
      </Box>
    );
  }