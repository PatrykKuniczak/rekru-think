import { DUMMY_HOURS } from '../constants.ts';
import { useState } from 'react';
import cn from 'classnames';

const LabeledTimePicker = ({ children }: { children: string }) => {
  const [selectedTime, setSelectedTime] = useState('');

  return (
    <div className={'flex flex-col gap-2'}>
      <label htmlFor={'time'}>{children}</label>
      <input value={selectedTime} name={'time'} type={'hidden'} />

      {DUMMY_HOURS.map(value => (
        <button
          key={value}
          type={'button'}
          onClick={() => setSelectedTime(value)}
          className={cn({
            'px-3 py-1.5 outline hover:outline-active focus-visible:outline-active': true,
            'outline-2 outline-active': selectedTime === value,
          })}>
          {value}
        </button>
      ))}
    </div>
  );
};

export default LabeledTimePicker;
