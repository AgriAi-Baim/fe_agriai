import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import Predict from "../pages/Predict";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Landing/>
    },
    {
        path:"/predict",
        element: <Predict/>
    }
])