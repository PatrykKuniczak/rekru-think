const LabeledInput = ({ children }: { children: string }) => (
  <div className={'flex flex-col'}>
    <label className={'mb-2'} htmlFor={children}>
      {children}
    </label>
    <input className={'focus-visible:outline-active h-[48px] px-1 outline outline-1'} name={children} />
  </div>
);

export default LabeledInput;
