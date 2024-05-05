import { RouteObject, createBrowserRouter } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import { ROUTES } from './constants'
import { Home, Table } from "../pages";
import { Poster } from "../pages/Poster";

const routes: RouteObject[] = [
    {
        path: ROUTES.HOME, element: <PrivateRouter/>,
        children: [
            {path: ROUTES.HOME, element: <Home/>},
            {path: `${ROUTES.TABLE}/:param`, element: <Table/>},
            {path: ROUTES.POSTER + "/:param", element: <Poster/>},
        ]
    }
]

export const router = createBrowserRouter(routes);