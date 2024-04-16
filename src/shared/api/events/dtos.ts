interface ILocation {
  locationId: number;
  city: string;
  address: string;
  building: string;
  metroStation: string;
}

interface ISpeaker {
  speakerId: number;
  name: string;
  job: string;
  avatar: string | null;
}

export interface IProgram {
  programId: number;
  name: string;
  dateTime: string;
  speaker: ISpeaker;
  information: string;
  material: string | null;
}

export interface IEvent {
  eventId: number;
  name: string;
  dateTimeStart: string;
  dateTimeEnd: string | null;
  location: ILocation;
  maxParticipants: number;
  currentParticipants: number;
  information: string;
  eventType: 'OFFLINE' | 'ONLINE' | '';
  eventFormat: 'CONFERENCE' | 'MEETUP' | 'NETWORKING' | 'EXCURSION' | '';
  status: 'REGISTRATION_OPEN' | 'REGISTRATION_CLOSE' | 'FINISHED' | '';
  activityStatus: 'DRAFT' | 'ACTIVE_EVENT' | '';
  wallpaper: string | null;
  theme: {
    name:
      | 'PROGRAMMING'
      | 'DESIGN'
      | 'MANAGEMENT'
      | 'MARKETING'
      | 'ANALYTICS'
      | 'BUSINESS'
      | 'OTHER';
  };
  video: string;
  programs: IProgram[];
}
