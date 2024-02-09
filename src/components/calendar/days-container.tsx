import generateDates from '../../utils/generate-dates.ts';
import cn from 'classnames';
import { Dispatch, Fragment, SetStateAction } from 'react';
import { IHolidaysResponse } from '../hooks/use-get-holidays.ts';

interface IDaysContainerProps {
  selectedDay: number;
  selectedMonth: number;
  selectedYear: number;
  setSelectedDay: Dispatch<SetStateAction<number>>;
  holidays: IHolidaysResponse[];
}

const DaysContainer = ({ selectedMonth, selectedDay, selectedYear, setSelectedDay, holidays }: IDaysContainerProps) => {
  return (
    <div className={'grid grid-cols-7 place-items-center gap-0.5'}>
      {generateDates(selectedMonth, selectedYear).map(({ date, formatDate, dateNumber, firstDayOfMonth }, index) => {
        const dayType = holidays.find(val => val.date === formatDate)?.type;
        const isSunday = !date.getDay();

        return (
          <Fragment key={firstDayOfMonth + index}>
            {!index && (
              <div
                key={'blank-place'}
                className={`${!firstDayOfMonth ? 'col-span-6' : firstDayOfMonth === 1 ? 'hidden' : `col-span-${firstDayOfMonth - 1}`}`}></div>
            )}

            <button
              key={index + firstDayOfMonth}
              type={'button'}
              disabled={dayType === 'NATIONAL_HOLIDAY' || isSunday}
              className={cn({
                'h-[30px] w-[30px] rounded-full focus-visible:outline-active disabled:text-secondary': true,
                'bg text-white': selectedDay === dateNumber,
                'hover:bg-inactive': selectedDay !== dateNumber && !dayType && !isSunday,
              })}
              onClick={() => setSelectedDay(dateNumber)}>
              {dateNumber}
            </button>
          </Fragment>
        );
      })}
    </div>
  );
};

export default DaysContainer;
