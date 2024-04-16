import {
  IEvent,
  IProgram,
  ILocation,
  ISpeaker,
} from 'src/shared/api/events/dtos';

const initialSpeaker: ISpeaker = {
  speakerId: 0,
  name: '',
  job: '',
  avatar: '',
};

const initialProgram: IProgram = {
  programId: 0,
  name: '',
  dateTime: '',
  speaker: initialSpeaker,
  information: '',
  material: null,
};

const initialLocation: ILocation = {
  locationId: 0,
  city: '',
  address: '',
  building: '',
  metroStation: '',
};

const initialEvent: IEvent = {
  eventId: 0,
  name: '',
  dateTimeStart: '',
  dateTimeEnd: '',
  location: initialLocation,
  maxParticipants: 0,
  currentParticipants: 0,
  information: '',
  eventType: '',
  eventFormat: '',
  status: '',
  activityStatus: '',
  wallpaper: '',
  theme: {
    name: '',
  },
  video: '',
  programs: [initialProgram],
};

export { initialEvent };
