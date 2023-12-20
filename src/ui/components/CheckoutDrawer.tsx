import { Box, Button, Drawer, Stack, SwipeableDrawer, Typography, makeStyles } from "@mui/material";
import { useState } from "react";
import { GrPrevious } from "react-icons/gr";
import MenuIcon from "@mui/icons-material/Menu";

const drawerBleeding = 70;
const drawerBuffer = 50;

export default function CheckoutDrawer(){

    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event && event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setDrawerOpen(open);
    };


    return (
        <Box sx={{textAlign: "center", display: "flex", justifyContent: "center", position: "sticky", bottom: 0, zIndex: 10}}>
            <SwipeableDrawer
                anchor="bottom"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <div
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
                >
                    <Typography variant="body1" sx={{ padding: '16px'}}>
                        Hello world
                    </Typography>
                    
                </div>
            </SwipeableDrawer>

            <Typography sx={{minHeight: "20%"}}
            >
                <MenuIcon />
                Place Order
                {/* <button onClick={() => setDrawerOpen(true)}>Open Drawer</button> */}
            </Typography>    
        </Box>
    )
}