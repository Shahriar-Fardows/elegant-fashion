import OrderList from "./OrderList";
import Post from "./Post";

 
const Admin = () => {
    return (
        <div>
           <Post/><br /><br /><br />
           <div className="border-dashed border-2 border-sky-500">
            <h1 className="text-center text-4xl  py-10">অর্ডার করা পণ্য তালিকা</h1>
           <OrderList/>
           </div>
        </div>
    );
};

export default Admin;