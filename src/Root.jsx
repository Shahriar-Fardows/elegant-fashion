import { Outlet } from "react-router-dom";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";

const Root = () => {
    return (
        <div>
            <Header/>
            <div className=' min-h-screen z-10'>
           <Outlet />
           </div>
           <div className="z-50">
            <Footer/>
           </div>
        </div>
    );
};

export default Root;