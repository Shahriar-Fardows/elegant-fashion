import Swal from "sweetalert2";
const Post = () => {

    const AddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const price = form.Price.value;
        const description = form.textarea.value;
        const image = form.image.files[0];

        const data = new FormData();
        data.append('image', image)

        fetch('https://api.imgbb.com/1/upload?key=6bc2a937676ebe375ce738534d44e670', {
            method: 'POST',
            body: data,
        })
            .then(res => res.json())
            .then(data => {
                const productData = {
                    title,
                    price,
                    description,
                    image: data.data.url,
                }

                fetch(`https://fetion-server.vercel.app/cardInfo`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(productData)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'Product add successFully',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            })
                        }
                    }
                    )
            })
        form.reset()
    }
        return (
            <div className="max-w-6xl mx-auto">
                <form onSubmit={AddProduct} className="max-w-6xl mx-auto">
                    <div className="grid gap-6 my-6 md:grid-cols-2 mx-5 ">
                        
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Title</label>
                            <input type="text" name='title' id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Title" required />
                        </div>
                       
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                            <input type="number" name='Price' id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Price" required />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Img</label>
                            <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" name="image" id="photo" required type="file" accept="image/*" />
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                        </div>

                    </div>
                    <div className="m-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short description</label>
                        <textarea name='textarea' id="message" rows="4" required className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Short description..."></textarea>
                        <br />
                        <input type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value="Add Product" />
                    </div>

                </form>
                {/* <Post/> */}
            </div>
        );
    };

    export default Post;