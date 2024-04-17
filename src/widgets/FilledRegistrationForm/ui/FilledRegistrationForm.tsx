import { FilledRegistrationFormBody, FilledRegistrationFormTitle } from '..';

import style from './FilledRegistrationForm.module.scss';

const FilledRegistrationForm = () => {
  return (
    <section className={style.sectionWrapper}>
      <FilledRegistrationFormTitle />
      <FilledRegistrationFormBody />
    </section>
  );
};

export default FilledRegistrationForm;
