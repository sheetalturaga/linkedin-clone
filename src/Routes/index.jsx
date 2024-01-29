// The only file in routes that consoldates all routes 
import { createBrowserRouter} from "react-router-dom";
import Login from "../Pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
]);