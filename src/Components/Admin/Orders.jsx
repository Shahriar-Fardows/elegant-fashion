import Swal from "sweetalert2";


// eslint-disable-next-line react/prop-types
const Orders = ({ data }) => {
    // eslint-disable-next-line react/prop-types
    const { name, Number, Thana, Price, Address, DeliveryType, Title, Email, img, _id } = data;


    const deleteCard = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                fetch(`https://fetion-server.vercel.app/orders/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data, "hello");
                        // eslint-disable-next-line react/prop-types
                        if (data.deletedCount > 0) {
                            
                            return window.location.reload();
                        }



                    })
            }
            
        });
        

    }

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg h-[20rem] w-[24rem]" src={img} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{Title}</h5>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Price : {Price}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Name : {name}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Number : {Number}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Email : {Email}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Thana : {Thana}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Address : {Address}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">DeliveryType : {DeliveryType}</p>
                <div className="grid grid-cols-2 gap-5 justify-items-center">
                   
                    <button type="button" onClick={() => deleteCard(_id)} className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete Order</button>


                </div>
            </div>
        </div>
    );
};

export default Orders;