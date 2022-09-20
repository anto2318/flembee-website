/* I18n configuration, `languages` and `defaultLanguage` are required currently. */
import moment from 'moment';

// const esFlag = require('@svg/spain.svg');
// const usFlag = require('@svg/usa.svg');

export const MOCK_LOADING_TIME = 1000;
export const SAMPLE_META =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";


export const CellUnits = {
    Day: 0,
    Hour: 1,
};

export const SummaryPos = {
    Top: 0,
    TopRight: 1,
    TopLeft: 2,
    Bottom: 3,
    BottomRight: 4,
    BottomLeft: 5,
};

export const ViewTypes = {
    Day: 0,
    Week: 1,
    Month: 2,
};

export const config = {
    // Base website
    siteName: 'Arambee',
    copyright: `Created by Arambee © Copyright ${moment().format('YYYY')}`,
    apiPrefix: '/api/v1',

    // Language
    // i18n: {
    //     /* Countrys flags: https://www.flaticon.com/packs/countrys-flags */
    //     languages: [
    //         {
    //             key: 'es',
    //             title: 'Español',
    //             flag: esFlag,
    //         },
    //         {
    //             key: 'en',
    //             title: 'English',
    //             flag: usFlag,
    //         },
    //     ],
    //     defaultLanguage: 'en',
    // },
    // Schedule

    displayWeekend: true,

    tableLeftStyle: {
        align: 'left',
        ellipsis: true,
    },

    tableSpan: {
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
    },
    views: [
        {
            viewName: 'Día',
            viewType: ViewTypes.Day,
        },
        {
            viewName: 'Semana',
            viewType: ViewTypes.Week,
        },
        {
            viewName: 'Mes',
            viewType: ViewTypes.Month,
        },
    ],

    shifts: {
        morning: 0,
        afternoon: 1,
        holidays: 2,
        out: 3,
        rest: 4,
        notAssign: -1,
        rotate: 99,
    },

    days: {
        0: 'Monday',
        1: 'Tuesday',
        2: 'Wednesday',
        3: 'Thursday',
        4: 'Friday',
        5: 'Saturday',
        6: 'Sunday',
    },
    dayType: ['morning', 'afternoon', 'out', 'holidays', 'rest', 'notAssign'],
    shiftsType: ['morning', 'afternoon', 'rest', 'notAssign'],
    time: {
        minutes: 'mm',
        hours: 'HH:mm',
        minuteStep: 15,
        day: 'dddd',
        dateYearRight: 'DD-MM-YYYY',
        dateYearLeft: 'YYYY-MM-DD',
        dateHourMin: 'YYYY-MM-DD HH:mm',
        dayStartFrom: 6,
        dayStopTo: 22,
        dayCellHeaderFormat: 'LT',
        monthCellHeaderFormat: 'D',
        weekCellHeaderFormat: 'dddd D MMM',
        hoursFormat: 'HH:mm',
    },
};

export const MONTHS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export const DAYS_SHORT = ["Sábado", "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

export const toStartOfDay = (date) => {
  let newDate = moment(date);
  newDate = newDate.format("YYYY MM DD");
  return newDate;
};

export const pad = (input) => {
  return input < 10 ? "0" + input : input;
};

// I'm using default <input type="datepick-local">,
// so a specific date format is required
export const dateToInputFormat = (date) => {
  if (!date) {
    return null;
  }

  const month = pad(moment(date).format("MM") + 1);
  const day = pad(moment(date).format("DD"));
  const hours = pad(moment(date).format("HH"));
  const minutes = pad(moment(date).format("mm"));

  return `${moment(date).year()}-${month}-${day}T${hours}:${minutes}`;
};

// Could be used to filter out invalid events data also
// (ie. missing properties) or events that can't be parsed
// to contain valid to/from dates
export const parseEvents = (events) => {
  return events.map((event) => {
    const from = moment(event.dateFrom).format("YYYY MM DD HH:mm:ss");
    const to = moment(event.dateTo).format("YYYY MM DD HH:mm:ss");

    return {
      ...event,
      from,
      to,
    };
  });
};

export const findEventsForDate = (events, date) => {
  const dateTime = moment(date).valueOf();
  return events.filter((event) => {
    const eventFromTime = moment(toStartOfDay(event.schedule)).valueOf();
    const eventToTime = moment(toStartOfDay(event.schedule)).valueOf();

    return dateTime >= eventFromTime && dateTime <= eventToTime;
  });
};

