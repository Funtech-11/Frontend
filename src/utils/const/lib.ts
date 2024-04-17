export type TThemeDictionary = {
  PROGRAMMING: 'Разработка';
  DESIGN: 'Дизайн';
  MANAGEMENT: 'Менеджмент';
  MARKETING: 'Маркетинг';
  ANALYTICS: 'Аналитика';
  BUSINESS: 'Бизнес';
  OTHER: 'Другое';
};

export type TEventTypeDictionary = {
  OFFLINE: 'Офлайн';
  ONLINE: 'Онлайн';
};

export type TEventFormatDictionary = {
  CONFERENCE: 'Конференция';
  MEETUP: 'Митап';
  NETWORKING: 'Нетворкинг';
  EXCURSION: 'Экскурсия';
};

export type TEventStatusDictionary = {
  REGISTRATION_OPEN: string;
  REGISTRATION_CLOSE: string;
  FINISHED: string;
};

export const themeDict: TThemeDictionary = {
  PROGRAMMING: 'Разработка',
  DESIGN: 'Дизайн',
  MANAGEMENT: 'Менеджмент',
  MARKETING: 'Маркетинг',
  ANALYTICS: 'Аналитика',
  BUSINESS: 'Бизнес',
  OTHER: 'Другое',
};

export const eventTypeDict: TEventTypeDictionary = {
  OFFLINE: 'Офлайн',
  ONLINE: 'Онлайн',
};

export const eventFormatDict: TEventFormatDictionary = {
  CONFERENCE: 'Конференция',
  MEETUP: 'Митап',
  NETWORKING: 'Нетворкинг',
  EXCURSION: 'Экскурсия',
};

export const eventStatusDict: TEventStatusDictionary = {
  REGISTRATION_OPEN: 'Регистрация открыта',
  REGISTRATION_CLOSE: 'Регистрация закрыта',
  FINISHED: 'Завершено',
};
