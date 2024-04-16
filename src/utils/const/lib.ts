export type EventTypeDictionary = {
  CONFERENCE: 'Конференция';
  MEETUP: 'Митап';
  NETWORKING: 'Нетворкинг';
  EXCURSION: 'Экскурсия';
};

export type TThemeDictionary = {
  PROGRAMMING: 'Разработка';
  DESIGN: 'Дизайн';
  MANAGEMENT: 'Менеджмент';
  MARKETING: 'Маркетинг';
  ANALYTICS: 'Аналитика';
  BUSINESS: 'Бизнес';
  OTHER: 'Другое';
};

export type EventStatusDictionary = {
  REGISTRATION_OPEN: string;
  REGISTRATION_CLOSE: string;
  FINISHED: string;
};

export const eventFormatDict: EventTypeDictionary = {
  CONFERENCE: 'Конференция',
  MEETUP: 'Митап',
  NETWORKING: 'Нетворкинг',
  EXCURSION: 'Экскурсия',
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

export const eventStatus: EventStatusDictionary = {
  REGISTRATION_OPEN: 'Регистрация открыта',
  REGISTRATION_CLOSE: 'Регистрация закрыта',
  FINISHED: 'Завершено',
};
