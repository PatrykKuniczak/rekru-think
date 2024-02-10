import dayjs from 'dayjs';

const generateDates = (month = dayjs().month(), year = dayjs().year()) => {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf('month');
  const lastDateOfMonth = dayjs().year(year).month(month).endOf('month');

  const daysInMonth = lastDateOfMonth.date() - firstDateOfMonth.date() + 1;

  return Array.from({ length: daysInMonth }, (_, i) => ({
    date: firstDateOfMonth.date(i + 1).toDate(),
    formatDate: firstDateOfMonth.date(i + 1).format('YYYY-MM-DD'),
    dateNumber: firstDateOfMonth.date(i + 1).date(),
    firstDayOfMonth: firstDateOfMonth.day(),
  }));
};

export default generateDates;
