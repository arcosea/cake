import {Typography} from "@mui/material"


interface IOrderListProp{
    orders: Map<string, number>
    prices: Map<string, number>
}
export default function OrderList({orders, prices}: IOrderListProp){
    function displayNames(){
        const itemNames = orders.keys();

        for(let name in itemNames){
            return (
                <Typography>
                    {name } + {orders.get(name)} + {"x"} + { prices.get(name)}
                </Typography>
            )
        }
    }

    return (
        <>
            {displayNames()}
        </>
    )

}