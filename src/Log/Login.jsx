import { useContext } from "react";
import { Contexts } from "../Context/Context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const notify = () => toast("Login Successful!");

    const { LoginUser } = useContext(Contexts);
    const SubmitEvent = e => {
        e.preventDefault()
        const Form = new FormData(e.currentTarget);
        const email = Form.get('email');
        const password = Form.get('password');
        LoginUser(email, password)
            .then((userCredential) => {
                notify();
                // Signed up 
                const user = userCredential.user;
                console.log('hello', user)
                // ...
            })
            .catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });

    }



    return (
        <div className="grid justify-items-center items-center py-10 px-5">
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form onSubmit={SubmitEvent} className="space-y-6" action="#">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in Admin panel </h5>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                   
                    <button type="submit"  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    <ToastContainer />

                </form>
            </div>

        </div>
    );
};

export default Login;