import React from 'react'
import Navbar_Org from '../../components/Navbar_Org'

const new_event = () => {
  return (
    <div className='relative bg-black'>
        <Navbar_Org />
        <div className='lg:my-20 md:my-16 my-5 lg:mx-20'>
        <form method="POST" name="form" action="newEvent" className='md:grid md:grid-cols-2 grid grid-cols-1 gap-x-20'>
          {/* <CSRFToken /> */}
        {/* {% csrf_token %} */}
        <div className="mt-5 text-[#80D0C7]">
            <label for="username">Name of the Event</label>
            <input
              type="text"
              id="username"
              name = "event_name"
              required
              className="block w-full p-2 border rounded bg-white border-[#000428] text-[#000428] font-bold"
            />
          </div>
          <div className="mt-5 text-[#80D0C7]">
            <label for="username">Date</label>
            <input
              type="date"
              id="username"
              name = "date"
              required
              className="block w-full p-2 border rounded bg-white border-[#000428] text-[#000428] font-bold"
            />
          </div>
          <div className="mt-5 text-[#80D0C7]">
            <label for="email">Start Time</label>
            <input
              type="time"
              id="username"
              name= "stime"
              required
              className="block w-full p-2 border rounded bg-white border-[#000428] text-[#000428] font-bold"
            />
          </div>
          <div className="mt-5 text-[#80D0C7]">
            <label for="username">End Time</label>
            <input
              type="time"
              id="username"
              name = "etime"
              required
              className="block w-full p-2 border rounded bg-white border-[#000428] text-[#000428] font-bold"
            />
          </div>
          <div className="mt-5 text-[#80D0C7]">
            <label for="password">Venue</label>
            <input
              type="text"
              id="password"
              name="venue"
              required
              className="block w-full p-2 border rounded bg-white border-[#000428] text-[#000428] font-bold"
            />
          </div>
          <div className="mt-5 text-[#80D0C7]">
            <label for="username">Location</label>
            <input
              type="url"
              id="username"
              name = "location"
              required
              className="block w-full p-2 border rounded bg-white border-[#000428] text-[#000428] font-bold"
            />
          </div>
          <div className="mt-5 text-[#80D0C7]">
            <label for="passwordc">Event Description</label>
            <input
              type="text"
              id="username"
              name="description"
              required
              className="block w-full p-2 border rounded bg-white border-[#000428] text-[#000428] font-bold"
            />
          </div>
          <div className="mt-5 text-[#80D0C7]">
            <label for="passwordc">Number of Seats</label>
            <input
              type="number"
              id="username"
              name="seats"
              required
              className="block w-full p-2 border rounded bg-white border-[#000428] text-[#000428] font-bold"
            />
          </div>
          <div className="mt-5 text-[#80D0C7]">
            <label for="passwordc">Contact Person</label>
            <input
              type="text"
              id="username"
              name="contact_person"
              required
              className="block w-full p-2 border rounded bg-white border-[#000428] text-[#000428] font-bold"
            />
          </div>
          <div className="mt-5 text-[#80D0C7]">
            <label for="passwordc">Contact Person Contact</label>
            <input
              type="number"
              id="username"
              name="contact_no"
              required
              className="block w-full p-2 border rounded bg-white border-[#000428] text-[#000428] font-bold"
            />
          </div>
          <div className="mt-5 text-[#80D0C7]">
            <label for="passwordc">Ticket Price Per Person</label>
            <input
              type="number"
              id="username"
              name="fees"
              required
              className="block w-full p-2 border rounded bg-white border-[#000428] text-[#000428] font-bold"
            />
          </div>
          <div className="mt-5 text-[#80D0C7]">
            <label for="passwordc">Last Day of Registration</label>
            <input
              type="date"
              id="username"
              name="last_day"
              required
              className="block w-full p-2 border rounded bg-white border-[#000428] text-[#000428] font-bold"
            />
          </div>
          <div className="mt-5 text-[#80D0C7]">
            <label for="passwordc">Poster</label>
            <input
              type="url"
              id="username"
              name="event_photo"
              required
              className="block w-full p-2 border rounded bg-white border-[#000428] text-[#000428] font-bold"
            />
          </div>
          <div className="mt-10">
            <input
              type="submit"
              value="Create Event"
              className="py-3 bg-gradient-to-r from-[#13547A] to-[#80D0C7] hover:scale-105 hover:bg-transparent rounded text-white text-center w-full"
            />
          </div>
        </form>
        </div>
        
    </div>
  )
}

export default new_event