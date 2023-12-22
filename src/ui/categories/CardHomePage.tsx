import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Grid, IconButton, IconButtonProps, ImageListItem, Stack, Typography, styled } from "@mui/material";
import { Item } from "../../utils/Item";
import { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { Bakery } from "../../utils/data";
import teresitas from "../../assets/teresitas.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

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


export function CardHomePage(){
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Box sx={{flexGrow: 1, display: "flex", justifyContent: "center", textAlign: "center", marginBottom: 5}}>
            <Card sx={{ minWidth: "80%", maxWidth: "80%"}}>
            <CardHeader   
                title={Bakery.NAME}
                subheader={Bakery.SERVICES}
                sx={{backgroundColor: "#F5EDE673"}}
            />
            <CardMedia
                component="img"
                height="194"
                image={teresitas}
                alt={Bakery.NAME}
            />
            <CardContent>
                <Stack>
                    <Typography variant="body2" color="text.secondary">
                        <FaPhoneAlt /> {Bakery.PHONE_NUMBER}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <MdOutlineMail/> {Bakery.EMAIL}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <FaMapLocationDot/> {Bakery.LOCATION}
                    </Typography>
                </Stack>
                
            </CardContent>
            <CardActions disableSpacing sx={{backgroundColor: "#F5EDE673"}}>
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
                    <Typography paragraph> {Bakery.PRODUCTS}</Typography>
                </CardContent>
            </Collapse>
        </Card>
        </Box>
        
        
    )
}




