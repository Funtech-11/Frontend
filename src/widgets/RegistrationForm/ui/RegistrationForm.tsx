import { Experience, TFormValues } from '../types/type';
import { educationPrograms, personalData } from '../utils/utils';
import { InputTypeText } from 'src/entities/Input/InputTypeText';
import { InputTypeSelect } from 'src/entities/Input/InputTypeSelect';
import { CheckboxGroup } from 'src/widgets/CheckboxGroup';
import { Button } from 'src/entities/Button';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import style from './RegistrationForm.module.scss';

const schema = yup.object().shape({
  name: yup.string().required('Введите своё полное имя'),
  surname: yup.string().required('Введите свою фамилию'),
  phone: yup
    .number()
    .typeError('Номер телефона должен содержать только цифры')
    .required('Введите свой номер телефона'),
  email: yup
    .string()
    .email('Почта введена некорректно')
    .required('Введите почту'),
  workPlace: yup
    .string()
    .required('Укажите название компании или учебного заведения'),
  position: yup
    .string()
    .required('Укажите свою должность / учебную специальность'),
  experience: yup
    .string()
    .required('Выберите свой опыт работы без учета обучения'),
  educationPrograms: yup
    .array()
    .of(yup.number())
    .defined()
    .min(1, 'Не выбран ни один из вариантов'),
  userAgreement: yup
    .array()
    .of(yup.number())
    .defined()
    .min(1, 'Согласие на обработку персональных данных обязательно'),
});

const RegistrationForm = () => {
  const methods = useForm<TFormValues>({
    resolver: yupResolver<TFormValues>(schema),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = handleSubmit(data => {
    console.log(data);
  });

  // useEffect(() => {
  //   if (formState.isSubmitSuccessful) {
  //     reset({});
  //   }
  // }, [formState, reset]);

  return (
    <section className={style.sectionWrapper}>
      <h2 className={style.title}>Форма регистрации участника</h2>
      <FormProvider {...methods}>
        <form className={style.formContainer} onSubmit={onSubmit} noValidate>
          <p className={style.legend}>
            Заполните форму один раз для быстрой регистрации на любые
            мероприятия в один клик
          </p>
          <div className={style.row}>
            <InputTypeText
              label="Имя"
              name="name"
              type="text"
              placeholder="Иван"
              errorText={`${errors.name?.message}`}
              required
            />
            <InputTypeText
              label="Фамилия"
              name="surname"
              type="text"
              placeholder="Иванович"
              errorText={`${errors.surname?.message}`}
              required
            />
          </div>
          <div className={style.row}>
            <InputTypeText
              label="Телефон"
              name="phone"
              type="tel"
              placeholder="+7 (123) 456-78-90"
              errorText={`${errors.phone?.message}`}
              required
            />
            <InputTypeText
              label="Email"
              name="email"
              type="email"
              placeholder="IvanVoronin@yandex.ru"
              errorText={`${errors.email?.message}`}
              required
            />
          </div>
          <div className={style.row}>
            <InputTypeText
              label="Место работы / учёбы"
              name="workPlace"
              type="text"
              placeholder="ООО «Компания», МГТУ им. Н.Э. Баумана..."
              errorText={`${errors.workPlace?.message}`}
              required
            />
          </div>
          <div className={style.row}>
            <InputTypeText
              label="Должность"
              name="position"
              type="text"
              placeholder="Разработчик, студент..."
              errorText={`${errors.position?.message}`}
              required
            />
            <InputTypeSelect
              label="Опыт работы"
              name="experience"
              options={Object.values(Experience) as Experience[]}
              errorText={`${errors.experience?.message}`}
              required
            />
          </div>
          <CheckboxGroup
            label="Ваше направление"
            name="educationPrograms"
            options={educationPrograms}
            required={true}
            multiple={true}
            errorText={`${errors.educationPrograms?.message}`}
          />
          <CheckboxGroup
            label="Согласие на обработку персональных данных"
            name="userAgreement"
            options={personalData}
            required={true}
            errorText={`${errors.userAgreement?.message}`}
          />
          <Button title="Сохранить" type="submit" extraClass={style.submit} />
        </form>
      </FormProvider>
    </section>
  );
};

export default RegistrationForm;
