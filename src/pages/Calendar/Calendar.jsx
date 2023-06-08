import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import css from "./Calendar.module.css";
import { eventID } from "../../data/data";
import useCalendar from "../../store/CalendarPage";

const Calendar = () => {
  const { currentEvents, setCurrentEvents } = useCalendar();

  const handleEvents = async (events) => {
    await Promise.resolve(setCurrentEvents(events));
  };

  const handleDateSelect = (select) => {
    let title = prompt("Please enter a title for the event.");
    let calendarApi = select.view.calendar;

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: eventID(),
        title,
        start: select.start,
        end: select.end,
        allDay: select.allDay,
      });
    }
  };

  const handleEventClick = (select) => {
    // eslint-disable-next-line no-restricted-globals
    if (window.confirm("Are you sure you want to delete this event?")) {
      select.event.remove();
    }
  };

  return (
    <div className={css.container}>
      <div>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          allDaySlot={false}
          initialView="timeGridWeek"
          slotDuration={"01:00:00"}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          nowIndicator={true}
          initialEvents={currentEvents}
          eventsSet={handleEvents}
          select={handleDateSelect}
          eventClick={handleEventClick}
        />
      </div>
    </div>
  );
};

export default Calendar;
