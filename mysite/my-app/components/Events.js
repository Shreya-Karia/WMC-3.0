import React from 'react'
const event_data = [
    {
        id: 1,
        event_name : 'Harry Potter Theme Party',
        date: '24/08/2022',
        s_time: '20:00',
        e_time: '23:30',
        event_desc: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
        organizer: 'Ahmedabad University',
        ticket_price: 500, 
    },
    {
        id: 2,
        event_name : 'Harry Potter Theme Party',
        date: '24/08/2022',
        s_time: '20:00',
        e_time: '23:30',
        event_desc: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
        organizer: 'Ahmedabad University',
        ticket_price: 500, 
    },
    {
        id: 3,
        event_name : 'Harry Potter Theme Party',
        date: '24/08/2022',
        s_time: '20:00',
        e_time: '23:30',
        event_desc: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
        organizer: 'Ahmedabad University',
        ticket_price: 500, 
    },
    {
        id: 4,
        event_name : 'Harry Potter Theme Party',
        date: '24/08/2022',
        s_time: '20:00',
        e_time: '23:30',
        event_desc: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
        organizer: 'Ahmedabad University',
        ticket_price: 500, 
    },
    {
        id: 5,
        event_name : 'Harry Potter Theme Party',
        date: '24/08/2022',
        s_time: '20:00',
        e_time: '23:30',
        event_desc: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
        organizer: 'Ahmedabad University',
        ticket_price: 500, 
    },
    {
        id: 6,
        event_name : 'Harry Potter Theme Party',
        date: '24/08/2022',
        s_time: '20:00',
        e_time: '23:30',
        event_desc: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
        organizer: 'Ahmedabad University',
        ticket_price: 500, 
    },
    {
        id: 7,
        event_name : 'Harry Potter Theme Party',
        date: '24/08/2022',
        s_time: '20:00',
        e_time: '23:30',
        event_desc: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
        organizer: 'Ahmedabad University',
        ticket_price: 500, 
    },
    {
        id: 8,
        event_name : 'Harry Potter Theme Party',
        date: '24/08/2022',
        s_time: '20:00',
        e_time: '23:30',
        event_desc: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
        organizer: 'Ahmedabad University',
        ticket_price: 500, 
    },
    {
        id: 9,
        event_name : 'Harry Potter Theme Party',
        date: '24/08/2022',
        s_time: '20:00',
        e_time: '23:30',
        event_desc: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
        organizer: 'Ahmedabad University',
        ticket_price: 500, 
    },
    {
        id: 10,
        event_name : 'Harry Potter Theme Party',
        date: '24/08/2022',
        s_time: '20:00',
        e_time: '23:30',
        event_desc: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
        organizer: 'Ahmedabad University',
        ticket_price: 500, 
    },
    {
        id: 11,
        event_name : 'Harry Potter Theme Party',
        date: '24/08/2022',
        s_time: '20:00',
        e_time: '23:30',
        event_desc: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
        organizer: 'Ahmedabad University',
        ticket_price: 500, 
    }

  ]
const Events = () => {
  return (
    <div className='mx-20 flex flex-col'>
        <h1 className='text-center lg:text-5xl md:text-4xl text-3xl text-[#13547A]'>UPCOMING EVENTS</h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1  gap-x-10 gap-y-12 mt-20 mx-auto pb-10'>
        {event_data.map((e_data) => {
          /*const hreflink = '/blogpost/' + bdata.title */
          return(
              <div key = {e_data.id} className="max-w-sm rounded shadow-lg h-[450px] bg-[#dbf3fa] items-center hover:scale-105 transition duration-300 overflow-hidden">
              <div className="px-6 py-4">
              <div className="font-bold text-[#7918F2] text-2xl mt-4">
                {e_data.event_name}
                  {/* <Link href={hreflink}>{bdata.title}</Link> */}
              </div>
                {/* <L_ink d={bdata.title}/> */}
                <p className="text-[#152238] text-base mt-4"> {e_data.event_desc} </p>
              </div>
              {/* <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{bdata.tag1}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{bdata.tag2}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{bdata.tag3}</span>
              </div> */}
              </div>
          );
        })}
        

      </div>
    </div>
  )
}

export default Events