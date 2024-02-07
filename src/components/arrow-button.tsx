import cn from 'classnames';
import LeftArrow from '../assets/left-arrow.svg';

interface IArrowButtonProps {
  onClick: () => void;
  imgAlt: string;
  disabled: boolean;
  direction: 'right' | 'left';
}

const ArrowButton = ({ onClick, imgAlt, direction, disabled }: IArrowButtonProps) => {
  return (
    <button className={'focus-visible:outline-active'} type={'button'} onClick={onClick} disabled={disabled}>
      <img
        className={cn({ 'p-2 hover:opacity-80': true, 'rotate-180': direction === 'right', 'opacity-80': disabled })}
        src={LeftArrow}
        alt={imgAlt}
      />
    </button>
  );
};

export default ArrowButton;
