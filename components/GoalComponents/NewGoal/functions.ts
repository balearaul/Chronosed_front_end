export const constuctGoalObject = (
  creatingGoal: any,
  controlPanel: any,
  parent: any,
  ancestors: any,
  identifier: any
) => {
  let to = {
    time: false,
    date: false,
    val: null,
  };
  let from = {
    time: false,
    date: false,
    val: null,
  };

  if (controlPanel.time) {
    const timeInDbFormat = timeToDbFormat(creatingGoal);
    from = timeInDbFormat.from;
    to = timeInDbFormat.to;
  }

  const newGoalData = {
    data: {
      title: creatingGoal.title,
      from: from,
      to: to,
      parent: parent,
      ancestors: ancestors,
    },
    query_identifier: identifier,
  };
  return newGoalData;
};

export const getTodayObject = () => {
  const today = new Date();
  const today_obj = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    date: today.getDate(),
  };
  return today_obj;
};

export const timeToDbFormat = (timeVal: any) => {
  const has_from_time = timeVal.from.time != false && !!timeVal.from.time.hr;
  const has_to_time = timeVal.to.time != false && !!timeVal.to.time.hr;

  const has_from_date = !!timeVal.from.date;
  const has_to_date = !!timeVal.to.date;

  const has_from = has_from_time || has_from_date;
  const has_to = has_to_time || has_to_date;

  const from: any = {
    date: has_from_date,
    time: has_from_time,
    val: null,
  };

  const to: any = {
    date: has_to_date,
    time: has_to_time,
    val: null,
  };

  if (has_from) {
    from.val = new Date();
    if (has_from_time) {
      from.val.setHours(parseInt(timeVal.from.time.hr));
      if (timeVal.from.time.min) {
        from.val.setMinutes(parseInt(timeVal.from.time.min));
      } else {
        from.val.setMinutes(0);
      }
    }
    if (timeVal.from.date) {
      from.val.setYear(parseInt(timeVal.from.date.year));
      from.val.setMonth(parseInt(timeVal.from.date.month) - 1);
      from.val.setDate(parseInt(timeVal.from.date.date));
    }

    // Contruct to_date only if it has a from_date
    if (has_to) {
      to.val = new Date();
      // Setting the dates to the input values
      if (has_to_time) {
        to.val.setHours(parseInt(timeVal.to.time.hr));
        if (timeVal.to.time.min) {
          to.val.setMinutes(parseInt(timeVal.to.time.min));
        } else {
          to.val.setMinutes(0);
        }
      }

      if (timeVal.to.date) {
        to.val.setYear(parseInt(timeVal.to.date.year));
        to.val.setMonth(parseInt(timeVal.to.date.month) - 1);
        to.val.setDate(parseInt(timeVal.to.date.date));
      }
    }
  }

  return { from: from, to: to };

  // // Entered a value than deleted it but kept the time input section open
  // if (timeVal.from.time.hr == "") {
  //   from_obj.time = false;
  // }
  // if (timeVal.to.time.hr == "") {
  //   to_obj.time = false;
  // }
};
