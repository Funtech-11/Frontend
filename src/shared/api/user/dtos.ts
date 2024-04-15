export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
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
