import { Link } from "react-router";



const NotFound = () => {


    return (
        <div className="text-center">
        
        <img className="max-w-96 mx-auto" src="/public/Assets/notfountpage.jpg" alt="not" />
               
      <p>Page Not Found</p>


          <Link to='/'> <button className="text-2xl my-7 font-semibold text-black bg-teal-500 p-1 rounded-xl">Home Page</button> </Link>  

        </div>
    );
};

export default NotFound;