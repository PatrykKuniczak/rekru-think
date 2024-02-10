import { DAYS } from '../../constants.ts';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import CalendarNav from './calendar-nav.tsx';
import DaysContainer from './days-container.tsx';
import useGetHolidays from '../hooks/use-get-holidays.ts';
import InfoWithImg from '../info-with-img.tsx';
import ExclamationMark from '../../assets/exclamation-mark.svg';

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
  const [selectedHolidayInfo, setSelectedHolidayInfo] = useState('');
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
    <div className={'flex min-h-[340px] min-w-[326px] flex-col gap-y-2'}>
      <label htmlFor={'date'}>{children}</label>

      <input name={'date'} value={`${selectedYear}-${validMonthForInput}-${validDayForInput}`} type={'hidden'} />

      <div className={'flex flex-col rounded p-4 outline'}>
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
          setSelectedHolidayInfo={setSelectedHolidayInfo}
        />
      </div>

      {selectedHolidayInfo && (
        <InfoWithImg
          imgSrc={ExclamationMark}
          imgAlt={'Holiday Info'}
          imgClassName={
            'rotate-180 brightness-[97%] saturate-[100%] invert-[35%] sepia-[58%] hue-rotate-[336deg] contrast-[91%]'
          }>
          {selectedHolidayInfo}
        </InfoWithImg>
      )}
    </div>
  );
};

export default LabeledCalendar;
