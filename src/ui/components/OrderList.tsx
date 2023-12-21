import {Typography} from "@mui/material"


interface IOrderListProp{
    orders: Map<string, number>
    prices: Map<string, number>
}
export default function OrderList({orders, prices}: IOrderListProp){
    
    function displayNames(){
        let orderNames = Array.from(orders.keys());
        return (
            <>
                {orderNames.map( (name) => {
                    return (
                        <Typography key={name}>{name} {orders.get(name)+"x"} {"$" + prices.get(name)} </Typography>
                    )

                })}
            
            </>
        )
       
    }

    return (
        <>
            {displayNames()}
        </>
    )

}