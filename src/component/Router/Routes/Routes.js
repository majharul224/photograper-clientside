import React from 'react';
import Main from '../../LayOut/Main';
import Blogs from '../../Pages/Blogs/Blogs';
import AddReviwes from '../../Pages/CheckOut/AddReviwes';
import CheckOut from '../../Pages/CheckOut/CheckOut';
import Homes from '../../Pages/Home/Homes/Homes';
import Services from '../../Pages/Home/Services/Services';
import Login from '../../Pages/Login/Login';
import MyReview from '../../Pages/MyReview/MyReview';
import NotFound from '../../Pages/NotFound/NotFound';
import Signup from '../../Pages/SignUp/Signup';
import PrivateRouter from '../PrivateRouter/PrivateRouter';

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Homes></Homes>,
                loader:()=>fetch(" https://mywebapps-majharul224.vercel.app")
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader:()=>fetch(" https://mywebapps-majharul224.vercel.app/items")
            },
            {
                path: '/myReview',
                element: <PrivateRouter><MyReview></MyReview></PrivateRouter>,
               
            },
            {
                path: '/addReview/:id',
                element: <PrivateRouter><AddReviwes></AddReviwes></PrivateRouter>,
                loader:({params})=>fetch(`https://mywebapps-majharul224.vercel.app/services/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element:<CheckOut></CheckOut>,
                loader:({params})=>fetch(`https://mywebapps-majharul224.vercel.app/services/${params.id}`)
               
            },
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);

export default router;