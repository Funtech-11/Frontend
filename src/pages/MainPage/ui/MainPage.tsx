import React, { useEffect, useState, useMemo, ChangeEvent } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';
import { getEventsCards } from 'src/shared/api/events';
import { selectEvents } from 'src/app/store/reducers/events/model/eventsSlice';
import { TOption } from '../types/type';
// import { TCard } from 'src/widgets/Card/types/type';
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
import { themeDict } from 'src/utils/const/lib';
import type { TThemeDictionary } from 'src/utils/const/lib';

import style from './MainPage.module.scss';

const MainPage = () => {
  const [isMenuShown, setMenuShown] = useState(false);
  const dispatch = useAppDispatch();

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

  const filterCards = (options: TOption, cards: IEvent[]) => {
    const keys = Object.keys(options);
    for (let i = 0; i < keys.length; i++) {
      const field = keys[i];
      cards = cards.filter(card => {
        if (options[field] === 'all') return true;
        if (options[field] !== card[field as keyof IEvent]) {
          return false;
        }
        return true;
      });
    }

    return cards;
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | SelectChangeEvent<string>
  ) => {
    const {
      target: { name, value },
    } = event;

    const themeEnglish =
      Object.keys(themeDict).find(
        key => themeDict[key as keyof TThemeDictionary] === value
      ) || '';

    setFilters({ ...filters, [name]: themeEnglish });
  };

  const handleClick = (name: string, value: string) => {
    setFilters({ ...filters, [name]: value });
  };

  // const cards = useMemo(() => {
  //   return events.filter(event => {
  //     for (const filterKey in filters) {
  //       if (filters[filterKey] !== 'all' && filterKey === 'theme') {
  //         if (event[filterKey].name !== filters[filterKey]) {
  //           return false;
  //         }
  //       } else {
  //         if (
  //           filters[filterKey] !== 'all' &&
  //           event[filterKey as keyof IEvent] !== filters[filterKey]
  //         ) {
  //           return false;
  //         }
  //       }
  //     }
  //     return true;
  //   });
  // }, [events, filters]);

  const cards = useMemo(() => {
    return filterCards(filters, events);
  }, [filters, events]);

  console.log(events);

  return (
    <div className={style.layout}>
      <Header isMenuShown={isMenuShown} setMenuShown={setMenuShown} />
      <Menu isShown={isMenuShown} />
      {isLoading ? (
        <Loader />
      ) : (
        <div className={style.main}>
          <div className={style.filterBlock}>
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
                options={['Конференция', 'Встреча', 'Митап', 'Экскурсия']}
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
            {cards.map((card, index) => {
              return (
                <React.Fragment key={index}>
                  {index === 9 && <Banner />}
                  <li>
                    <Card data={card} />
                  </li>
                </React.Fragment>
              );
            })}
          </ul>
          <div className={style.moreContentBlock}>
            <Button title="Ещё" hasIcon={true} />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default MainPage;
