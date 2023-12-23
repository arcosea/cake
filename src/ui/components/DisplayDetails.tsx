import { Box, Typography } from "@mui/material"





interface IDisplayDetails{
    details: Map<string, any>
}
export default function DisplayDetails({details}: IDisplayDetails){
    let keys = Array.from(details.keys());

    return (
        <>
            <Box>
                {keys.map((key: any) => {
                    return <Typography> {key}: { details.get(key)}</Typography>
                })}
            </Box>
        </>
    )
}