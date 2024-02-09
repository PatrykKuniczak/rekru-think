import { DAYS } from '../../constants.ts';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import CalendarNav from './calendar-nav.tsx';
import DaysContainer from './days-container.tsx';
import useGetHolidays from '../hooks/use-get-holidays.ts';

const LabeledCalendar = ({
  children,
  selectedYear,
  setShouldOpenTimePicker,
}: {
  children: string;
  selectedYear: number;
  setShouldOpenTimePicker: Dispatch<SetStateAction<boolean>>;
}) => {
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedDay, setSelectedDay] = useState(0);
  const holidays = useGetHolidays();

  const validMonthForInput = `${selectedMonth < 9 ? `0${selectedMonth + 1}` : `${selectedMonth + 1}`}`;
  const validDayForInput = `${selectedDay < 10 ? `0${selectedDay}` : `${selectedDay}`}`;

  useEffect(() => {
    if (selectedDay) {
      setShouldOpenTimePicker(true);
    } else {
      setShouldOpenTimePicker(false);
    }
  }, [selectedDay, setShouldOpenTimePicker]);

  return (
    <div className={'w-[326px]'}>
      <label htmlFor={'date'} className={'my-1 inline-block text'}>
        {children}
      </label>
      <input name={'date'} value={`${selectedYear}-${validMonthForInput}-${validDayForInput}`} type={'hidden'} />

      <div className={'flex flex-col p-4 outline'}>
        <CalendarNav
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          setSelectedMonth={setSelectedMonth}
          setSelectedDay={setSelectedDay}
        />

        <div className={'flex justify-between p-3'}>
          {DAYS.map((day, index) => (
            <h1 key={day + index} className={'font-semibold'}>
              {day}
            </h1>
          ))}
        </div>

        <DaysContainer
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          holidays={holidays}
        />
      </div>
    </div>
  );
};

export default LabeledCalendar;
