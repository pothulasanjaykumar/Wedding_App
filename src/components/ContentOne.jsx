import React from 'react';
import CoupleImg from '../assets/couples.png'

const ContentOne = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col">
      {/* Front Section */}
      <div className="h-[99%] w-[90%] flex justify-center items-center flex-col relative">
        {/* Background content (ioheoif text) */}
        <div className="absolute inset-0 z-10 " style={{ backgroundImage: `url(${CoupleImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        
        {/* Front Content */}
       <div className="absolute left-[17%] top-[40%] flex flex-col items-center justify-center z-20 text-center">
  {/* Couple Names with elegant styling */}
  <h1 className="text-5xl md:text-6xl font-bold mb-4 text-rose-400 font-serif tracking-wider">
    Ritesh <span className="text-rose-900">&</span> Joya
  </h1>
  
  {/* Wedding Date with decorative elements */}
  <div className="relative mb-8">
  <p className="text-xl md:text-2xl text-rose-300 italic font-medium">
    Our Big Day is <span className="font-bold text-rose-700">November 26, 2025</span>
  </p>
  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-[2px] bg-rose-400"></div>
</div>

{/* Countdown Timer with darker cards */}
<div className="flex justify-center space-x-4 md:space-x-6">
  {/* Days */}
  <div className="text-center bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-lg p-4 min-w-[80px] border border-rose-700">
    <h2 className="text-4xl font-bold text-rose-200 mb-1">147</h2>
    <p className="text-sm uppercase tracking-wider text-rose-300">Days</p>
  </div>
  
  {/* Hours */}
  <div className="text-center bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-lg p-4 min-w-[80px] border border-rose-700">
    <h2 className="text-4xl font-bold text-rose-200 mb-1">24</h2>
    <p className="text-sm uppercase tracking-wider text-rose-300">Hours</p>
  </div>
  
  {/* Minutes */}
  <div className="text-center bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-lg p-4 min-w-[80px] border border-rose-700">
    <h2 className="text-4xl font-bold text-rose-200 mb-1">28</h2>
    <p className="text-sm uppercase tracking-wider text-rose-300">Minutes</p>
  </div>
  
  {/* Seconds */}
  <div className="text-center bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-lg p-4 min-w-[80px] border border-rose-700">
    <h2 className="text-4xl font-bold text-rose-200 mb-1">59</h2>
    <p className="text-sm uppercase tracking-wider text-rose-300">Seconds</p>
  </div>
</div>
  
  {/* Decorative elements */}
  
</div>
      </div>
    </div>
  );
}
export default ContentOne;