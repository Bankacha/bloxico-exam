import {createBrowserRouter, Navigate} from 'react-router-dom'
import PublicLayout from './layout/PublicLayout'
import Landing from './pages/Landing'
import PrivateLayout from './layout/PrivateLayout'
import Home from './pages/Home'
import React from 'react'
import {RouteObject} from 'react-router'
import ProfilePage from './pages/ProfilePage'

const routes: RouteObject[] = [
    {
        path: "",
        element: <PublicLayout/>,
        children: [
            {
                path: '',
                element: <Landing/>
            }
        ]
    },
    {
        path: "/",
        element: <PrivateLayout/>,
        children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: '/profile',
                element: <ProfilePage/>,
            },
        ]
    },
    {
        path: "*",
        element: <Navigate to={'/'}/>,
    },
]

export default createBrowserRouter(routes)

