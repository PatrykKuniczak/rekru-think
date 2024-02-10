const InfoWithImg = ({
  children,
  imgSrc,
  imgAlt,
  imgClassName = '',
}: {
  children: string;
  imgSrc: string;
  imgAlt: string;
  imgClassName?: string;
}) => (
  <div className={'flex items-center gap-x-2'}>
    <img src={imgSrc} alt={imgAlt} className={imgClassName} />
    <span>{children}</span>
  </div>
);

export default InfoWithImg;
