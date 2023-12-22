import { Box } from "@mui/material";
import { Item } from "../../utils/Item";
import { Cakes } from "../../utils/data";
import { CardItem } from "../components/CardItem";



export default function ProductsPage(){



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