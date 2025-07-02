import { useState } from 'react';

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: '',
    guests: '',
    attendingWhat: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('RSVP submitted: ' + JSON.stringify(formData));
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-cover bg-center" 
         style={{ backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/55183531e4b0187304f8dabd/1588535473925-AP5XTS7AUCKMBMVFA3AN/Indian-Destination-Wedding-THH)' }}>
      <div className="w-[400px] h-[400px] bg-white rounded-lg shadow-lg p-5 relative right-[30%]">
        <h1 className="text-center mb-5 text-xl">Are You Attending ?</h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="attendingYes"
              id="attendingYes"
              checked={formData.attending === 'yes'}
              onChange={() => setFormData({...formData, attending: 'yes'})}
              className="h-4 w-4"
              required
            />
            <label htmlFor="attendingYes">Yes, I will be there</label>
          </div>
          
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="attendingNo"
              id="attendingNo"
              checked={formData.attending === 'no'}
              onChange={() => setFormData({...formData, attending: 'no'})}
              className="h-4 w-4"
            />
            <label htmlFor="attendingNo">Sorry, I can't be there</label>
          </div>
          
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            placeholder="Number of guests"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          
          <input
            type="text"
            name="attendingWhat"
            value={formData.attendingWhat}
            onChange={handleChange}
            placeholder="What will you be attending"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors mt-3">
            RSVP
          </button>
        </form>
      </div>
    </div>
  );
};

export default RSVPForm;