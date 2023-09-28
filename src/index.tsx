import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import ErrorPage from './pages/ErrorPage'
import {PublicRoute} from './router/PublicRoute'
import PublicLayout from './layout/PublicLayout/PublicLayout'
import PrivateLayout from './layout/PrivateLayout'
import PrivateRoute from './router/PvtRoute'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

const router = createBrowserRouter([
    {
        path: '*',
        element: <PublicLayout />,
        children: [
            {
                path: 'login',
                element: (
                    <PublicRoute>
                        <h1>TEST </h1>
                    </PublicRoute>
                )
            },
            {
                path: '*',
                element: <ErrorPage />
            },
        ]
    },
    {
        path: '/',
        element: (
            <PrivateRoute>
                <PrivateLayout />
            </PrivateRoute>
        ),
        children: [
            {
                path: '/',
                element: <App />,
            },
        ]
    },
])

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
