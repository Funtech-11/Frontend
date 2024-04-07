import { FC } from 'react';

import qrCodeImg from 'src/assets/images/qr-code.jpg';

import style from './QrBtn.module.scss';

type TQrBtnProps = {
  onClick: () => void;
};

const QrBtn: FC<TQrBtnProps> = ({ onClick }) => {
  return (
    <button className={style.btn} type="button" onClick={onClick}>
      <img className={style.img} src={qrCodeImg} alt="QRcode" />
    </button>
  );
};

export default QrBtn;

// функция должна передаваться как пропс...и изображение тоже
