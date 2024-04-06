import avatar1 from 'src/assets/images/avatars/7a75a7f4ce7ffe2442087cde9e578d21.jpeg';
import avatar2 from 'src/assets/images/avatars/94a13d6d6dbce409c86842cd1ee0a9df.jpeg';
import avatar3 from 'src/assets/images/avatars/c6c924661cebf59c7ad44fc4c73ba77c.jpeg';
import avatar4 from 'src/assets/images/avatars/c7e56b3d6a0f8ad4e6b4cf7512d26f21.jpeg';
import avatar5 from 'src/assets/images/avatars/d5416a40d7827c291258f6bb352a2076.jpeg';
import type { TEvent } from '../types/type';

export const event: TEvent = {
  id: 1,
  name: 'Infra Meetup',
  date: '2024-04-05T12:30:45Z',
  numberOfParticipants: 100,
  information:
    'Узнайте о последних инновациях и передовых стратегиях для создания мобильных приложений от ведущих экспертов Яндекса',
  type: 'Митап',
  format: 'Офлайн',
  status: 'Статус мероприятия 1',
  activityStatus: 'Состояние мероприятия 1',
  themes: 'Разработка',
  location: [
    {
      city: 'Москва',
      address: 'ул. Ленинская Слобода, 26, строение 11, Loft 2',
      building: 'LOFT HALL',
      metroStation: 'Автозаводская',
    },
  ],
  programs: [
    {
      id: 1,
      name: 'Оптимизация баз данных',
      time: '2024-04-05T10:00:45Z',
      speaker: [
        {
          name: 'Александр Воронин',
          job: 'Ведущий инженер бэкенда',
          avatar: avatar1,
        },
      ],
      information:
        'Улучшение скорости и эффективность работы баз данных для более быстрой обработки запросов',
      materials: [
        {
          id: 1,
          file: 'uploads/material1.pdf',
        },
      ],
      video: [
        {
          id: 1,
          url: 'https://example.com/video',
        },
      ],
    },
    {
      id: 2,
      name: 'Безопасность веб-приложений',
      time: '2024-04-05T11:00:45Z',
      speaker: [
        {
          name: 'Мария Петрова',
          job: 'Руководитель разработки бэкенд приложений',
          avatar: avatar2,
        },
      ],
      information:
        'Практические советы по обеспечению безопасности приложений и защите от атак',
      materials: [
        {
          id: 1,
          file: 'uploads/material1.pdf',
        },
      ],
      video: [
        {
          id: 1,
          url: 'https://example.com/video',
        },
      ],
    },
    {
      id: 3,
      name: 'Современные технологии кэширования',
      time: '2024-04-05T12:00:45Z',
      speaker: [
        {
          name: 'Екатерина Сидорова',
          job: 'Менеджер бэкенд систем',
          avatar: avatar3,
        },
      ],
      information:
        'Новейшие методов кэширования данных для улучшения производительности',
      materials: [
        {
          id: 1,
          file: 'uploads/material1.pdf',
        },
      ],
      video: [
        {
          id: 1,
          url: 'https://example.com/video',
        },
      ],
    },
    {
      id: 4,
      name: 'Кофе-Брейк',
      time: '2024-04-05T13:00:45Z',
    },
    {
      id: 5,
      name: 'Оптимизация баз данных',
      time: '2024-04-05T14:00:45Z',
      speaker: [
        {
          name: 'Дмитрий Смирнов',
          job: 'Главный архитектор бэкенд систем',
          avatar: avatar4,
        },
      ],
      information:
        'Современные подходы к оптимизации работы сети для повышения производительности',
      materials: [
        {
          id: 1,
          file: 'uploads/material1.pdf',
        },
      ],
      video: [
        {
          id: 1,
          url: 'https://example.com/video',
        },
      ],
    },
    {
      id: 6,
      name: 'Разработка масштабируемых архитектур',
      time: '2024-04-05T15:00:45Z',
      speaker: [
        {
          name: 'Константин Петров',
          job: 'Ведущий разработчик бэкенд систем',
          avatar: avatar5,
        },
      ],
      information:
        'Инструменты создания систем, способных обрабатывать большие объемы данных в реальном времени',
      materials: [
        {
          id: 1,
          file: 'uploads/material1.pdf',
        },
      ],
      video: [
        {
          id: 1,
          url: 'https://example.com/video',
        },
      ],
    },
    {
      id: 7,
      name: 'Нетворкинг',
      time: '2024-04-05T16:00:45Z',
    },
  ],
};
