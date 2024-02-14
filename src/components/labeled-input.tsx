import { ILabeledInput } from '../interfaces.ts';
import InfoWithImg from './info-with-img.tsx';
import ExclamationMark from '../assets/exclamation-mark.svg';

const LabeledInput = ({
  children,
  errorName,
  showValidationError,
  inputName,
  changeFormValue,
  inputType,
}: ILabeledInput) => (
  <div className={'flex flex-col'}>
    <label className={'mb-2'} htmlFor={inputName}>
      {children}
    </label>
    <input
      className={'h-[48px] rounded px-1 outline outline-1 focus-visible:outline-active'}
      type={inputType}
      name={inputName}
      onChange={event => {
        changeFormValue(inputName, event.target.value);
      }}
    />
    {showValidationError && (
      <InfoWithImg imgSrc={ExclamationMark} imgAlt={'Validation Error'}>
        {errorName}
      </InfoWithImg>
    )}
  </div>
);

export default LabeledInput;
