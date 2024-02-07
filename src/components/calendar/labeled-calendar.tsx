import { DAYS } from '../../constants.ts';
import { useState } from 'react';
import cn from 'classnames';
import CalendarNav from './calendar-nav.tsx';
import DaysContainer from './days-container.tsx';

const LabeledCalendar = ({ children, selectedYear }: { children: string; selectedYear: number }) => {
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <div className={'w-[326px]'}>
      <span className={'my-1 inline-block text'}>{children}</span>
      <div className={'flex flex-col p-4 outline'}>
        <CalendarNav
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          setSelectedMonth={setSelectedMonth}
          setSelectedDay={setSelectedDay}
        />

        <div className={'flex justify-between p-3'}>
          {DAYS.map((day, index) => (
            <h1 key={day + index} className={cn({ 'font-semibold': true })}>
              {day}
            </h1>
          ))}
        </div>

        <DaysContainer
          selectedDay={selectedDay}
          selectedMonth={selectedMonth}
          setSelectedDay={setSelectedDay}
          selectedYear={selectedYear}
        />
      </div>
    </div>
  );
};

export default LabeledCalendar;
