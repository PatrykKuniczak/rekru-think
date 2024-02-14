import { useDropzone } from 'react-dropzone';
import CloseIcon from '../assets/close-icon.svg';
import { useState } from 'react';
import { ILabeledInput } from '../interfaces.ts';
import ExclamationMark from '../assets/exclamation-mark.svg';
import InfoWithImg from './info-with-img.tsx';

const LabeledDragAndDropInput = ({
  children,
  errorName,
  showValidationError,
  inputName,
  changeFormValue,
  formValues,
}: ILabeledInput) => {
  const { getRootProps, inputRef, getInputProps } = useDropzone({
    onDropAccepted: (files: File[]) => {
      const fileReader = new FileReader();

      fileReader.readAsArrayBuffer(files[0]);
      fileReader.onload = () => {
        const myFile = new File([fileReader.result as ArrayBuffer], files[0].name, {
          type: 'application/octet-binary',
          lastModified: files[0].lastModified,
        });

        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(myFile);
        inputRef.current!.files = dataTransfer.files;
        changeFormValue(inputName, dataTransfer.files);
      };
    },
  });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={'flex flex-col gap-2'}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
      <label htmlFor={inputName} onClick={event => event.stopPropagation()}>
        {children}
      </label>
      <div
        className={
          'grid min-h-[96px] cursor-pointer place-items-center rounded-[8px] outline focus-visible:outline-active'
        }
        {...getRootProps()}>
        <input name={inputName} type={'file'} className={'hidden'} {...getInputProps()} />
        {formValues.photo?.length ? (
          <p className={'flex gap-2'}>
            <span>{formValues.photo[0].name}</span>
            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={event => {
                event.stopPropagation();
                changeFormValue('photo', new FileList());
                setIsHovered(false);
                inputRef.current!.files = new DataTransfer().files;
              }}
              style={{
                filter: isHovered
                  ? 'invert(31%) sepia(80%) saturate(1374%) hue-rotate(332deg) brightness(100%) contrast(92%)'
                  : 'none',
              }}>
              <img src={CloseIcon} alt={'Unselect file button'} />
            </button>
          </p>
        ) : (
          <p className={'flex gap-1 text-secondary'}>
            <u className={'text-active underline-offset-[3.5px]'}>Upload a file</u> or drag and drop here
          </p>
        )}
      </div>
      {showValidationError && (
        <InfoWithImg imgSrc={ExclamationMark} imgAlt={'Invalid file'}>
          {errorName}
        </InfoWithImg>
      )}
    </div>
  );
};

export default LabeledDragAndDropInput;
