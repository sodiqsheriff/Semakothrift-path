import React, { useState } from 'react';
import PinInput from 'react-pin-input';
interface PinInputProps {
  onSubmit?: (pin: string) => void;
  phoneNumber?: string;
  countryCode?: string; // New prop for the country code
}

const OtpPinInput=  ({ onSubmit }:PinInputProps) => {
  const [pinValue, setPinValue] = useState<string>('');



  const handleSubmit = () => {
    if (pinValue.length === 4) {
      onSubmit!(pinValue);
    } else {
      console.log('Submit button clicked');
    }
  };
  
   
  return (
  <div className='flex flex-col items-center justify-center h-screen bg-green-200'>
     <PinInput 
     length={4}
     inputMode='number'
     />
     <button onClick={handleSubmit} className="mt-4 text-lg bg-green-500 text-white font-semibold capitalize rounded-md focus:outline-none focus:ring focus:border-blue-300 py-2 px-4">
      submit
      </button>         
  </div>
  );
}

export {OtpPinInput}