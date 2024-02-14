import { useState } from 'react';
import { ILabeledInput } from '../interfaces.ts';
import ExclamationMark from '../assets/exclamation-mark.svg';
import InfoWithImg from './info-with-img.tsx';

interface ILabeledRadioInputProps extends ILabeledInput {
  min: number;
  max: number;
}

const LabeledRadioInput = ({
  children,
  min,
  max,
  showValidationError,
  inputName,
  errorName,
  changeFormValue,
}: ILabeledRadioInputProps) => {
  const [currentValue, setCurrentValue] = useState(min);

  const currentOffset = ((currentValue - min) * 100) / (max - min);
  const offsetFromLeftBorder = `calc(${currentOffset}% + (${8 - currentOffset * 0.15}px))`;

  return (
    <div className={'flex flex-col'}>
      <label className={'mb-4'} htmlFor={inputName}>
        {children}
      </label>
      <input
        id={children}
        name={inputName}
        min={min}
        max={max}
        value={currentValue}
        type={'range'}
        data-before={min}
        data-after={max}
        onChange={event => {
          setCurrentValue(+event.target.value);
          changeFormValue(inputName, event.target.value);
        }}
        style={{
          background: `linear-gradient(to right, #761BE4 ${offsetFromLeftBorder}, #CBB6E5 ${offsetFromLeftBorder})`,
        }}
        className={
          'relative mt-5 h-1 cursor-pointer appearance-none rounded-full accent outline-offset-2 before:absolute before:bottom-4 before:content-[attr(data-before)] after:absolute after:bottom-4 after:right-0 after:content-[attr(data-after)] focus-visible:outline-active dark:bg-inactive'
        }
      />
      <output
        style={{ left: offsetFromLeftBorder }}
        className={
          'relative mt-3 grid h-[33px] w-0 place-items-center justify-center text-active before:absolute before:z-[-1] before:content-numberBubble'
        }>
        {currentValue}
      </output>
      {showValidationError && (
        <InfoWithImg imgSrc={ExclamationMark} imgAlt={'Invalid age information'}>
          {errorName}
        </InfoWithImg>
      )}
    </div>
  );
};

export default LabeledRadioInput;
