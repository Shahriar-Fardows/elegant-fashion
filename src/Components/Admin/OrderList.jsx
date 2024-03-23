import { useEffect, useState } from "react";
import Orders from "./Orders";

const OrderList = () => {
    const [services, setService] = useState([]);

    useEffect(() => {
        fetch('https://fetion-server.vercel.app/orders')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-5  py-5 px-5 ">
            {
                services.map(data => <Orders key={data._id} data={data}  />)
            }
        </div>
    );
};

export default OrderList;