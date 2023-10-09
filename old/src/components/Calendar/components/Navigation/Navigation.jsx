import moment from "moment";
import { MonthNavigation } from "./";

export function Navigation ({ date, setDate }) {

  const startOfMonth = moment(date).startOf("Month").format("YYYY MM DD");
  let startWeek = moment(startOfMonth).startOf("Week").day(-2);

  let x = [];
  const week = () => {
    for (let i = 1; i <= 7; i++) {
      x.push(moment(startWeek).add(i, "days").format("YYYY MM DD"));
    }
    return x;
  };
  week()

  return (
    <div className="calendarNav">
      <MonthNavigation date={date} setDate={setDate} />
    </div>
  );
};
