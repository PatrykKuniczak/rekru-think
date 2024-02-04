import { useRef, useState } from 'react';

const LabeledRadioInput = ({ children, min, max }: { children: string; min: number; max: number }) => {
  const [currentValue, setCurrentValue] = useState(min);
  const ref = useRef<HTMLInputElement>(null);

  const currentOffset = ((currentValue - min) * 100) / (max - min);

  return (
    <div className={'flex flex-col'}>
      <label className={'mb-4'} htmlFor={children}>
        {children}
      </label>
      <input
        id={children}
        ref={ref}
        min={min}
        max={max}
        value={currentValue}
        type={'range'}
        data-before={min}
        data-after={max}
        onChange={value => {
          setCurrentValue(+value.target.value);
        }}
        className={
          'relative mt-5 h-1 cursor-pointer appearance-none rounded-full accent before:absolute before:bottom-4 before:content-[attr(data-before)] after:absolute after:bottom-4 after:right-0 after:content-[attr(data-after)] focus-visible:outline-active dark:bg-inactive'
        }
        name={children}
      />
      <output
        style={{ left: `calc(${currentOffset}% + (${8 - currentOffset * 0.15}px))` }}
        className={
          'text-active relative mt-3 grid h-[33px] w-0 place-items-center justify-center before:absolute before:z-[-1] before:content-numberBubble'
        }>
        {currentValue}
      </output>
    </div>
  );
};

export default LabeledRadioInput;
