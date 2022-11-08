import React from 'react';
import Main from '../../LayOut/Main';
import Homes from '../../Pages/Home/Homes/Homes';
import Login from '../../Pages/Login/Login';
import NotFound from '../../Pages/NotFound/NotFound';
import Signup from '../../Pages/SignUp/Signup';

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Homes></Homes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);

export default router;