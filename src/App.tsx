import LabeledInput from './components/labeled-input.tsx';
import LabeledRadioInput from './components/labeled-radio-input.tsx';
import LabeledDragAndDropInput from './components/labeled-drag-and-drop-input.tsx';
import LabeledCalendar from './components/calendar/labeled-calendar.tsx';
import LabeledTimePicker from './components/labeled-time-picker.tsx';
import { useState } from 'react';
import useValidate from './hooks/use-validate.ts';

// TODO: MOZE JAKIS TOAST Z INFO, ZE PRZESZLO POMYSLNIE
// TODO: OPISAC PRZY KOMPONENTACH WIADOOMOSCI ERROROW I WYSWIETLAC JE KIEDY NIE JEST VALID DANY INPUT
function App() {
  const [shouldOpenTimePicker, setShouldOpenTimePicker] = useState(false);
  const { changeFormValue, clearValues, showValidationError, formValues, allInputsAreValid } = useValidate();

  return (
    <div className={'flex h-screen w-screen justify-center'}>
      <form
        className={'flex h-screen w-[426px] flex-col gap-4 pt-[120px]'}
        onSubmit={event => {
          event.preventDefault();

          const formData = new FormData(event.currentTarget);
        }}>
        <h1 className={'mb-2 text-l font-semibold'}> Personal Info </h1>
        <LabeledInput
          errorName={'Value should contain 2-50 characters'}
          showValidationError={showValidationError.firstName}
          inputName={'firstName'}
          changeFormValue={changeFormValue}>
          First Name
        </LabeledInput>
        <LabeledInput
          errorName={'Value should contain 2-50 characters'}
          showValidationError={showValidationError.lastName}
          inputName={'lastName'}
          changeFormValue={changeFormValue}>
          Last Name
        </LabeledInput>
        <LabeledInput
          errorName={'Value should be valid email'}
          showValidationError={showValidationError.email}
          inputName={'email'}
          changeFormValue={changeFormValue}
          inputType={'email'}>
          Email Address
        </LabeledInput>
        <LabeledRadioInput
          errorName={'Value should be between 8-100'}
          min={8}
          max={100}
          showValidationError={showValidationError.age}
          inputName={'age'}
          changeFormValue={changeFormValue}>
          Age
        </LabeledRadioInput>
        <LabeledDragAndDropInput
          errorName={'Cannot be empty, select something'}
          showValidationError={showValidationError.photo}
          inputName={'photo'}
          changeFormValue={changeFormValue}
          formValues={formValues}>
          Photo
        </LabeledDragAndDropInput>
        <h1 className={'text-l font-semibold'}> Your workout </h1>
        <div className={'flex gap-7'}>
          <LabeledCalendar
            errorName={'Cannot be empty, select something'}
            selectedYear={2023}
            setShouldOpenTimePicker={setShouldOpenTimePicker}
            showValidationError={showValidationError.date}
            inputName={'date'}
            changeFormValue={changeFormValue}>
            Date
          </LabeledCalendar>
          {shouldOpenTimePicker && (
            <LabeledTimePicker
              errorName={'Cannot be empty, select something'}
              showValidationError={showValidationError.time}
              inputName={'time'}
              changeFormValue={changeFormValue}>
              Time
            </LabeledTimePicker>
          )}
        </div>
        <button
          className={'rounded bg py-2.5 text-white hover:bg-hover disabled:bg-inactive'}
          disabled={!allInputsAreValid}>
          Send Application
        </button>
      </form>
    </div>
  );
}

export default App;
