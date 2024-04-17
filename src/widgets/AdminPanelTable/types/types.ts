type TSpeaker = {
  id: number;
  avatar: string;
  name: string;
  job: string;
};

type TEvent = {
  id: number;
  name: string;
  status: string;
  theme: string;
  date: string;
  time: string;
  type: string;
  status2?: string;
  registeredNum?: number;
  maxNum?: number;
};

type TPlace = {
  id: number;
  name: string;
  adress: string;
  city: string;
  metroStation?: string;
};

export type { TSpeaker, TEvent, TPlace };
