import { useLoaderData } from "react-router-dom";

import From from "../OrderFrom/From";

const CardInfo = () => {
    const loaderData = useLoaderData();
    const { price, description, title, image } = loaderData;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 py-5 px-5 gap-5">
            <img className="h-auto max-w-full" src={image} alt="" />
            <div>

                <span className="text-3xl font-bold text-gray-500 dark:text-white">{title}</span><br /><br />
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Price : ৳{price}</h1>
                <br />
                <div>
                    <h2 className="text-2xl text-lime-400 font-extrabold dark:text-white">Description:</h2><br />
                    <p className="mb-3 text-gray-500 dark:text-gray-400">{description}</p>
                </div><br />

                
                <From />

            </div>
        </div>
    );
};

export default CardInfo;