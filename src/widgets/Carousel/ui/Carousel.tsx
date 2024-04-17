import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import sliderImg1 from 'src/assets/images/slider/slider1.png';
import sliderImg2 from 'src/assets/images/slider/slider2.png';
import sliderImg3 from 'src/assets/images/slider/slider3.png';

import style from './Carousel.module.scss';

const sliderImages = [
  {
    id: 1,
    src: sliderImg1,
    alt: 'фото 1',
  },
  {
    id: 2,
    src: sliderImg2,
    alt: 'фото 2',
  },
  {
    id: 3,
    src: sliderImg3,
    alt: 'фото 3',
  },
  {
    id: 4,
    src: sliderImg1,
    alt: 'фото 1',
  },
  {
    id: 5,
    src: sliderImg2,
    alt: 'фото 2',
  },
  {
    id: 6,
    src: sliderImg3,
    alt: 'фото 3',
  },
];

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <section className={style.container}>
      <h2 className={style.title}>Как это было</h2>
      <div className="slider-container">
        <Slider {...settings}>
          {sliderImages.map(image => (
            <div key={image.id} className={style.box}>
              <img className={style.img} src={image.src} alt={image.alt} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
