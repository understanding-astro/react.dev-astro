export const getMonthName = (monthNumber: number) => {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  const formatter = new Intl.DateTimeFormat("en-GB", { month: "long" });

  return formatter.format(date);
};
