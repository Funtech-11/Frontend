import { FC, ButtonHTMLAttributes, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import ForwardIcon from 'src/assets/images/components/forward.svg';
import style from './Button.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  path?: string;
  variant?: string; // primary, outlined, text
  hasIcon?: boolean;
  extraClass?: string;
}

const Button: FC<IButtonProps> = ({
  title,
  path,
  variant = 'primary',
  hasIcon = false,
  extraClass,
  ...ButtonHTMLAttributes
}) => {
  const navigate = useNavigate();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (path) {
      navigate(path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <button
      className={`${style.button} ${style[variant]} ${extraClass}`}
      onClick={handleClick}
      {...ButtonHTMLAttributes}
    >
      <span>{title}</span>
      {hasIcon && (
        <div className={style.icon}>
          <ForwardIcon />
        </div>
      )}
    </button>
  );
};

export default Button;
