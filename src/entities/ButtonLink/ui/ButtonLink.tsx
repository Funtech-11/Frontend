import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ForwardIcon from 'src/assets/images/components/forward.svg';
import style from './ButtonLink.module.scss';

interface IButtonLinkProps {
  title: string;
  path: string;
  variant?: string; // primary, outlined, text
  hasIcon?: boolean;
  extraClass?: string;
  onClick?: () => void;
}

const ButtonLink: FC<IButtonLinkProps> = ({
  title,
  path,
  variant = 'primary',
  hasIcon = false,
  extraClass,
  onClick,
  ...ButtonHTMLAttributes
}) => {
  const isInternalPath = !/^https?:\/\//.test(path);

  return isInternalPath ? (
    <NavLink
      className={`${style.button} ${style[variant]} ${extraClass}`}
      to={path}
      onClick={onClick}
      {...ButtonHTMLAttributes}
    >
      <span>{title}</span>
      {hasIcon && (
        <div className={style.icon}>
          <ForwardIcon />
        </div>
      )}
    </NavLink>
  ) : (
    <Link
      className={`${style.button} ${style[variant]} ${extraClass}`}
      to={path}
      onClick={onClick}
      {...ButtonHTMLAttributes}
      target="_blank"
    >
      <span>{title}</span>
      {hasIcon && (
        <div className={style.icon}>
          <ForwardIcon />
        </div>
      )}
    </Link>
  );
};

export default ButtonLink;
