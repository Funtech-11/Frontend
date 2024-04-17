import { InputTypeText } from 'src/entities/Input/InputTypeText';
import { Button as UploadBtn } from '@mui/joy';

import closeIcon from 'src/assets/images/icons/closeButton.svg';
import delIcon from 'src/assets/images/admin/delBtn.svg';

import style from './EventProgram.module.scss';
import { useState } from 'react';
import { VisuallyHiddenInput } from 'src/entities/AddSpeakerForm/ui/styled';
import { Button } from '@mui/material';
import { UseFieldArrayRemove } from 'react-hook-form';

type TEventProgramProps = {
  index: number;
  onDel: UseFieldArrayRemove;
};

const EventProgram: React.FC<TEventProgramProps> = ({ index, onDel }) => {
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
    <>
      <div className={style.rowSpaceBetween}>
        <div className={style.title}>Выступление №{index + 1}</div>
        <Button onClick={() => onDel(index)}>
          <img src={closeIcon} />
        </Button>
      </div>
      <InputTypeText
        name={`name${index}`}
        label="Название"
        type="text"
        placeholder="Оптимизация производительности баз данных"
        required={index == 0}
      />
      <div className={style.row}>
        <InputTypeText
          name={`time${index}`}
          label="Время"
          type="time"
          placeholder="10:00"
          required={index == 0}
        />
        <InputTypeText
          name={`speaker${index}`}
          label="Спикер"
          type="text"
          placeholder="Выбрать"
          required={index == 0}
        />
      </div>
      <InputTypeText
        name={`description${index}`}
        label="Краткое описание выступления"
        type="textarea"
        placeholder="О выступлении..."
        required={index == 0}
      />
      <div className={style.inputUpload}>
        {!filePreview && (
          <>
            <span className={style.inputUploadText}>
              Добавьте презентацию спикера в браузер или
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
              <VisuallyHiddenInput type="file" onChange={handleFileChange} />
            </UploadBtn>

            <span className={style.inputUploadText}>
              pptx, pdf, docx размером не более 100 Мб
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
    </>
  );
};

export default EventProgram;
