import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: '*',
                element: <NotFoundPage />
            }
        ]

    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

