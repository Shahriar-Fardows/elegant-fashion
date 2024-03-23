import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const From = () => {
    const loaderData = useLoaderData();
    const { title, price, image } = loaderData;
    const notify = () => toast("🦄 successfully your order confirm !");

    const SubmitEvent = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const Form = new FormData(e.currentTarget);
        const name = Form.get('name');
        const thana = Form.get('thana');
        const Number = Form.get('mobileNumber');
        const email = Form.get('email');
        const address = Form.get('address');
        const delivery = 'cash on delivery';

        const orderInfo = {
            name: name,
            Thana: thana,
            Number: Number,
            Email: email,
            Address: address,
            DeliveryType: delivery,
            img: image,
            Price: price,
            Title: title
        }


        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })

            .then(res => res.json())
            .then(data => data)



    }

    return (
        <div className="w-full  max-w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <span className="text-3xl text-center font-bold text-gray-500 dark:text-white">অর্ডার করতে ফরমটি পূরণ করুন</span><br /><br />
            <form onSubmit={SubmitEvent}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name *</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" />
                    </div>

                    <div>
                        <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Thana / District *</label>
                        <input type="text" name="thana" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Shobujbag" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile Number *</label>
                        <input type="tel" id="phone" name="mobileNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0123-4567-678" pattern="[0-9]{11}" />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                        <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" />
                    </div>
                    <div>

                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Address *</label>
                        <textarea id="message" rows="4" name="address" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                    </div>
                    <div className="container mx-auto px-4 py-8">
                        <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center">
                            <h2 name="delivery" className="text-xl font-semibold mb-2">Cash on Delivery</h2>
                            <p className="text-gray-700">Pay with cash upon delivery.</p>
                        </div>
                    </div>
                </div>


                <button type="submit" onClick={notify} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">  অর্ডার কনফার্ম করুন  999.00৳ </button>
                <ToastContainer />
            </form>


        </div>

    );
};

export default From;