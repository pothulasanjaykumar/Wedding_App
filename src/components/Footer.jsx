import React from 'react';

const Footer = () => {
  return (
    <footer 
      className="w-full h-[40vh] flex flex-col justify-center items-center relative bg-cover bg-center"
      style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/brown-background-with-white-line-that-says-black_52793-3784.jpg)' }}
    >
      {/* Flower decoration (you'll need to add actual image implementation) */}
      <div className="flower1 absolute top-0 left-0 w-20 h-20"></div>
      
      <p className="text-white w-1/2 py-12 px-5 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse deserunt porro eius, 
        cupiditate iure, quod labore dignissimos adipisci repellendus dolore dicta quam 
        numquam dolores beatae atque molestiae nisi sed laborum.
      </p>
      
      <div className="flex flex-wrap justify-center">
        <a href="#" className="text-white px-5 py-2 hover:underline">HOME</a>
        <a href="#" className="text-white px-5 py-2 hover:underline">SCHEDULE</a>
        <a href="#" className="text-white px-5 py-2 hover:underline">RSVP</a>
        <a href="#" className="text-white px-5 py-2 hover:underline">GALLERY</a>
        <a href="#" className="text-white px-5 py-2 hover:underline">GIFT REGISTRY</a>
      </div>
    </footer>
  );
};

export default Footer;