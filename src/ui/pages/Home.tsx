import {useEffect, useState} from "react"
import {Typography, ImageListItem, ImageListItemBar, Card, CardMedia, Box, CardContent, CardHeader, Grid, Stack, Theme, Divider, Link} from "@mui/material";
import { Bakery, Cakes, Hours } from "../../utils/data";
import { IProduct } from "../../utils/IProduct";
import { CardItem } from "../components/CardItem";
import c5 from "../../assets/c5.jpg";
import c6 from "../../assets/c6.jpg"
import c7 from "../../assets/c7.jpg"
import c8 from "../../assets/c8.jpg"
import c9 from "../../assets/c9.jpg"
import c10 from "../../assets/c10.jpg"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


export default function Home(){
    // Auto scrolls to the top after rendering
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const contentStyles = {
        width: '100%',
        height: '300px', 
        bgcolor: 'white',
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
    }

    const imageStyles = {
        width: '100%', 
        height: '300px'
    }

    let hours = Object.values(Hours);
    

    return (
        <>
            <Box sx={{flexGrow: 1, display: "flex", justifyContent: "center", textAlign: "center", marginBottom: 5}}>
                <Card sx={{ minWidth: "80%", maxWidth: "90%"}}>
                    <CardHeader   
                        title={Bakery.NAME}
                        subheader={Bakery.SERVICES}
                        sx={{backgroundColor: "#F5EDE673"}}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={c5}
                        alt={""}
                    />
                </Card>
            </Box>

            <Grid container spacing={2}>
                <Grid  item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <img src={c8}  alt="Sample" style={imageStyles} />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Box sx={contentStyles} >
                        <Stack>
                            <Typography variant="h4" > Contact Information </Typography>
                            <Divider />
                            <Typography> {Bakery.LOCATION} </Typography>
                            <Typography> {Bakery.EMAIL} </Typography>
                            <Typography> {Bakery.PHONE_NUMBER} </Typography>
                            
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Box sx={contentStyles} >
                        <Stack>
                            <Typography variant="h4" > Hours</Typography>
                            <Divider />
                            {hours.map( (hour: any) => {
                                return <Typography> {hour} </Typography>
                            })}
                        </Stack>
                    </Box>
                </Grid>
                <Grid  item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <img src={c7}  alt="Sample" style={imageStyles} />
                </Grid>
                <Grid  item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <img src={c9}  alt="Sample" style={imageStyles} />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Box sx={contentStyles} >
                        <Stack>
                            <Typography variant="h4" > Follow Us!!</Typography>
                            <Divider />
                            <Stack direction="row">
                                <FacebookIcon />
                                <Link href="#">Facebook</Link>
                            </Stack>
                            <Stack direction="row">
                                <InstagramIcon />
                                <Link href="#">Instagram</Link>
                            </Stack>
                            
                            
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
            
        </>
    )
}

