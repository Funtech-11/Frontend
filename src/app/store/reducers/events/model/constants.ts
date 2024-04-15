import { IEvent, IProgram } from 'src/shared/api/events/dtos';

const initialProgram: IProgram = {
  programId: 0,
  name: '',
  dateTime: '',
  speaker: {
    speakerId: 0,
    name: '',
    job: '',
    avatar: '',
  },
  information: '',
  event: 0,
  material: '',
};

const initialEvent: IEvent = {
  eventId: 0,
  name: '',
  dateTimeStart: '',
  dateTimeEnd: '',
  location: 0,
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
