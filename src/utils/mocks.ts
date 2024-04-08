import type { TCard } from 'src/widgets/Card/types/type';

import cardImg1 from 'src/assets/images/mock/1.png';
import cardImg2 from 'src/assets/images/mock/2.png';
import cardImg3 from 'src/assets/images/mock/3.png';
import cardImg4 from 'src/assets/images/mock/4.png';
import cardImg5 from 'src/assets/images/mock/5.png';
import cardImg6 from 'src/assets/images/mock/6.png';
import cardImg7 from 'src/assets/images/mock/7.png';
import cardImg8 from 'src/assets/images/mock/8.png';
import cardImg9 from 'src/assets/images/mock/9.png';
import cardImg10 from 'src/assets/images/mock/10.png';
import cardImg11 from 'src/assets/images/mock/11.png';
import cardImg12 from 'src/assets/images/mock/12.png';

export const mockThemes = [
  'Маркетинг',
  'Разработка',
  'Дизайн',
  'Менеджмент',
  'Бизнес',
  'Аналитика',
  'Другое',
];

export const mockCards: TCard[] = [
  {
    id: 1,
    image: cardImg1,
    status: 'Идёт регистрация',
    format: 'Конференция',
    theme: 'Разработка',
    name: 'Яндекс DEV Хакатон в Москве',
    type: 'Офлайн',
    city: 'Москва',
    date: '26/03/2024, 10:00-19:00',
    information:
      'Ежемесячный сбор разработчиков со всей России для решения задачи от известного заказчика с рынка IT на московском рынке',
  },
  {
    id: 2,
    image: cardImg2,
    status: 'Идёт регистрация',
    format: 'Митап',
    theme: 'Разработка',
    name: 'Yandex Go Frontend Meetup #3',
    type: 'Онлайн',
    city: 'Москва',
    date: '20/04/2024, 10:00 - 15:00',
    information: 'Третий онлайн-митап от фронтенд-команды Яндекс',
  },
  {
    id: 3,
    image: cardImg3,
    status: 'Идёт регистрация',
    format: 'Митап',
    theme: 'Разработка',
    name: 'Infra Meetup #3',
    type: 'Офлайн',
    city: 'Москва',
    date: '12/04/2024, 10:00',
    information:
      'Митап про самые передовые практики и разработки мобильных продуктов',
  },
  {
    id: 4,
    image: cardImg4,
    status: 'Идёт регистрация',
    format: 'Экскурсия',
    theme: 'Другое',
    name: 'Экскурсия в офис Яндекса',
    type: 'Офлайн',
    city: 'Москва',
    date: 'Каждую среду',
    information:
      'Еженедельный тур по офису для студентов IT-направлений и школьников, где увидите, как выглядит наш офис и в какой атмосфере мы создаем продукты, а также узнаете больше о наших сервисах',
  },
  {
    id: 5,
    image: cardImg5,
    status: 'Идёт регистрация',
    format: 'Встреча',
    theme: 'Разработка',
    name: 'Mobile PeerLab #1',
    type: 'Офлайн',
    city: 'Белград',
    date: '13/04/2024, 10:00 - 18:00',
    information:
      'Камерная встреча для мобильных разработчиков, где каждый может предложить кейс для обсуждения',
  },
  {
    id: 6,
    image: cardImg6,
    status: 'Идёт регистрация',
    format: 'Конфереция',
    theme: 'Маркетинг',
    name: 'YaTalks 2024',
    type: 'Офлайн',
    city: 'Санкт-Петербург',
    date: '14/04/2024, 10:00-19:00',
    information:
      'На YaTalks спикеры и участники говорят на одном языке, ведь YaTalks делают инженеры для инженеров. В этом году мы посмотрим на технологии «под капотом», проанализируем меняющие индустрию технотренды, обсудим практики управления в IT и вдохновимся знаковыми научными идеями. Присоединяйтесь!',
  },
  {
    id: 7,
    image: cardImg7,
    status: 'Идёт регистрация',
    format: 'Конференция',
    theme: 'Менеджмент',
    name: 'TeamLead Conf++ 2024',
    type: 'Офлайн',
    city: 'Москва',
    date: '18/04/2024, 10:00 - 18:00',
    information:
      'Самая крупная мультиформатная конференция для тимлидов и руководителей',
  },
  {
    id: 8,
    image: cardImg8,
    status: 'Идёт регистрация',
    format: 'Встреча',
    theme: 'Дизайн',
    name: 'Highload++ Новосибирск',
    type: 'Офлайн',
    city: 'Новосибирск',
    date: '19/04/2024, 12:00 - 15:00',
    information:
      'Этой весной Яндекс — партнер Highload++, на котором помимо докладов мы презентуем свой арт-объект на площадке конференции с активностями и призами',
  },
  {
    id: 9,
    image: cardImg9,
    status: 'Ивент завершён',
    format: 'Конференция',
    theme: 'Разработка',
    name: 'Yandex foodtech tour',
    type: 'Офлайн',
    city: 'Москва',
    date: '10/03/2024, 15:00 - 20:00',
    information: 'Онлайн-митапы по России для разработчиков от разработчиков',
  },
  {
    id: 10,
    image: cardImg10,
    status: 'Идёт регистрация',
    format: 'Встреча',
    theme: 'Аналитика',
    name: 'Data Dojo в Санкт-Петербурге',
    type: 'Офлайн',
    city: 'Санкт-Петербург',
    date: '21/04/2024, 10:00 - 18:00',
    information:
      'Разберём лучшие решения победителей соревнований и попробуем справиться с парой задач, познакомим с новыми людьми и проведём экскурсию по офису Яндекса',
  },
  {
    id: 11,
    image: cardImg11,
    status: 'Идёт регистрация',
    format: 'Конференция',
    theme: 'Разработка',
    name: 'Яндекс Go Day&Night',
    type: 'Офлайн',
    city: 'Москва',
    date: '23/04/2024, 10:00-19:00',
    information:
      'Конференция для мобильных и бэкенд- разработчиков, которая уходит в ночь',
  },
  {
    id: 12,
    image: cardImg12,
    status: 'Идёт регистрация',
    format: 'Конференция',
    theme: 'Разработка',
    name: 'Yandex foodtech tour',
    type: 'Офлайн',
    city: 'Москва',
    date: '10/03/2024, 15:00 - 20:00',
    information: 'Онлайн-митапы по России для разработчиков от разработчиков',
  },
];
