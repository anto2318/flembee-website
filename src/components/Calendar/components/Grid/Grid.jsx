import { findEventsForDate, toStartOfDay } from "../../../../helpers";
import { MiniEvent } from "../";
import moment from "moment";

export function Grid ({
  date,
  events,
  setViewingEvent,
  actualDate,
}) {

  const ROWS_COUNT = 6;
  const now = moment()
  const currentDate = toStartOfDay(now.format("YYYY MM DD"));
  const nowDate = moment(date);
  let startingMonth = moment(nowDate).startOf("Month");

  let startingDate = moment(startingMonth).startOf("Week").day(-1);
  const dates = [];
  for (let i = 0; i < ROWS_COUNT * 7; i++) {
    const date = moment(startingDate);
    dates.push({ date, events: findEventsForDate(events, date) });
    startingDate = moment(startingDate).add(1, "day");
  }
  return (
    <>
      {dates.map((date, index) => {
        const nowDate = moment(date.date).format("YYYY MM DD");
        const startMonth = moment(actualDate).startOf("Month");
        const endMonth = moment(actualDate).endOf("Month");
        const Y = startMonth.subtract(1, "day")
        return (
          <div
            key={index}
           className={`cell ${
            moment(nowDate).isSame(currentDate, "day")
                ? "current"
                : ""
            } ${
              !moment(date.date).isBetween(Y, endMonth)
                ? "otherMonth"
                : ""
            }`}
          >
            <div className="date">
              {moment(date.date).format("DD")}
            </div>
            {date.events.map((event, index) => (
              <MiniEvent
                key={index}
                event={event}
                setViewingEvent={setViewingEvent}
              />
            ))}
          </div>
        );
      })}
    </>
  );
};
