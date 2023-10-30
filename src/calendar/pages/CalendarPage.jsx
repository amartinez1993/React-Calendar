import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours } from 'date-fns'
import { CalendarEvent, NavBar } from "../"
import { localizer, getMessagesES } from '../../helpers';
import { useState } from 'react';


const events = [{
  title: 'TestEvent',
  notes: 'TestNote',
  start: new Date(),
  end: addHours( new Date(), 2 ),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'testName',
  }
}]

export const CalendarPage = () => {

  const [lastView, setlastView] = useState(localStorage.getItem('lastView') || 'week');

  const eventStyleGetter = ( event, start, end, isSelected ) => {

    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }

  }

  const onDoubleClick = ( event ) => {

  }

  const onSelect = ( event ) => {
    
  }

  const onViewChanged = ( event ) => {
    localStorage.setItem('lastView', event);
    setlastView( event );
  }

  return (
    <>
      <NavBar />

      <Calendar
        culture='es'
        localizer={ localizer }
        events={ events }
        defaultView={ lastView }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px )' }}
        messages={ getMessagesES() }
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelect }
        onView={ onViewChanged }
      />

    </>
  )
}
