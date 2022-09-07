const processDate = (date: any) => {
  // Creating a new date from date.val
  const newDate = new Date(date.val);
  // Check if the ob
  const hasTime = date.time;
  const hasDate = date.date;

  let dateObj: any = hasDate ? { date: null, month: null, year: null } : false;

  let timeObj: any = hasTime ? { hours: null, minutes: null } : false;

  if (hasDate) {
    dateObj.date = newDate.getDate();
    dateObj.month = newDate.getMonth() + 1;
    dateObj.year = newDate.getFullYear();
  }
  if (hasTime) {
    timeObj.min =
      newDate.getMinutes().toString().length === 1
        ? `0${newDate.getMinutes()}`
        : `${newDate.getMinutes()}`;

    timeObj.hr =
      newDate.getHours().toString().length === 1
        ? `0${newDate.getHours()}`
        : `${newDate.getHours()}`;
  }

  const output = {
    date: dateObj,
    time: timeObj,
  };
  return output;
};

const ObjectToString = (obj: any) => {
  let yearString = String(obj.year);
  let monthString =
    String(obj.month).length === 1 ? `0${obj.month}` : String(obj.month);
  let dateString =
    String(obj.date).length === 1 ? `0${obj.date}` : String(obj.date);
  const output = `${yearString}-${monthString}-${dateString}`;
  return output;
};

export { processDate, ObjectToString };

// INPUT
// {
//      date: true
//      time: true
//      val: "2022-08-21T13:36:27.526Z"
//   },
// }

// OUTPUT
// {
//     date: {date: 21, month: 8, year: 2022},
//     time: {hr: 13, min: 36},
// }
