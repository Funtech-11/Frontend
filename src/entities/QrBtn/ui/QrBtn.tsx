import qrCodeImg from 'src/assets/images/qr-code.jpg';
import style from './QrBtn.module.scss';

const QrBtn = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <button className={style.btn} type="button" onClick={handleClick}>
      <img className={style.img} src={qrCodeImg} alt="QRcode" />
    </button>
  );
};

export default QrBtn;

// функция должна передаваться как пропс...и изображение тоже
