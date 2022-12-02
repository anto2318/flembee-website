import { useEffect, useState } from "react";
import { Navigation, DayLabels, Grid } from "./components";
import { Modal } from "./components";

import "./styles.css";

export function Calendar ({ month, year, preloadedEvents }) {
  const selectedDate = new Date(year, month);

  const [date, setDate] = useState(selectedDate);
  const [modalHandler, setModalHandler] = useState(false);
  const [dateSelected, setDateSelected] = useState(date);
  
  useEffect(() => {
  }, [date]);

  return (
    <>
      {modalHandler && <Modal setModalHandler={setModalHandler} dateSelected={dateSelected} />}
      <div className="calendar">

        <Navigation
          date={date}
          setDate={setDate}
        />

        <DayLabels />

        <Grid
          date={date}
          events={preloadedEvents}
          setModalHandler={setModalHandler}
          setDateSelected={setDateSelected}
          actualDate={date}
        />
      </div>
    </>
    
  );
};
