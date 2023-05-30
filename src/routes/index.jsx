import React, {Suspense} from "react";


import {Navigate, useRoutes} from "react-router-dom";

const Zksync = React.lazy(() => import("@pages/Zksync"));
const App = React.lazy(() => import("@/App"));
const MainPage = React.lazy(() => import("@pages/MainPage"));
const Coffee = React.lazy(() => import("@pages/Coffee"));
const router = [
    {
        path: '/', element: <MainPage/>,
        children: [
            {
                path: '/',
                element: < App/>,
            },
            {
                path: '/zksync',
                element: <Zksync/>,
            },
            {
                path: '/coffee',
                element: <Coffee/>,
            },
        ]
    },
    {path: "*", element: <Navigate to="/"/>},

];

const WrapperRouter = () => {
    let result = useRoutes(router);
    return (
        <Suspense>
            {result}
        </Suspense>
    );
};

export default WrapperRouter;
