import { Box } from "@mui/material"
import { Item } from "../../utils/Item"
import { Cakes } from "../../utils/data"
import { ListItem } from "../components/ListItem"

export function Mobile(){

    return (
        <>
            <h1> Mobile</h1>
            
                {Cakes.map((param: Item) => (
                    <ListItem
                        key={param.name}
                        name={param.name}
                        description={param.description}
                        url={param.url}
                        cost={param.cost}
                    />
                ))}
        
            
        </>
    )
}