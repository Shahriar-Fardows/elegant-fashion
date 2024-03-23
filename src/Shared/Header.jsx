import { Link } from 'react-router-dom';
import img from '../../public/Black & White Classic Circular Y2K Fashion Logo.png'
import { useContext } from 'react';
import { Contexts } from '../Context/Context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Header = () => {
    const notify = () => toast("Logout Successful!");

    const { logOut, user } = useContext(Contexts);

    const Click = () => {
        notify();
        logOut();
    }

    return (

        <div>

            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={img} className="h-8" alt=" Logo" />
                    </a>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">


                        {
                            user ?
                                <div className='grid grid-cols-2 gap-5'>
                                    <button onClick={Click} className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Logout</button>
                                    <Link className="text-sm  text-blue-600 dark:text-blue-500 hover:underline" to='/admin'>Admin</Link>
                                </div> : <Link to='/login' className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</Link>
                        }
                        <ToastContainer />
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <a href="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="/" className="text-gray-900 dark:text-white hover:underline"></a>
                            </li>
                            <li>
                                <a href="/" className="text-gray-900 dark:text-white hover:underline"></a>
                            </li>
                            <li>
                                <a href="/" className="text-gray-900 dark:text-white hover:underline"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default Header;