export const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL
  ? import.meta.env.VITE_REACT_APP_BASE_URL
  : 'http://eventfun.ru';

export interface ILoginUser {
  id?: number;
  username?: string;
  first_name?: string;
  last_name?: string;
  email: string;
  password: string;
}

export const users: ILoginUser[] = [
  {
    id: 1,
    username: 'ADMIN',
    first_name: '',
    last_name: '',
    email: 'super@user.admin',
    password: 'superuser',
  },
  {
    id: 5,
    username: 'User1',
    first_name: 'Елена',
    last_name: 'Сидорова',
    email: 'user1@example.com',
    password: 'passPass123',
  },
  {
    id: 6,
    username: 'User2',
    first_name: 'Владимир',
    last_name: 'Кишенев',
    email: 'user2@example.com',
    password: 'passPass123',
  },
  {
    id: 7,
    username: 'User3',
    first_name: 'Александр',
    last_name: 'Кочевой',
    email: 'user3@example.com',
    password: 'passPass123',
  },
];
