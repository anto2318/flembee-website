import { MONTHS } from "../../../../helpers";
import moment from "moment";

export function MonthNavigation ({date, setDate}) {

  return (
    <>
      {" "}
      <div
        className="back"
        onClick={() => {
          let newDate = moment(date);
          newDate = newDate.subtract(1, "month").toDate();
          setDate(newDate);
        }}
      >
        <i className="ri-arrow-left-s-line" style={{verticalAlign: 'middle'}} /> {MONTHS[moment(date).subtract(1, "month").format("M") - 1]}
      </div>
      <div className="monthAndYear">
        {MONTHS[moment(date).format("MM") - 1]} {moment(date).format("YYYY")}
      </div>
      <div
        className="forward"
        onClick={() => {
          let newDate = moment(date);
          newDate = newDate.add(1, "month").toDate();
          setDate(newDate);
        }}
      >
        {MONTHS[moment(date).add(1, "month").format("M") - 1]} <i className="ri-arrow-right-s-line" style={{verticalAlign: 'middle'}} />
      </div>
    </>
  );
};
