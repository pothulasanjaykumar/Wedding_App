import React from 'react';

const Schedules = () => (
  <section className="min-h-screen flex flex-col items-center py-10" id="schedule">
    <h1 className="text-center text-3xl mb-10 font-serif font-bold">Schedules</h1>
    <div className="flex flex-col space-y-8 w-full max-w-6xl px-4">
      {/* First Row */}
      <div className="flex justify-center space-x-8">
        <ScheduleCard title="Mehndi Ceremony" date="March 25, 2024" time="4:00 PM - 7:00 PM" />
        <ScheduleCard title="Sangeet Night" date="March 26, 2024" time="7:00 PM - 11:00 PM" />
        <ScheduleCard title="Haldi Ceremony" date="March 27, 2024" time="10:00 AM - 1:00 PM" />
      </div>
      
      {/* Second Row */}
      <div className="flex justify-center space-x-8">
        <ScheduleCard title="Pithi Ceremony" date="March 28, 2024" time="11:00 AM - 2:00 PM" />
        <ScheduleCard title="Phool Ceremony" date="March 29, 2024" time="12:00 PM - 3:00 PM" />
        <ScheduleCard title="Bachelor Party" date="March 27, 2024" time="8:00 PM - 1:00 AM" />
      </div>
    </div>
  </section>
);

const ScheduleCard = ({ title, date, time }) => (
  <div className="flex-1 max-w-xs bg-white bg-[url('https://img.pikbest.com/png-images/qianku/wedding-flowers-border-lines_2385430.png!sw800')] bg-cover bg-center text-center h-64 rounded-lg  overflow-hidden">
    <div className="flex flex-col justify-center items-center h-full p-4 bg-opacity-20">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-sm">{date}</p>
      <p className="text-sm">{time}</p>
    </div>
  </div>
);

export default Schedules;