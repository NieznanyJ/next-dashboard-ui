"use client"

import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/lib/data'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { useState } from 'react'

const localizer = momentLocalizer(moment)



function BigCalendar() {
    const [view, setView] = useState<View>(Views.WORK_WEEK);

    
    return (
        <Calendar
        
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            view={view}
            onView={(newView) => setView(newView as View)}  
            views={["work_week", "day"]} 
            style={{ height: "98%" }}
            min={new Date(0,0,0,8,0,0)}
            max={new Date(0,0,0,17,0,0)}
        />
    )
}

export default BigCalendar
