import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import './App.css'
import Signup from "./Component/Signup";
import Overview from "./Component/Overview";
import Login from "./Component/Login";
import Scheme from "./Component/Scheme";
import {OtpPinInput} from "./Component/PinInput"


const  App =()=> {
  const router = createBrowserRouter([
    {path:"/", element: <Login />},
    {path:"Overview", element: <Overview />},
    {path:"/Signup/*", element: <Signup />},
    {path:"/PinInput/*", element: <OtpPinInput />},
    {path:"/Scheme/*", element: <Scheme />},
  ])

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
