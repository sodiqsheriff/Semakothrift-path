import { useState, useEffect, ChangeEvent } from 'react';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';


const Signup: React.FC =()=> {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    const { firstName, lastName, email, phoneNumber, password, confirmPassword } = formData;
    return (!!firstName && !!lastName && !!email && !!phoneNumber && !!password && password === confirmPassword) as boolean;
  };
    
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.body.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

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

  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSignUpClick = () => {
    // Check if passwords match when sign-up button is clicked
    setPasswordsMatch(password === confirmPassword);
  };
  
    return(
        <div className="dark:bg-black h-full w-full font-Inter">
        <h1 className="text-white"></h1>
        <div className="theme-switcher flex items-center dark:bg-black p-2 rounded-md shadow-inner">
        <div className={`theme-switcher flex gap-2 items-center ${isDarkMode ? 'dark:bg-black' : 'bg-white'} p-2 rounded-md shadow-inner`}>
        <p className="ml-2 text-black dark:text-white">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</p>
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-all duration-300 ${isDarkMode ? 'bg-gray-800 shadow-2xl' : 'bg-white shadow-inner'}`}
        >
          <div className="flex   space-x-5">
            {isDarkMode ? <IoSunnyOutline className='bg-gray-400 text-white h-5 shadow-inner dark:bg-gray-800 dark:text-gray-600  rounded w-7'  /> : <IoMoonOutline  />}
            {isDarkMode ? <IoMoonOutline className='dark:text-white '/> : <IoSunnyOutline   className='text-white bg-gray-400 h-5 shadow-inner dark:bg-black  rounded w-7' />}
          </div>
        </button>
      
        </div>
        <div>
      
        </div>
          
          </div>
          {/* Other content of your Dashboard */}
          
      
       
      
          
          <div className='flex-col mx-auto  items-center w-3/5 px-5 py-7 md:px-12 md:py-14 font-Inter lg:px-20 lg:py-1'>
            
            <div className="text-center">
              <h1 className="text-blue-950 text-4xl font-bold capitalize dark:text-green-600">sign up </h1>
              </div>
              <div className="flex-col pt-10">
              <div className="flex flex-col  ">
                <div className="flex-col  ">
                     <label htmlFor="name" className="text-sm md:text-md font-bold dark:text-white">First name</label>
                    <input type="text" name='firstName' onChange={handleInputChange} placeholder='Sodiq' className='border border-gray-500 outline-none w-full p-2  rounded dark:bg-black dark:text-white'/>
                </div>
                <div className="flex-col  pt-5">
                     <label htmlFor="name" className="text-sm md:text-md font-bold dark:text-white">Last name</label>
                    <input type="text" placeholder='Sheriff' name='lastName' onChange={handleInputChange} className='border border-gray-500 outline-none w-full p-2  rounded dark:bg-black dark:text-white'/>
                </div>
              </div>
              <div className="flex flex-col  ">
                <div className="flex-col w-full pt-5">
                    <label htmlFor="Email" className="text-sm font-bold dark:text-white">Email</label>
                    <input type="Email" placeholder='sodiq2023@gmail.com' name='email' onChange={handleInputChange} className='p-2 w-full border border-gray-500 dark:bg-black dark:text-white' />
                </div>
              <div className="flex flex-col  pt-5">
                <label htmlFor="name" className="text-sm md:text-md font-bold dark:text-white">Phone number</label> 
                <input type="number" placeholder='+234704120889' name='phoneNumber' onChange={handleInputChange} className='p-2 w-full border border-gray-500 dark:bg-black dark:text-white' />
                </div>
              </div>
               
                <div className='flex flex-col pt-5 w-full '>
      <label className=' font-bold dark:text-white'>Password</label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          name='password'
          value={password}
          onChange={handlePasswordChange}
          className="border border-gray-500 w-full rounded p-2 dark:bg-black dark:text-white"
        />
        <span
          className="absolute right-2 top-2 cursor-pointer"
          onClick={toggleShowPassword}
        >
          {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
        </span>
      </div>
      
      <label className='font-bold pt-5 dark:text-white'>Confirm Password</label>
      <div className="relative">
        <input
          type={showConfirmPassword ? 'text' : 'password'}
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className="border border-gray-500 w-full rounded p-2 dark:bg-black dark:text-white"
        />
        <span
          className="absolute right-2 top-2 cursor-pointer"
          onClick={toggleShowConfirmPassword}
        >
          {showConfirmPassword ? <MdVisibilityOff /> : <MdVisibility />}
        </span>
      </div>
      <a href='/PinInput' className='flex justify-center mt-10 text-center transform -translate-y-1/2 bg-black text-white dark:bg-green-500 dark:text-white hover:opacity-50 hover:text-white rounded-md px-2 py-2' onClick={handleSignUpClick}>Sign Up</a>
      {!passwordsMatch && (
        <div className="text-red-500 mt-1">Passwords do not match.</div>
      )}
    </div>
              </div>
              
      
              <div className="flex flex-col justify-center py-2 md:py-4">
                  <div className="text-center dark:text-white  pt-2">
              <a href="">Already have an account? </a>
              <a href="" className='font-semibold text-blue-600 underline '>Sign in</a>
            </div>
                  
                  <h1 className="text-center text-gray-500 pt-5 text-sm">
                    Semako's Thrift is a licencensed co-operation under the Nigerian Co-operative Society.
                  </h1>
      
              </div>
      
          </div>
          </div>
    )
}
export default Signup;