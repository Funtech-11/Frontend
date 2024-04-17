import React, { useEffect, useState, useMemo, ChangeEvent } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';
import { getEventsCards } from 'src/shared/api/events';
import { selectEvents } from 'src/app/store/reducers/events/model/eventsSlice';
import { TOption } from '../types/type';
import { Header } from 'src/widgets/Header';
import { Menu } from 'src/widgets/Menu';
import { Chips } from 'src/widgets/Chips';
import { InputTypeFilter } from 'src/entities/Input/InputTypeFilter';
import { Card } from 'src/widgets/Card';
import { Banner } from 'src/widgets/Banner';
import { Button } from 'src/entities/Button';
import { Footer } from 'src/widgets/Footer';
import { Loader } from 'src/shared/Loader';
import { IEvent } from 'src/shared/api/events/dtos';
import { themeDict, eventTypeDict, eventFormatDict } from 'src/utils/const/lib';
import type {
  TThemeDictionary,
  TEventTypeDictionary,
  TEventFormatDictionary,
} from 'src/utils/const/lib';
import { selectUser } from 'src/app/store/reducers/user/model/userSlice';

import style from './MainPage.module.scss';

const MainPage = () => {
  const [isMenuShown, setMenuShown] = useState(false);
  const dispatch = useAppDispatch();

  const { token } = useAppSelector(selectUser);
  const isLoggedIn = !!token;

  useEffect(() => {
    dispatch(getEventsCards());
  }, [dispatch]);

  const { events, isLoading } = useAppSelector(selectEvents);
  const [filters, setFilters] = useState<TOption>({
    theme: 'all',
    eventType: 'all',
    eventFormat: 'all',
    city: 'all',
  });

  const countPerPage = 12;
  const [visible, setVisible] = useState(countPerPage);
  const showMoreCards = () => {
    setVisible(prevValue => prevValue + 12);
  };

  const isButtonHidden = events.length - visible < 0;

  const filterCards = (options: TOption, cards: IEvent[]) => {
    return cards.filter(card => {
      for (const filterKey in options) {
        if (options[filterKey] !== 'all') {
          if (filterKey === 'theme') {
            if (card[filterKey].name !== options[filterKey]) {
              return false;
            }
          } else if (filterKey === 'city') {
            if (card.location?.[filterKey] !== options[filterKey]) {
              return false;
            }
          } else {
            if (card[filterKey as keyof IEvent] !== options[filterKey]) {
              return false;
            }
          }
        }
      }
      return true;
    });
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | SelectChangeEvent<string>
  ) => {
    const {
      target: { name, value },
    } = event;

    const valueEnglish =
      Object.keys(themeDict).find(
        key => themeDict[key as keyof TThemeDictionary] === value
      ) ||
      Object.keys(eventTypeDict).find(
        key => eventTypeDict[key as keyof TEventTypeDictionary] === value
      ) ||
      Object.keys(eventFormatDict).find(
        key => eventFormatDict[key as keyof TEventFormatDictionary] === value
      ) ||
      value;

    setFilters({ ...filters, [name]: valueEnglish });
  };

  const handleClick = (name: string, value: string) => {
    setFilters({ ...filters, [name]: value });
  };

  const cards = useMemo(() => {
    return filterCards(filters, events);
  }, [filters, events]);

  return (
    <div className={style.layout}>
      <Header isMenuShown={isMenuShown} setMenuShown={setMenuShown} />
      <Menu isShown={isMenuShown} />
      {isLoading ? (
        <div className={style.loaderWrapper}>
          <Loader />
        </div>
      ) : (
        <div className={style.main}>
          <div className={style.filterBlock}>
            <div className={style.chipsWrapper}>
              <Chips
                name="theme"
                labels={[
                  'Маркетинг',
                  'Разработка',
                  'Дизайн',
                  'Менеджмент',
                  'Бизнес',
                  'Аналитика',
                  'Другое',
                ]}
                handleChange={handleChange}
                handleClick={handleClick}
              />
            </div>

            <div className={style.filters}>
              <InputTypeFilter
                name="eventType"
                label="Тип мероприятия"
                options={['Онлайн', 'Офлайн']}
                handleFilter={handleChange}
              />
              <InputTypeFilter
                name="eventFormat"
                label="Формат"
                options={['Конференция', 'Нетворкинг', 'Митап', 'Экскурсия']}
                handleFilter={handleChange}
              />
              <InputTypeFilter
                name="city"
                label="Город"
                options={[
                  'Москва',
                  'Санкт-Петербург',
                  'Белград',
                  'Новосибирск',
                  'Казань',
                  'Екатеринбург',
                  'Нижний Новгород',
                  'Сочи',
                  'Ереван',
                ]}
                handleFilter={handleChange}
              />
            </div>
          </div>
          <ul className={style.cards}>
            {cards.slice(0, visible).map((card, index) => {
              return (
                <React.Fragment key={index}>
                  {index === 9 && (
                    <Banner path={isLoggedIn ? 'user-accaunt/:id' : 'login'} />
                  )}
                  <li>
                    <Card data={card} />
                  </li>
                </React.Fragment>
              );
            })}
          </ul>
          <div
            className={`${style.moreContentBlock} ${isButtonHidden && style.hidden}`}
          >
            <Button title="Ещё" hasIcon={true} onClick={showMoreCards} />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default MainPage;
