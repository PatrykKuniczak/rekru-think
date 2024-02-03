const LabeledInput = ({ children }: { children: string }) => (
  <div className={'flex flex-col'}>
    <label className={'text mb-2'} htmlFor={children}>
      {children}
    </label>
    <input className={'h-[48px] px-1 outline outline-1 focus-visible:outline-active'} name={children} />
  </div>
);

export default LabeledInput;
