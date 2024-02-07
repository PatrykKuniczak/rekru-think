import dayjs from 'dayjs';

const generateDates = (month = dayjs().month(), year = dayjs().year()) => {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf('month');
  const lastDateOfMonth = dayjs().year(year).month(month).endOf('month');

  const daysInMonth = lastDateOfMonth.date() - firstDateOfMonth.date() + 1;

  return Array.from({ length: daysInMonth }, (_, i) => ({
    date: firstDateOfMonth.date(i + 1),
  }));
};

export default generateDates;
