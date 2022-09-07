const generateControlPanel = (goal: any) => {
  const output = {
    time: false,
    implementedTime: false,
  };
  if (goal.from.date || goal.to.date) {
    output.time = true;
  }
  return output;
};

export { generateControlPanel };
