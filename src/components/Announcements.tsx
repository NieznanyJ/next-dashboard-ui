import React from "react";
import Image from "next/image";


const events = [
    {
      id: 1,
      title: 'Morning Yoga',
      time: '2024-08-21T07:00:00',
      description: 'Start your day with a calming yoga session in the park.',
    },
    {
      id: 2,
      title: 'Team Meeting',
      time: '2024-08-21T10:00:00',
      description: 'Weekly team sync-up to discuss project progress and upcoming tasks.',
    },
    {
      id: 3,
      title: 'Lunch with Clients',
      time: '2024-08-21T12:30:00',
      description: 'Business lunch at the downtown bistro with potential clients.',
    },
    {
      id: 4,
      title: 'Workshop: React Basics',
      time: '2024-08-21T15:00:00',
      description: 'An introductory workshop on React.js for beginners.',
    },
  ]

function Announcements() {
    return (
        <div className='bg-white p-4 rounded-md'>
            <div className="flex justify-between items-center w-full mt-6">
                <h1 className="font-bold text-lg">Announcements</h1>
                <span className="text-sm cursor-pointer text-gray-500">View all</span>
            </div>
            <ul className="flex flex-col gap-6 mt-4">
                {events.map((event) => (
                    <li
                        key={event.id}
                        className="rounded-md  odd:bg-sky-regular even:bg-cyellow-regular/70 p-2"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <h2 >{event.title}</h2>
                            <span className="text-sm bg-white rounded-md  p-1 ">{event.time}</span>
                        </div>
                        <p className="text-sm text-gray-500">
                            {event.description}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Announcements;
