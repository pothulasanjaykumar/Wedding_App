import React from 'react';

const Location = () => {
  return (
    <div 
      className="w-full h-[30vh] bg-cover bg-center rounded-xl shadow-lg overflow-hidden"
      style={{ 
        backgroundImage: 'url(https://preview.redd.it/zj23e4w876p81.png?width=1080&crop=smart&auto=webp&s=b8be04cdcdee17d074c441bb7d663d5023dc82b9)'
      }}
    >
      <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-30">
        <h2 className="text-white text-3xl font-bold">Our Wedding Location</h2>
      </div>
    </div>
  )
}

export default Location;