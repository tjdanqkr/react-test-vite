import { BrowserRouter, Route, Router, createBrowserRouter } from "react-router-dom"
import About from "../components/About";

const MyRouters = 
    createBrowserRouter([
        {
            path:"/about",
            element:<About/>
        }
    ])
export default MyRouters;