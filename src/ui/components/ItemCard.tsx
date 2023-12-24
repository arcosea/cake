import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Grid, IconButton, IconButtonProps, ImageListItem, Stack, Typography, styled } from "@mui/material";
import { IProduct } from "../../utils/IProduct";
import { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import AddToCart from "./AddToCart";
import ItemSpinBox from "./ItemSpinBox";


interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}
const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
    })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
}));

interface IItemCardProp {
    name: string,
    cost: number,
    url: string,
    description: string,
    onChange: Function
}
export function ItemCard({name, cost, url, description, onChange}: IItemCardProp){

    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleAddToCartClick = (name: string, cost: number, url: string, description: string) => {
        console.log(name, cost, url, description)
    }

    const handleItemQuantityChange = (item: string, quantity: number) =>{
        onChange(item, quantity);
    }
   

    return (
        <Box sx={{flexGrow: 1, display: "flex", justifyContent: "center", textAlign: "center", marginBottom: 5}}>
            <Card sx={{ maxWidth: "80%"}}>
            <CardHeader   
                title={name}
                subheader={cost}
            />
            <CardMedia
                component="img"
                height="194"
                image={url}
                alt={description}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ItemSpinBox 
                    itemName={name}
                    minValue={0}
                    maxValue={100}
                    defaultValue={0}
                    onChange={handleItemQuantityChange}
                
                />
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <MdExpandMore />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Description:</Typography>
                    <Typography paragraph>
                        {description}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
        </Box>
        
        
    )
}


