import React from 'react';

const ContentTwo = () => {
  return (
    <div className="h-[70vh] w-full flex justify-center items-center bg-gray-100">
      <div className="relative flex justify-center items-center w-full">
        {/* Left Text Section */}
        <div className="flex flex-col justify-center items-center space-y-4 w-[20%] p-4">
          <h1 className="text-2xl font-bold">Ritesh Debtath</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, architecto quisquam! Suscipit veniam
          </p>
        </div>

        {/* Center Image Section */}
        <div 
          className="h-[50vh] w-[25%] bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://img.pikbest.com/png-images/20241204/cute-couple-cartoon-characters-for-wedding-on-white-background_11171250.png!w700wp)'
          }}
        ></div>

        {/* Right Text Section */}
        <div className="flex flex-col justify-center items-center space-y-4 w-[20%] p-4">
          <h1 className="text-2xl font-bold">Ritesh Debtath</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, architecto quisquam! Suscipit veniam
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentTwo;