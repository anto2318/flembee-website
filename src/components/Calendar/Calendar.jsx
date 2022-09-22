import { useEffect, useState } from "react";
import { Navigation, DayLabels, Grid } from "./components";
import { Modal } from "./components";

import "./styles.css";

export function Calendar ({ month, year, preloadedEvents }) {
  const selectedDate = new Date(year, month);

  const [date, setDate] = useState(selectedDate);
  const [viewingEvent, setViewingEvent] = useState(false);

  const event = {  
      image: "img06",
      _id: "62ace8d7f207a84452fd2a15",
      name: "Sir Lion Swag",
      description: "Sir Lion Swag es un evento muy cool",
      price: 12,
      host: {
          userImage: "ava01",
          name: "Antonio Nardi",
      },
      space: {
          name: "El Garage Birra",
      }
  }
  
  useEffect(() => {
  }, [date]);

  return (
    <div className="calendar">
      {viewingEvent && <Modal event={event} setViewingEvent={setViewingEvent} />}

      <Navigation
        date={date}
        setDate={setDate}
      />

      <DayLabels />

      <Grid
        date={date}
        events={preloadedEvents}
        setViewingEvent={setViewingEvent}
        actualDate={date}
      />
    </div>
  );
};
