import React from 'react';
import Location from './Location';

const WhenWhereSection = () => (
  <section className="min-h-screen flex flex-col justify-center items-center gap-8 bg-gray-50">
    <h1 className="text-center text-3xl font-serif mb-4 font-serif font-bold">When & Where</h1>
    
    <div className="w-full px-5 flex flex-row justify-around items-center h-[70vh] mb-8">
      {/* First Card */}
      <div className="relative w-[30%] h-full flex flex-col justify-start items-center rounded-xl overflow-hidden ">
        <div 
          className="h-[80%] w-full bg-cover bg-center rounded-t-xl"
          style={{ backgroundImage: 'url(https://thumbs.dreamstime.com/b/beautiful-wedding-design-cartoon-bride-groom-bouquet-wreath-couple-elegant-emotive-faces-depicted-holding-hands-303801654.jpg)' }}
        ></div>
        <div className="contents p-6 text-center bg-white rounded-b-xl w-full h-[40%]">
          <h1 className="text-2xl font-bold text-gray-800">The Reception</h1>
          <b className="block my-2 text-gray-600">Monday, 12 Apr 2024, 1:00 PM - 2:30PM</b>
          <p className="text-gray-500">Join us for a delightful reception to kick off the event.</p>
        </div>
      </div>

      {/* Second Card */}
      <div className="relative w-[30%] h-full flex flex-col justify-start items-center rounded-xl overflow-hidden ">
        <div 
          className="h-[80%] w-full bg-cover bg-center rounded-t-xl"
          style={{ backgroundImage: 'url(https://thumbs.dreamstime.com/b/beautiful-wedding-design-cartoon-bride-groom-bouquet-wreath-couple-elegant-emotive-faces-depicted-holding-hands-303801654.jpg)' }}
        ></div>
        <div className="contents p-6 text-center bg-white rounded-b-xl w-full h-[40%]">
          <h1 className="text-2xl font-bold text-gray-800">The Ceremony</h1>
          <b className="block my-2 text-gray-600">Tuesday, 13 Apr 2024, 3:00 PM - 5:00PM</b>
          <p className="text-gray-500">Witness our special moment as we exchange vows.</p>
        </div>
      </div>

      {/* Third Card */}
      <div className="relative w-[30%] h-full flex flex-col justify-start items-center rounded-xl overflow-hidden ">
        <div 
          className="h-[80%] w-full bg-cover bg-center rounded-t-xl"
          style={{ backgroundImage: 'url(https://thumbs.dreamstime.com/b/beautiful-wedding-design-cartoon-bride-groom-bouquet-wreath-couple-elegant-emotive-faces-depicted-holding-hands-303801654.jpg)' }}
        ></div>
        <div className="contents p-6 text-center bg-white rounded-b-xl w-full h-[40%]">
          <h1 className="text-2xl font-bold text-gray-800">The Celebration</h1>
          <b className="block my-2 text-gray-600">Wednesday, 14 Apr 2024, 7:00 PM - 11:00PM</b>
          <p className="text-gray-500">Dance the night away at our grand celebration.</p>
        </div>
      </div>
    </div>

    <div className="w-full px-8">
      <Location />
    </div>
  </section>
);

export default WhenWhereSection;