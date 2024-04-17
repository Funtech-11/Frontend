import qrCodeImg from 'src/assets/images/qr-code.jpg';

export interface ITicket {
  id: number;
  name: string;
  type: 'Офлайн' | 'Онлайн';
  city: string;
  date: string;
  format: string;
  theme: string;
  status: string;
  ticket?: string;
}

export const tiketMockData: ITicket[] = [
  {
    id: 1,
    name: 'Infra Meetup #3',
    type: 'Офлайн',
    city: 'Москва',
    date: '2024-06-12T10:00:45Z',
    format: 'Митап',
    theme: 'Разработка',
    status: 'Идёт регистрация',
    ticket: qrCodeImg,
  },
  {
    id: 2,
    name: 'Онлайн конференция «Войти в IT»',
    type: 'Онлайн',
    city: 'Москва',
    date: '2024-05-05T09:00:45Z',
    format: 'Митап',
    theme: 'Разработка',
    status: 'Идёт регистрация',
  },
];

export const currentTiketMockData: ITicket = {
  id: 1,
  name: 'Infra Meetup #3',
  type: 'Офлайн',
  city: 'Москва',
  date: '2024-06-12T10:00:45Z',
  format: 'Митап',
  theme: 'Разработка',
  status: 'Идёт регистрация',
  ticket: qrCodeImg,
};

export const tiketFinishedMockData: ITicket[] = [
  {
    id: 3,
    name: 'Infra Meetup #1',
    type: 'Офлайн',
    city: 'Москва',
    date: '2024-03-12T10:00:45Z',
    format: 'Митап',
    theme: 'Разработка',
    status: 'Завершено',
    ticket: qrCodeImg,
  },
  {
    id: 4,
    name: 'About:сloud — infrastructure',
    type: 'Онлайн',
    city: 'Москва',
    date: '2024-03-05T09:00:45Z',
    format: 'Митап',
    theme: 'Разработка',
    status: 'Завершено',
  },
];
