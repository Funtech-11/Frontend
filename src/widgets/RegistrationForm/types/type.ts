export enum Experience {
  NO_EXP = 'Нет опыта',
  ONE_YEAR = 'От 1 года',
  THREE_YEARS = 'От 3 лет',
  FIVE_YEARS = 'От 5 лет',
}

export type TFormValues = {
  name: string;
  surname: string;
  phone: number;
  email: string;
  workPlace: string;
  position: string;
  experience: string;
  educationPrograms: (number | undefined)[];
  userAgreement: (number | undefined)[];
};
