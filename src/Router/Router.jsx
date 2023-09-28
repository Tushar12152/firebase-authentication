import { createBrowserRouter } from "react-router-dom";
import Header from "../component/header/header";
import LogIn from "../component/Login/LogIn";
import Home from "../component/Home/Home";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Header></Header>,
        children:[

            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            }
        ]
    }
])

export default Router;