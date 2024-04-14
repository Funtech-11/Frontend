export interface IProgram {
  programId: number;
  name: string; // Program name
  dateTime: string; // ISO date and time format
  speaker: {
    speakerId: number;
    name: string; // Speaker's name
    job: string; // Speaker's job title
    avatar: string; // Speaker's avatar URL
  };
  information: string; // Program information
  event: number; // Associated event ID
  material: string; // Program materials, e.g., URL to presentation or documentation
}

export interface IEvent {
  eventId: number;
  name: string;
  dateTimeStart: string; // ISO date and time format
  dateTimeEnd: string; // ISO date and time format
  location: number; // Location identifier (assumed to be some other object)
  maxParticipants: number;
  currentParticipants: number;
  information: string;
  eventType: 'OFFLINE' | 'ONLINE'; // Event type can be online or offline
  eventFormat: 'CONFERENCE' | 'WORKSHOP' | 'SEMINAR' | 'WEBINAR'; // Event format
  status: string; // Event status (e.g., "active", "cancelled", etc.)
  activityStatus: 'DRAFT' | 'PUBLISHED'; // Activity status of the event
  wallpaper: string; // URL for background image or color scheme
  theme: {
    name: string; // Event theme name
  };
  video: string; // Video URL or stream (if applicable)
  programs: IProgram[]; // Array of event programs
}
