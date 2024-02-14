import { DUMMY_HOURS } from '../constants.ts';
import { useState } from 'react';
import cn from 'classnames';
import { ILabeledInput } from '../interfaces.ts';
import InfoWithImg from './info-with-img.tsx';
import ExclamationMark from '../assets/exclamation-mark.svg';

const LabeledTimePicker = ({ children, errorName, showValidationError, inputName, changeFormValue }: ILabeledInput) => {
  const [selectedTime, setSelectedTime] = useState('');

  return (
    <div className={'flex flex-col gap-2'}>
      <label htmlFor={inputName}>{children}</label>
      <input
        value={selectedTime}
        name={inputName}
        type={'hidden'}
        onChange={event => {
          changeFormValue(inputName, event.target.value);
        }}
      />

      {DUMMY_HOURS.map(value => (
        <button
          key={value}
          type={'button'}
          onClick={() => setSelectedTime(value)}
          className={cn({
            'rounded px-3 py-1.5 outline hover:outline-active focus-visible:outline-active': true,
            'outline-2 outline-active': selectedTime === value,
          })}>
          {value}
        </button>
      ))}
      {showValidationError && (
        <InfoWithImg imgSrc={ExclamationMark} imgAlt={'Invalid name'}>
          {errorName}
        </InfoWithImg>
      )}
    </div>
  );
};

export default LabeledTimePicker;
