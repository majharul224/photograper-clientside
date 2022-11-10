import React from 'react';
import Main from '../../LayOut/Main';
import Blogs from '../../Pages/Blogs/Blogs';
import Homes from '../../Pages/Home/Homes/Homes';
import Services from '../../Pages/Home/Services/Services';
import Login from '../../Pages/Login/Login';
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
                loader:()=>fetch("https://mywebapps.vercel.app/services")
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
                element:<PrivateRouter> <Blogs></Blogs></PrivateRouter>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader:()=>fetch("https://mywebapps.vercel.app/services")
            },
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);

export default router;