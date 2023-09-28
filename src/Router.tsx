import {createBrowserRouter,} from 'react-router-dom'
import PublicLayout from './layout/PublicLayout'
import Landing from './pages/Landing'
import PrivateLayout from './layout/PrivateLayout'
import Home from './pages/Home'
import React from 'react'
import {RouteObject} from 'react-router'

const routes: RouteObject[] = [
    {
        path: "/",
        element: <PublicLayout/>,
        children: [
            {
                path: '',
                element: <Landing/>
            }
        ]
    },
    {
        path: "/home",
        element: <PrivateLayout/>,
        children: [
            {
                path: '',
                element: <Home/>
            },
        ]
    },
]

export default createBrowserRouter(routes)

