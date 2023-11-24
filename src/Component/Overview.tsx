import { useState, useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import { BsBell } from 'react-icons/bs'
import { FaTelegramPlane, FaHeadphones } from 'react-icons/fa'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsArrowRightShort } from 'react-icons/bs'
import {FiSearch, FiDownload}  from 'react-icons/fi';
import {BsFilter} from 'react-icons/bs'
import profile from '../assets/Profile.png'
import logo from '../assets/fairmoney-logo.png'
import bank from '../assets/bank-line.png'
import save from '../assets/stack-line.png'
import jet from '../assets/send-plane-line.png'
import out from '../assets/rightarrow.png'
import Sidebar from "./Sidebar"
import MyTable from './MyTable';

const Overview = () =>{
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () =>{
    setIsOpen(!isOpen);
  };
  const [isDarkMode, setIsDarkMode] = useState(false);
useEffect(() => {
  // Check local storage for theme preference and set the initial theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    setIsDarkMode(true);
  } else {
    document.body.classList.remove('dark');
    setIsDarkMode(false);
  }
}, []); // The empty dependency array ensures this effect runs only once on component mount
const toggleTheme = () => {
  if (isDarkMode) {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
  setIsDarkMode(!isDarkMode);
};
const tableData = [
  { name: 'PAYSTACK CHECKOUT', transactionType: 'Money received', date: 'June 21th, 10:30AM', amount: '+2,250.00', status: 'Successful'},
  { name: 'MTN MOBILE TOPUP', transactionType: 'Airtime Recharge', date: 'June 11th, 01:00AM', amount: '+5,000.00', status: 'Failed'},
  { name: 'AFOLABI OLAMILEKAN OLANREWAJU', transactionType: 'Money Sent', date: 'June 7th, 01:30AM', amount: '+1,000.00', status: 'Pending'},
  { name: 'SODIQ SHERIFF OLUWATOBI', transactionType: 'Money received', date: 'June 21th, 10:30AM', amount: '+20,000.00', status: 'Successful'},

  // Add more rows as needed
];

  return(
      <div className='flex dark:bg-black h-full md:h-screen lg:h-full w-full pb-5' > 
      <div className="hidden md:hidden lg:flex lg:w-1/5">
        <Sidebar />
      </div>
        <div className="flex flex-col w-full h-full md:flex md:flex-col md:justify-right ">
  <div className="flex justify-between items-center p-5 md:flex  lg:hidden">
      <div className=""><img src={logo} alt="logo" className='w-1/2'/></div>
      <button className='flex justify-end  text-4xl dark:text-white px-5  lg:hidden ' onClick={toggleMenu}>
      {isOpen ?( <MdOutlineClose className='' />): <GiHamburgerMenu /> }
    </button>
    {isOpen  &&(
   <div onClick={toggleMenu} className="flex flex-col absolute  top-0 right-0 w-1/2 h-full  px-5 pt-5 space-y-8 text-gray-400 capitalize font-semibold text-sm bg-white dark:bg-black">
   <MdOutlineClose className='text-right text-5xl text-black dark:text-white' />
   <div className="flex gap-3">
            <img src={bank} alt="bank" />
            <a href='/Overview' className=""
        >overview</a>
        </div>
        <div className="flex gap-3">
            <img src={jet} alt="jet" />
            <a href='/Scheme' className="">Scheme</a>
        </div>
   <div className="mt-auto space-y-3">
       <div className="flex items-center gap-3">
           <FaHeadphones className='text-gray-400 text-2xl' />
           <a href="">Chat</a>
       </div>
       <div className="flex items-center gap-3">
           <img src={out} alt="out" />
           <a href="/">Log out</a>
       </div>
   </div>
 </div>
 
    
    )}
  </div>

  <div className="flex justify-between items-center ps-5 py-2 md:px-8 md:border md:border-x-0 md:border-t-0 lg:h-16 ">
      <div className='flex flex-col dark:text-white leading-tight'>
        <h1 className="text-xs md:text-sm">Hello</h1>
        <h1 className="text-md md:text-lg font-bold capitalize ">Olanrewaju</h1>
      </div>
      <div className={`dashboard ${isDarkMode ? 'dark:bg-gray-900' : 'bg-white'}`}>
    
    <div className={`theme-switcher flex gap-2  items-center ${isDarkMode ? 'dark:bg-black' : 'bg-white'} p-2 rounded-md shadow-inner`}>
    <p className="ml-2 text-sm md:text-md text-black dark:text-white">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</p>
      <button
        onClick={toggleTheme}
        className={`p-2 rounded-full transition-all duration-300 ${isDarkMode ? 'bg-gray-800 shadow-2xl' : 'bg-gray-100 shadow-inner'}`}
      >
        <div className="flex shadow-inner   space-x-3 md:space-x-5">
          {isDarkMode ? <IoSunnyOutline className='bg-gray-400 text-white h-5 dark:bg-gray-800 dark:text-gray-600  rounded w-7'  /> : <IoMoonOutline  />}
          {isDarkMode ? <IoMoonOutline className='dark:text-white '/> : <IoSunnyOutline   className='text-black bg-white h-5 shadow-inner dark:bg-black  rounded w-7' />}
        </div>
      </button>
      <div className="flex items-center space-x-8">
    <BsBell className='text-2xl' />
    <img src ={profile} alt='profile' className='rounded-full' />
    </div>
    </div>
    {/* Other content of your Dashboard */}
    
  </div>
  </div>
  <div className="flex-col">
    <div className="flex-col p-5  space-y-30 w-full md:flex md:flex-row md:justify-between">
        <div className="flex-col">
          <h1 className=" md:text-2xl font-semibold text-black dark:text-white">Overview</h1>
          <h1 className="text-sm text-gray-500 md:text-xs">Send money and receive money with ease</h1>
        </div>
        <div className="flex-col">
          <div className="flex gap-2">
            <a href="" className='px-2 py-1 flex md:flex border border-gray-400 rounded md:px-3 md:py-2 md:text-sm hover:opacity-50 capitalize items-center dark:text-white'><FaTelegramPlane className='text-xl dark:text-white' /><h1 className="pl-2"> make payments</h1></a>
            <a href="" className='px-2 py-1 flex md:flex border border-gray-400 rounded md:px-3 md:py-2 md:text-sm hover:opacity-50 capitalize items-center bg-black text-white'><AiOutlinePlus className='text-xl' /> <h1 className="pl-2">add money</h1></a>
          </div>
        </div>
      </div>
      
      <div className="block space-y-4 md:grid grid-cols-2 md:space-y-0 lg:flex p-5 w-full gap-5 lg:space-y-0">
      <div className="w-full bg-black text-white  shadow-2xl rounded  p-5 dark:bg-gray-950">
      <h1 className="text-xl font-semibold">Semanko Account Number</h1>
          <div className="flex justify-between">
          <h1 className='text-lg tracking-wider'>5910483467</h1>
          <BsArrowRightShort className='text-2xl' />
          </div>
          <div className="flex justify-between">
            <div className="flex-col">
            <h1 className="text-xs pt-7">Available balance</h1>
          <h1 className="text-3xl font-semibold tracking-wider">#50,525.00</h1>
            </div>
          </div>
          
          
        </div>
        <div className="bg-green-600 text-white  w-full shadow-2xl rounded  p-5 dark:bg-gray-950">
          <div className="flex justify-between">
          <h1 className='text-xl font-semibold'>Schemes</h1>
          <BsArrowRightShort className='text-2xl' />
          </div>
          <h1 className="text-xs pt-14">Number of schemes</h1>
          <h1 className="text-3xl font-semibold tracking-wider">5</h1>
          </div>
      </div>
            <div className="flex flex-col w-full space-y-4 gap-0 md:flex md:flex-row md:w-full p-5 md:gap-4 md:space-y-0">
          <div className="flex w-full bg-green-100 rounded border-gray-300  p-5  md:flex items-center gap-3 md:w-full dark:bg-gray-950 dark:shadow-2xl dark:text-white">
            <BsBell className='text-6xl md:text-2xl' />
            <span>
            <h1 className="text-xl text-black pb-2 dark:text-white">Upcoming repayment</h1>
            <h1 className="text-2xl font-semibold pb-3 md:pb-0">#527,500.00 <label className="text-xs">due by 12th of july</label> </h1>
          </span>
          <a href="" className='px-12 py-2 text-white font-semibold bg-black rounded-2xl shadow-2xl'>Repay</a>
          </div>
          <div className="flex w-full bg-yellow-200 rounded border-gray-300 p-5  md:flex items-center gap-3 md:w-full dark:text-white dark:bg-gray-950">
          <img src={save} alt="" />
          <span>
            <h1 className="text-xl text-black pb-2 dark:text-white">Earn 27% on your savings</h1>
            <h1 className="text-xs">FairLock your savings % earn highest </h1>
            <h1 className="text-xs pb-3 md:pb-0">ever interest on your savings</h1>
          </span>
          <a href="" className='px-6 py-2 md:px-6 md:py-2 text-white font-semibold bg-black rounded-3xl shadow-2xl '>Savenow!</a>

          </div>

        </div>
        <div className=" border rounded-tl-xl rounded-tr-xl mx-5  dark:text-white">
        <div className="w-full  top-0 border border-x-0   p-5">
          <div className="  md:flex justify-between w-full">
            <div>
            <h1 className="text-2xl font-semibold capitalize">transaction history</h1>
            </div>
            <div className="space-y-3 pt-5 md:flex gap-5 md:pt-0 md:space-y-0">
              <div className="flex text-sm py-2 md:flex items-center border w-full ps-3 border-gray-400 rounded text-gray-400 ">
                <FiSearch className='text-xl' />
                <input type="Search" placeholder='Search Transaction' className='ps-2 pr-6 border-collapse outline-none dark:text-white dark:bg-black' />
              </div>
              <div className="flex text-sm py-2 w-28 md:flex items-center border md:text-md border-gray-400 rounded ps-3   text-gray-400 font-semibold">
                <BsFilter className='text-xl' />
                <input type="button" value='Filter: All' className='ps-2 pr-3' />
              </div>
              <div className="flex text-sm py-2 w-28  md:flex items-center border md:text-md border-gray-400 rounded ps-3   text-gray-400 font-semibold">
                <FiDownload className='text-xl' />
                <input type="button" value='Download' className='ps-2 pr-3' />
              </div>
            </div>
          </div>
          <div className="px-0 pt-5 space-y-3 md:flex justify-between  md:pt-7 md:space-y-0 lg:flex lg:justify-between lg:pt-10 lg:space-y-0">
            <h1 className="text-2xl font-semibold">
              June 2023
            </h1>
            <div className="flex  gap-4">
              <h1 className="flex text-xl items-center text-gray-400 pr-2">In:
              <h1 className="text-black font-semibold dark:text-white">#66,560.56</h1>
              </h1>
              <h1 className="flex text-xl items-center text-gray-400 pr-2">Out:
              <h1 className="text-black font-semibold dark:text-white">#66,358.96</h1>
              </h1>
            </div>
          </div>
        </div>
         <MyTable data={tableData} />

        
        </div>
  </div>

</div>
      </div>

  )
}
export default Overview