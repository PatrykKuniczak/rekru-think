import ArrowButton from '../arrow-button.tsx';
import { MONTHS } from '../../constants.ts';
import { Dispatch, SetStateAction } from 'react';

interface ICalendarNavProps {
  selectedMonth: number;
  selectedYear: number;
  setSelectedMonth: Dispatch<SetStateAction<number>>;
  setSelectedDay: Dispatch<SetStateAction<number>>;
}

const CalendarNav = ({ selectedMonth, selectedYear, setSelectedMonth, setSelectedDay }: ICalendarNavProps) => {
  return (
    <div className={'mb-2 flex justify-between px-5'}>
      <ArrowButton
        onClick={() => {
          setSelectedMonth(currentMonth => currentMonth - 1);
          setSelectedDay(0);
        }}
        disabled={!selectedMonth}
        imgAlt={'Select next month'}
        direction={'left'}
      />

      <p className={'min-w-[124px] text-center font-semibold'}>
        {MONTHS[selectedMonth]} {selectedYear}
      </p>

      <ArrowButton
        onClick={() => {
          setSelectedMonth(currentMonth => currentMonth + 1);
          setSelectedDay(0);
        }}
        disabled={selectedMonth === 11}
        imgAlt={'Select next month'}
        direction={'right'}
      />
    </div>
  );
};

export default CalendarNav;
