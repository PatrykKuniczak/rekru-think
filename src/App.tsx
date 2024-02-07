import LabeledInput from './components/labeled-input.tsx';
import LabeledRadioInput from './components/labeled-radio-input.tsx';
import LabeledDragAndDropInput from './components/labeled-drag-and-drop-input.tsx';
import LabeledCalendar from './components/calendar/labeled-calendar.tsx';
import LabeledTimePicker from './components/labeled-time-picker.tsx';
import { useState } from 'react';

function App() {
  const [shouldOpenTimePicker, setShouldOpenTimePicker] = useState(false);

  return (
    <div className={'flex h-screen w-screen justify-center'}>
      <form className={'flex h-screen w-[426px] flex-col gap-4 pt-[120px]'}>
        <h1 className={'mb-2 text-l font-semibold text'}> Personal Info </h1>
        <LabeledInput>First Name</LabeledInput>
        <LabeledInput>Last Name</LabeledInput>
        <LabeledInput>Email Address</LabeledInput>
        <LabeledRadioInput min={8} max={100}>
          Age
        </LabeledRadioInput>
        <LabeledDragAndDropInput>Photo</LabeledDragAndDropInput>
        <h1 className={'text-l font-semibold text'}> Your workout </h1>
        <div className={'flex gap-7'}>
          <LabeledCalendar selectedYear={2023} setShouldOpenTimePicker={setShouldOpenTimePicker}>
            Date
          </LabeledCalendar>
          {shouldOpenTimePicker && <LabeledTimePicker>Time</LabeledTimePicker>}
        </div>
        <button className={'hover: mt-6 rounded bg py-2.5 text-white hover:bg-hover'}>Send Application</button>
      </form>
    </div>
  );
}

export default App;
