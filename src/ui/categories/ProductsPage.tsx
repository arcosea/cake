import { Box } from "@mui/material";
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
            <Box sx={{marginTop: 0}}>
                {Cakes.map((param: Item) => (
                    <CardItem
                        key={param.name}
                        name={param.name}
                        description={param.description}
                        url={param.url}
                        cost={param.cost}
                    />
                ))}
            </Box>
        </>
    )


}