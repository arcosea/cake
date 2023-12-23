import { Box, Grid } from "@mui/material";
import { Item } from "../../utils/Item";
import { Cakes } from "../../utils/data";
import { CardItem } from "../components/CardItem";
import { useEffect } from "react";



export default function ProductsPage(){

    // Auto scrolls to the top after rendering
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <Box sx={{ marginTop: 0 }}>
                <Grid container spacing={2}>
                    {Cakes.map((param: Item) => (
                        <Grid item key={param.name} xs={12} sm={6} md={6} lg={6} xl={6}>
                            <CardItem
                            name={param.name}
                            description={param.description}
                            url={param.url}
                            cost={param.cost}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )


}