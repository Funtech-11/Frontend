import { IUser } from 'src/shared/api/user/dtos';

const initialUser: IUser = {
  id: 0,
  firstName: '',
  lastName: '',
  email: '',
  mobile_number: 0,
  photo: '',
  workPlace: '',
  position: '',
  experience: '',
  participationFormat: '',
  educationPrograms: [
    {
      stack: [],
      expertise: 0,
    },
  ],
  userAgreements: [
    {
      id: 0,
      agreement: 0,
      is_signed: false,
      user: 0,
    },
  ],
};

export { initialUser };
