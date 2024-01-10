import {useEffect, useState} from "react"
import {Typography, ImageListItem, ImageListItemBar, Card, CardMedia, Box, CardContent, CardHeader, Grid, Stack, Theme, Divider, Link, Button} from "@mui/material";
import { Bakery, BakeryHeaders, Cakes, Hours, Links } from "../../utils/data";
import { IProduct } from "../../utils/IProduct";
import { CardItem } from "../components/CardItem";
import c0 from "../../assets/c0.jpg";
import c5 from "../../assets/c5.jpg";
import c6 from "../../assets/c6.jpg"
import c7 from "../../assets/c7.jpg"
import c8 from "../../assets/c8.jpg"
import c9 from "../../assets/c9.jpg"
import c10 from "../../assets/c10.jpg"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";


interface IHomePage{
    onClick: Function
}
export default function HomePage({onClick} : IHomePage){
    const hours = Object.values(Hours);
    
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

    const handleOrderClick = () => {
        onClick(BakeryHeaders.PLACE_ORDER)
    }

    const handleWorkClick = () => {
        onClick(BakeryHeaders.VIEW_WORK)
    }
    

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

            <Box sx={{width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Button onClick={handleOrderClick}  sx={{border: 1, marginBottom: 2, color: "green"}} > 
                    { BakeryHeaders.PLACE_ORDER} 
                </Button>
            </Box>
            <Divider />

            <Grid container spacing={2} sx={{marginTop: 2}}>
                <Grid  item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <img src={c7}  alt="Sample" style={imageStyles} />
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <Box sx={contentStyles} >
                        <Stack>
                            <Typography variant="h4" > {BakeryHeaders.INFO} </Typography>
                            <Divider />
                            <Typography sx={{marginTop: 1}}> 
                                <SiGooglemaps style={{color: "#34A853"}}/> 
                                <Link href={Links.LOCATION} underline="hover"> {Bakery.LOCATION}</Link> 
                            </Typography>
                            <Typography sx={{marginTop: 1}}> <MdOutlineMail style={{color: "#EA4335"}}/> {Bakery.EMAIL} </Typography>
                            <Typography sx={{marginTop: 1}}> <FaPhoneAlt style={{color: "#4285F4"}}/> {Bakery.PHONE_NUMBER} </Typography>
                            
                        </Stack>
                    </Box>
                </Grid>
                <Grid  item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <img src={c10}  alt="Sample" style={imageStyles} />
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <Box sx={contentStyles} >
                        <Stack>
                            <Typography variant="h4" > {BakeryHeaders.HOURS} </Typography>
                            <Divider />
                            {hours.map( (hour: any) => {
                                return <Typography sx={{marginTop: 1}}> {hour} </Typography>
                            })}
                        </Stack>
                    </Box>
                </Grid>
                <Grid  item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <img src={c9}  alt="Sample" style={imageStyles} />
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <Box sx={contentStyles} >
                        <Stack>
                            <Typography variant="h4" > {BakeryHeaders.SOCIALS}</Typography>
                            <Divider />
                            <Stack direction="row" sx={{marginTop: 2}}>
                                <FacebookIcon style={{color: "#385898"}}/>
                                <Link href={Links.FACEBOOK} underline="hover" > {BakeryHeaders.FACEBOOK} </Link>
                            </Stack>
                            <Stack direction="row" sx={{marginTop: 2}}>
                            <InstagramIcon style={{color: "blueviolet"}}/>
                                <Link href={Links.INSTAGRAM} underline="hover"> {BakeryHeaders.INSTAGRAM} </Link>
                            </Stack>
                        </Stack>
                    </Box>
                </Grid>
                <Grid  item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <img src={c8}  alt="Sample" style={imageStyles} />
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <Box sx={contentStyles} >
                        <Stack sx={{padding: 3}}>
                            <Typography variant="h4" > {BakeryHeaders.PRODUCTS} </Typography>
                            <Divider />
                            <Typography sx={{marginTop: 2}}>{Bakery.PRODUCTS} </Typography>
                            <Button onClick={handleWorkClick} sx={{border: 1, marginTop: 2}} > 
                                { BakeryHeaders.VIEW_WORK} 
                            </Button>
                        </Stack>
                    </Box>
                </Grid>
                <Grid  item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <img src={c6}  alt="Sample" style={imageStyles} />
                </Grid>
            </Grid>
            
        </>
    )
}

