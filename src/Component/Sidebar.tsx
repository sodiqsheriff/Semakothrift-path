import logo from '../assets/fair-icon.png'
import bank from '../assets/bank-line.png'
import jet from '../assets/send-plane-line.png'

import {FaHeadphones} from 'react-icons/fa'
import out from '../assets/rightarrow.png'
import { useRoutes } from "react-router-dom";
import Overview from './Overview'
import Scheme from './Scheme'
import Signup from './Signup'




const Sidebar = () => {
    const subpageRoutes = useRoutes([
        { path: "/", element: <Overview /> }, // This is the default route
        { path: "/Scheme", element: <Scheme /> },
        { path: "/Signup", element: <Signup /> },
        
        // Add more subpage routes here
      ]); 
    
   
    return(



<div className="flex w-full h-full dark:bg-black">

<div className="hidden md:hidden lg:flex flex-col border border-y-0 border-l-0">
    <div className="flex items-center px-10 py-2 h-16 border border-x-0 border-t-0 w-full "><img src={logo} alt="logo" className='w-1/2'/> <h1 className="text-2xl text-blue-950 font-bold">Semanko</h1></div>
    <div className="p-5 space-y-8 pt-10 text-gray-400 capitalize font-semibold md:text-sm lg:text-md" >
        {subpageRoutes}
        <div className="flex gap-3">
            <img src={bank} alt="bank" />
            <a href='/Overview' className=""
        >overview</a>
        </div>
        <div className="flex gap-3">
            <img src={jet} alt="jet" />
            <a href='/Scheme' className="">Scheme</a>
        </div>
       
        <div className="pt-96 space-y-3">
            <div className="flex items-center gap-3">
                <FaHeadphones className='text-gray-400 text-2xl' />
                <a href="">Chat</a>
            </div>
            <div className="flex gap-3">
                <img src={out} alt="out" />
                <a href="/">Log out</a>
            </div>
        </div>
    </div>
</div>

</div>
    )}
    export default Sidebar;