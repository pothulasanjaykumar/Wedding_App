const ScheduleCard = ({ title, date, time }) => (
  <div className="text-center p-4 bg-white rounded-lg shadow-md">
    <h3 className="text-xl font-cursive">{title}</h3>
    <p>{date}</p>
    <p>{time}</p>
  </div>
);

export default ScheduleCard;