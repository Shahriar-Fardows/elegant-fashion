import { useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
    const [services , setService] = useState([]);

    useEffect(()=>{
        fetch('https://fetion-server.vercel.app/cardInfo')
        .then(res => res.json())
        .then(data => setService(data))
    },[])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 px-5 gap-5">
            {
                services.map(data => <Card key={data._id} data={data}  />)
            }
        </div>
    );
};

export default Cards;