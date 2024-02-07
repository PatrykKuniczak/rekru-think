import { DAYS } from '../constants.ts';
import generateDates from '../utils/generate-dates.ts';
import dayjs from 'dayjs';

const LabeledCalendar = ({ children }: { children: string }) => (
  <div className={'w-[326px]'}>
    <label className={'my-1 inline-block text'}>{children}</label>
    <div className={'flex flex-col p-4 outline'}>
      <div className={'flex justify-between p-3'}>
        {DAYS.map((day, i) => (
          <h1 key={day + i} className={'font-semibold'}>
            {day}
          </h1>
        ))}
      </div>
      <div className={'grid grid-cols-7'}>
        {generateDates(0, 2023).map(({ date }, index) => {
          const firstDateOfMonth = dayjs().year(2023).month(0).startOf('month').day();

          return (
            <>
              {index === 0 && (
                <div
                  key={'blank'}
                  className={`${!firstDateOfMonth ? 'col-span-6' : firstDateOfMonth === 1 ? 'hidden' : `col-span-${firstDateOfMonth - 1}`}`}></div>
              )}

              <div key={index} className={'p-3 text-center'}>
                <h1>{date.date()}</h1>
              </div>
            </>
          );
        })}
      </div>
    </div>
  </div>
);

export default LabeledCalendar;
