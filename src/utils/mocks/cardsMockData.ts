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

export const mockCards: TCard[] = [
  {
    eventId: 1,
    wallpaper: cardImg1,
    status: 'ACTIVE',
    eventFormat: 'Конференция',
    theme: 'Разработка',
    name: 'Яндекс DEV Хакатон в Москве',
    city: 'Москва',
    eventType: 'OFFLINE',
    dateTimeStart: '26/03/2024, 10:00-19:00',
    dateTimeEnd: '26/03/2024, 10:00-19:00',
    information:
      'Ежемесячный сбор разработчиков со всей России для решения задачи от известного заказчика с рынка IT на московском рынке',
  },
  {
    eventId: 2,
    wallpaper: cardImg2,
    status: 'ACTIVE',
    eventFormat: 'Митап',
    theme: 'Разработка',
    name: 'Yandex Go Frontend Meetup #3',
    city: '',
    eventType: 'ONLINE',
    dateTimeStart: '20/04/2024, 10:00 - 15:00',
    dateTimeEnd: '20/04/2024, 10:00 - 15:00',
    information: 'Третий онлайн-митап от фронтенд-команды Яндекс',
  },
  {
    eventId: 3,
    wallpaper: cardImg3,
    status: 'ACTIVE',
    eventFormat: 'Митап',
    theme: 'Разработка',
    name: 'Infra Meetup #3',
    city: 'Москва',
    eventType: 'OFFLINE',
    dateTimeStart: '12/04/2024, 10:00',
    dateTimeEnd: '12/04/2024, 10:00',
    information:
      'Митап про самые передовые практики и разработки мобильных продуктов',
  },
  {
    eventId: 4,
    wallpaper: cardImg4,
    status: 'ACTIVE',
    eventFormat: 'Экскурсия',
    theme: 'Другое',
    name: 'Экскурсия в офис Яндекса',
    city: 'Москва',
    eventType: 'OFFLINE',
    dateTimeStart: 'Каждую среду',
    dateTimeEnd: 'Каждую среду',
    information:
      'Еженедельный тур по офису для студентов IT-направлений и школьников, где увидите, как выглядит наш офис и в какой атмосфере мы создаем продукты, а также узнаете больше о наших сервисах',
  },
  {
    eventId: 5,
    wallpaper: cardImg5,
    status: 'ACTIVE',
    eventFormat: 'Встреча',
    theme: 'Разработка',
    name: 'Mobile PeerLab #1',
    city: 'Белград',
    eventType: 'OFFLINE',
    dateTimeStart: '13/04/2024, 10:00-18:00',
    dateTimeEnd: '13/04/2024, 10:00-18:00',
    information:
      'Камерная встреча для мобильных разработчиков, где каждый может предложить кейс для обсуждения',
  },
  {
    eventId: 6,
    wallpaper: cardImg6,
    status: 'ACTIVE',
    eventFormat: 'Конференция',
    theme: 'Маркетинг',
    name: 'YaTalks 2024',
    city: 'Санкт-Петербург',
    eventType: 'OFFLINE',
    dateTimeStart: '14/04/2024, 10:00-19:00',
    dateTimeEnd: '14/04/2024, 10:00-19:00',
    information:
      'На YaTalks спикеры и участники говорят на одном языке, ведь YaTalks делают инженеры для инженеров. В этом году мы посмотрим на технологии «под капотом», проанализируем меняющие индустрию технотренды, обсудим практики управления в IT и вдохновимся знаковыми научными идеями. Присоединяйтесь!',
  },
  {
    eventId: 7,
    wallpaper: cardImg7,
    status: 'ACTIVE',
    eventFormat: 'Конференция',
    theme: 'Менеджмент',
    name: 'TeamLead Conf++ 2024',
    city: 'Москва',
    eventType: 'OFFLINE',
    dateTimeStart: '18/04/2024, 10:00-18:00',
    dateTimeEnd: '18/04/2024, 10:00-18:00',
    information:
      'Самая крупная мультиформатная конференция для тимлидов и руководителей',
  },
  {
    eventId: 8,
    wallpaper: cardImg8,
    status: 'ACTIVE',
    eventFormat: 'Встреча',
    theme: 'Дизайн',
    name: 'Highload++ Новосибирск',
    city: 'Новосибирск',
    eventType: 'OFFLINE',
    dateTimeStart: '19/04/2024, 12:00-15:00',
    dateTimeEnd: '19/04/2024, 12:00-15:00',
    information:
      'Этой весной Яндекс — партнер Highload++, на котором помимо докладов мы презентуем свой арт-объект на площадке конференции с активностями и призами',
  },
  {
    eventId: 9,
    wallpaper: cardImg9,
    status: 'FINISHED',
    eventFormat: 'Конференция',
    theme: 'Разработка',
    name: 'Yandex foodtech tour',
    city: 'Москва',
    eventType: 'OFFLINE',
    dateTimeStart: '10/03/2024, 15:00-20:00',
    dateTimeEnd: '10/03/2024, 15:00-20:00',
    information: 'Онлайн-митапы по России для разработчиков от разработчиков',
  },
  {
    eventId: 10,
    wallpaper: cardImg10,
    status: 'ACTIVE',
    eventFormat: 'Встреча',
    theme: 'Аналитика',
    name: 'Data Dojo в Санкт-Петербурге',
    city: 'Санкт-Петербург',
    eventType: 'OFFLINE',
    dateTimeStart: '21/04/2024, 10:00-18:00',
    dateTimeEnd: '21/04/2024, 10:00-18:00',
    information:
      'Разберём лучшие решения победителей соревнований и попробуем справиться с парой задач, познакомим с новыми людьми и проведём экскурсию по офису Яндекса',
  },
  {
    eventId: 11,
    wallpaper: cardImg11,
    status: 'ACTIVE',
    eventFormat: 'Конференция',
    theme: 'Разработка',
    name: 'Яндекс Go Day&Night',
    city: 'Москва',
    eventType: 'OFFLINE',
    dateTimeStart: '23/04/2024, 10:00-19:00',
    dateTimeEnd: '23/04/2024, 10:00-19:00',
    information:
      'Конференция для мобильных и бэкенд- разработчиков, которая уходит в ночь',
  },
  {
    eventId: 12,
    wallpaper: cardImg12,
    status: 'ACTIVE',
    eventFormat: 'Конференция',
    theme: 'Разработка',
    name: 'Yandex foodtech tour',
    city: 'Москва',
    eventType: 'OFFLINE',
    dateTimeStart: '10/03/2024, 15:00-20:00',
    dateTimeEnd: '10/03/2024, 15:00-20:00',
    information: 'Онлайн-митапы по России для разработчиков от разработчиков',
  },
];
