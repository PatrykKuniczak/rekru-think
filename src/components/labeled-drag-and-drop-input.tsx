import { useDropzone } from 'react-dropzone';
import CloseIcon from '../assets/close-icon.svg';
import { useState } from 'react';

const LabeledDragAndDropInput = ({ children }: { children: string }) => {
  const [files, setFiles] = useState<File[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDropAccepted: files => setFiles(files),
  });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={'flex flex-col gap-2'}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
      <label htmlFor={children} onClick={event => event.stopPropagation()}>
        {children}
      </label>
      <div
        className={
          'grid min-h-[96px] cursor-pointer place-items-center rounded-[8px] outline focus-visible:outline-active'
        }
        {...getRootProps()}>
        <input name={children} {...getInputProps()} />
        {files.length ? (
          <p className={'flex gap-2'}>
            <span>{files[0].name}</span>
            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={event => {
                event.stopPropagation();
                setFiles([]);
                setIsHovered(false);
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
    </div>
  );
};

export default LabeledDragAndDropInput;
