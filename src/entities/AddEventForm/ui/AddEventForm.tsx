import { FormEvent, useState } from 'react';
import { InputTypeText } from 'src/entities/Input/InputTypeText';
import { Button as UploadBtn } from '@mui/joy';

import delIcon from 'src/assets/images/admin/delBtn.svg';

import { Button } from 'src/entities/Button';
import style from './AddEventForm.module.scss';
import { VisuallyHiddenInput } from 'src/entities/AddSpeakerForm/ui/styled';
import EventProgram from 'src/widgets/EventProgram/ui/EventProgram';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { Divider, Grid } from '@mui/material';
import { InputTypeSelect } from 'src/entities/Input/InputTypeSelect';
import { InputTypeTextArea } from 'src/entities/Input/InputTypeTextArea';

const AddPlaceForm = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const [filePreview, setFilePreview] = useState<string | undefined>(undefined);
  const [fileSize, setFileSize] = useState<number | undefined>(undefined);
  const [filePreview2, setFilePreview2] = useState<string | undefined>(
    undefined
  );
  const [fileSize2, setFileSize2] = useState<number | undefined>(undefined);
  const { control } = useFormContext();
  const { fields, remove, append } = useFieldArray({
    control: control,
    name: 'programms',
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFilePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setFileSize(file.size);
    }
  };

  const handleFileChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFilePreview2(reader.result as string);
      };
      reader.readAsDataURL(file);
      setFileSize2(file.size);
    }
  };

  const handleDeleteFile = () => {
    setFilePreview(undefined);
    setFileSize(undefined);
  };

  const handleDeleteFile2 = () => {
    setFilePreview2(undefined);
    setFileSize2(undefined);
  };

  const formatFileSize = (size: number) => {
    if (size < 1024) {
      return `${size} Б`;
    } else if (size < 1048576) {
      return `${(size / 1024).toFixed(2)} КБ`;
    } else {
      return `${(size / 1048576).toFixed(2)} МБ`;
    }
  };

  return (
    <div className={style.wrapper}>
      <h3 className={style.title}>О мероприятии</h3>
      <form className={style.formContainer} onSubmit={handleSubmit}>
        <div className={style.row}>
          <InputTypeText
            name="name"
            label="Название мероприятия"
            type="text"
            placeholder="Ya Go"
            required
          />
          <InputTypeText
            name="type"
            label="Адрес"
            type="text"
            placeholder="Ул. Костюшкина, д. 11"
            required
          />
        </div>
        <Grid container marginLeft={0} justifyContent="space-between">
          <Grid md={5.87}>
            <InputTypeTextArea
              name="description"
              label="Краткое описание мероприятия"
              type="textarea"
              maxLength={200}
              placeholder="Конференция..."
              required
            />
          </Grid>
          <Grid md={5.87}>
            <div className={style.inputUpload} style={{ marginTop: 23 }}>
              {!filePreview && (
                <>
                  <span className={style.inputUploadText}>
                    Добавьте обложку мероприятия
                  </span>
                  <UploadBtn
                    // name="avatar"
                    component="label"
                    role={undefined}
                    tabIndex={-1}
                    variant="outlined"
                    color="neutral"
                    sx={{
                      border: '1px solid #ff5c01',
                      fontFamily: 'San Francisco Pro Text, sans-serif',
                      fontSize: '15px',
                      padding: '14px 20px',
                      fontWeight: '500',
                      '&:hover': {
                        border: '1px solid #1C1C1C',
                      },
                    }}
                  >
                    Выбрать файл
                    <VisuallyHiddenInput
                      type="file"
                      onChange={handleFileChange}
                    />
                  </UploadBtn>

                  <span className={style.inputUploadText}>
                    jpg, png, heic размером не более 100 Мб
                  </span>
                </>
              )}

              {filePreview && (
                <div className={style.fileInfoContainer}>
                  <div className={style.relativeElement}>
                    <div className={style.filePrevContainer}>
                      <img
                        src={filePreview}
                        alt="File Preview"
                        className={style.filePreview}
                      />
                    </div>
                    <div className={style.delBtn} onClick={handleDeleteFile}>
                      <img src={delIcon} />
                    </div>
                  </div>

                  <div className={style.fileInfoTextContainer}>
                    <span className={style.fileInfoText}>
                      {`1 файл, (${formatFileSize(Number(fileSize))})`}{' '}
                    </span>
                    <span className={style.delText} onClick={handleDeleteFile}>
                      Удалить
                    </span>
                  </div>
                </div>
              )}
            </div>
          </Grid>
        </Grid>
        <div className={style.row}>
          <InputTypeSelect
            name="theme"
            label="Тематика"
            options={[
              'Разработка',
              'Дизайн',
              'Менеджмент',
              'Маркетинг',
              'Аналитика',
              'Бизнес',
              'Другое',
            ]}
            required
          />
          <InputTypeSelect
            name="format"
            label="Формат"
            options={['Конференция', 'Митап', 'Нетворкинг', 'Экскурсия']}
            required
          />
        </div>
        <div className={style.row}>
          <InputTypeText
            name="usersCount"
            label="Кол-во участников"
            type="text"
            placeholder="580"
            required
          />
          <InputTypeText
            name="date"
            label="Дата"
            type="date"
            placeholder="21.04.2024"
            required
          />
        </div>
        <div className={style.row}>
          <InputTypeText
            name="startTime"
            label="Время начала"
            type="time"
            placeholder="10:00"
            required
          />
          <InputTypeText
            name="endTime"
            label="Время окончания"
            type="time"
            placeholder="10:00"
            required
          />
        </div>
        <div className={style.row}>
          <InputTypeText
            name="city"
            label="Город"
            type="text"
            placeholder="Москва"
            required
          />
          <InputTypeSelect
            name="place"
            label="Площадка"
            options={['1', '2']}
            required
          />
        </div>
        <Divider />
        <h3 className={style.title}>Программа мероприятия</h3>
        {fields.map((item, index) => (
          <Controller
            key={item.id}
            name={`programms`}
            control={control}
            render={() => <EventProgram onDel={remove} index={index} />}
          />
        ))}
        <Button
          title="Добавить выступление"
          type="button"
          variant="outlined"
          onClick={() => append({})}
          extraClass={style.outfilledBtn}
        />
        <Divider />
        <h3 className={style.title}>Завершение ивента</h3>
        <InputTypeText
          name="link"
          label="Ссылка на запись ивента"
          type="text"
          placeholder="https://www.youtube.com"
        />
        <div className={style.inputUpload}>
          {!filePreview2 && (
            <>
              <span className={style.inputUploadText}>
                Добавьте обложку мероприятия
              </span>
              <UploadBtn
                // name="avatar"
                component="label"
                role={undefined}
                tabIndex={-1}
                variant="outlined"
                color="neutral"
                sx={{
                  border: '1px solid #ff5c01',
                  fontFamily: 'San Francisco Pro Text, sans-serif',
                  fontSize: '15px',
                  padding: '14px 20px',
                  fontWeight: '500',
                  '&:hover': {
                    border: '1px solid #1C1C1C',
                  },
                }}
              >
                Выбрать файл
                <VisuallyHiddenInput type="file" onChange={handleFileChange2} />
              </UploadBtn>

              <span className={style.inputUploadText}>
                jpg, png, heic размером не более 100 Мб
              </span>
            </>
          )}

          {filePreview2 && (
            <div className={style.fileInfoContainer}>
              <div className={style.relativeElement}>
                <div className={style.filePrevContainer}>
                  <img
                    src={filePreview2}
                    alt="File Preview"
                    className={style.filePreview}
                  />
                </div>
                <div className={style.delBtn} onClick={handleDeleteFile2}>
                  <img src={delIcon} />
                </div>
              </div>

              <div className={style.fileInfoTextContainer}>
                <span className={style.fileInfoText}>
                  {`1 файл, (${formatFileSize(Number(fileSize2))})`}{' '}
                </span>
                <span className={style.delText} onClick={handleDeleteFile2}>
                  Удалить
                </span>
              </div>
            </div>
          )}
        </div>
        <div className={style.row}>
          <Button
            title="Создать мероприятие"
            type="submit"
            variant="primary"
            extraClass={style.submit}
          />
          <Button
            title="Сохранить как черновик"
            type="submit"
            variant="outlined"
            extraClass={style.outfilledBtn}
          />
        </div>
      </form>
    </div>
  );
};

export default AddPlaceForm;
