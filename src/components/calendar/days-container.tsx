import generateDates from '../../utils/generate-dates.ts';
import cn from 'classnames';
import { Dispatch, SetStateAction } from 'react';

interface IDaysContainerProps {
  selectedDay: number;
  selectedMonth: number;
  selectedYear: number;
  setSelectedDay: Dispatch<SetStateAction<number>>;
}

const DaysContainer = ({ selectedMonth, selectedDay, selectedYear, setSelectedDay }: IDaysContainerProps) => {
  return (
    <div className={'grid grid-cols-7 place-items-center gap-0.5'}>
      {generateDates(selectedMonth, selectedYear).map(({ date, firstDayOfMonth }, index) => (
        <>
          {!index && (
            <div
              key={'blank-place'}
              className={`${!firstDayOfMonth ? 'col-span-6' : firstDayOfMonth === 1 ? 'hidden' : `col-span-${firstDayOfMonth - 1}`}`}></div>
          )}

          <button
            key={index + firstDayOfMonth}
            type={'button'}
            className={cn({
              'h-[30px] w-[30px] rounded-full focus-visible:outline-active': true,
              'bg text-white': selectedDay === date,
              'hover:bg-inactive': selectedDay !== date,
            })}
            onClick={() => setSelectedDay(date)}>
            {date}
          </button>
        </>
      ))}
    </div>
  );
};

export default DaysContainer;
