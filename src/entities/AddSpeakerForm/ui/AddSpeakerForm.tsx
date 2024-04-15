import { FormEvent, useState } from 'react';
import { InputTypeText } from 'src/entities/Input/InputTypeText';
import { Button as UploadBtn } from '@mui/joy';
import { Button } from 'src/entities/Button';

import delIcon from 'src/assets/images/admin/delBtn.svg';

import style from './AddSpeakerForm.module.scss';
import { VisuallyHiddenInput } from './styled';

const AddSpeakerForm = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submit');
  };

  const [filePreview, setFilePreview] = useState<string | undefined>(undefined);
  const [fileSize, setFileSize] = useState<number | undefined>(undefined);

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

  const handleDeleteFile = () => {
    setFilePreview(undefined);
    setFileSize(undefined);
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
      <h3 className={style.title}>О спикере</h3>
      <form className={style.formContainer} onSubmit={handleSubmit}>
        <div className={style.row}>
          <InputTypeText
            name="name"
            label="Фамилия и Имя"
            type="text"
            placeholder="Иван Иванов"
            required
          />
          <InputTypeText
            name="job"
            label="Должность"
            type="text"
            placeholder="Бэкенд разработчик"
            required
          />
        </div>
        <div className={style.inputUpload}>
          {!filePreview && (
            <>
              <span className={style.inputUploadText}>
                Добавьте фото спикера
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
                }}
              >
                Выбрать файл
                <VisuallyHiddenInput type="file" onChange={handleFileChange} />
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
        <Button
          title="Добавить спикера"
          type="submit"
          extraClass={style.submit}
        />
      </form>
    </div>
  );
};

export default AddSpeakerForm;
