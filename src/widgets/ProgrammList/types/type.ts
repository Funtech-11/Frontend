// Type for Speaker
type TSpeaker = {
  name: string;
  job: string;
  avatar: string; // It is assumed to be the path to the avatar image
};

// Type for Material
type TMaterial = {
  id: number;
  file: string; // It is assumed to be the path to the material file
};

// Type for Video
type TVideo = {
  id: number;
  url: string;
};

// Type for Program of the event
type TProgram = {
  id: number;
  name: string;
  time: string; // Date and time are represented in ISO 8601 string format
  speaker?: TSpeaker[]; // Array of speakers (optional)
  information?: string; // Program information (optional)
  materials?: TMaterial[]; // Array of materials (optional)
  video?: TVideo[]; // Array of videos (optional)
};

// Type for the location of the event
type TLocation = {
  city: string;
  address: string;
  building: string;
  metroStation: string;
};

// Type for the event
type TEvent = {
  id: number;
  name: string;
  date: string; // Date and time of the event are represented in ISO 8601 string format
  numberOfParticipants: number;
  information: string;
  type: string;
  format: string;
  status: string;
  activityStatus: string;
  themes: string;
  location: TLocation[];
  programs: TProgram[];
};

export type { TEvent, TProgram };
