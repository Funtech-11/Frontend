export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  mobile_number: number;
  photo: string;
  workPlace: string;
  position: string;
  experience: 'NO_EXP' | 'ONE_YEAR' | 'THREE_YEARS' | 'FIVE_YEARS' | '';
  participationFormat: 'ONLINE' | 'OFFLINE' | '';
  educationPrograms: {
    stack: number[];
    expertise: number;
  }[];
  userAgreements: {
    id: number;
    agreement: number;
    is_signed: boolean;
    user: number;
  }[];
}

export interface IUserTicket {
  userEventId: {
    userEventId: number;
    event: {
      eventId: number;
      name: string;
      dateTimeStart: string;
      dateTimeEnd: string;
      location: {
        locationId: number;
        city: string;
      };
      eventType: 'OFFLINE' | 'ONLINE' | '';
      eventFormat: 'CONFERENCE' | 'MEETUP' | 'NETWORKING' | 'EXCURSION' | '';
      theme: {
        name:
          | 'PROGRAMMING'
          | 'DESIGN'
          | 'MANAGEMENT'
          | 'MARKETING'
          | 'ANALYTICS'
          | 'BUSINESS'
          | 'OTHER'
          | '';
      };
      video: string;
    };
    agree: boolean;
  };
  user: {
    id: number;
  };
  event: {
    eventId: number;
    name: string;
    dateTimeStart: string;
    dateTimeEnd: string;
    location: { locationId: number; city: string };
    eventType: 'OFFLINE' | 'ONLINE' | '';
    eventFormat: 'CONFERENCE' | 'MEETUP' | 'NETWORKING' | 'EXCURSION' | '';
    theme: {
      name:
        | 'PROGRAMMING'
        | 'DESIGN'
        | 'MANAGEMENT'
        | 'MARKETING'
        | 'ANALYTICS'
        | 'BUSINESS'
        | 'OTHER'
        | '';
    };
    video: string;
  };
  agree: boolean;
  qrCode: string;
}
