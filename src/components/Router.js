
import {
    createBrowserRouter,
} from "react-router-dom";

import City from "./City";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: 'Not found'
    },
    {
        path: "/city/:Id",
        element: <City />,
        errorElement: 'Not found'
    },

]);

export default router;
