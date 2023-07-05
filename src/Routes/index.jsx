import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../Screens/404";
import Cart from "../Screens/Cart";
import Details from "../Screens/Details";
import Home from "../Screens/Home";

export const Routes = createBrowserRouter([
    {
        path:'/',
        element: <Home/>
    },
    {
        path:'/Details',
        element: <Details/>
    },
    {
        path: '/Cart',
        element: <Cart/>
    },
    {
        path:'*',
        element: <PageNotFound/>
    }
])