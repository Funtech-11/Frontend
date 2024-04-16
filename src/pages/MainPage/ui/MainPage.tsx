import React, { useEffect, useState, useMemo, ChangeEvent } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';
import { getEventsCards } from 'src/shared/api/events';
import { selectEvents } from 'src/app/store/reducers/events/model/eventsSlice';
import { TCard } from 'src/widgets/Card/types/type';
import { TOption } from '../types/type';
import { Header } from 'src/widgets/Header';
import { Menu } from 'src/widgets/Menu';
import { Chips } from 'src/widgets/Chips';
import { InputTypeFilter } from 'src/entities/Input/InputTypeFilter';
import { Card } from 'src/widgets/Card';
import { Banner } from 'src/widgets/Banner';
import { Button } from 'src/entities/Button';
import { Footer } from 'src/widgets/Footer';
import { selectUser } from 'src/app/store/reducers/user/model/userSlice';
import { Loader } from 'src/shared/Loader';
import { mockCards } from 'src/utils/mocks/cardsMockData';

import style from './MainPage.module.scss';

const MainPage = () => {
  const [isMenuShown, setMenuShown] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEventsCards());
  }, [dispatch]);

  const { events, isLoading } = useAppSelector(selectEvents);
  const { user } = useAppSelector(selectUser);
  console.log('USER', user);

  // console.log('Получение данных карточек', events);

  let cards = mockCards;

  const [filters, setFilters] = useState({
    theme: 'all',
    eventType: 'all',
    eventFormat: 'all',
    city: 'all',
  });

  const filterCards = (options: TOption, cards: TCard[]) => {
    let array = [];
    const keys = Object.keys(options);
    for (let i = 0; i < keys.length; i++) {
      const field = keys[i];
      cards = cards.filter(card => {
        if (options[field] === 'all') return true;
        if (options[field] !== card[field as keyof TCard]) {
          return false;
        }
        return true;
      });
    }

    return cards;

    // const keys = Object.keys(options);
    // return cards.filter(card => {
    //   for (let i = 0; i < keys.length; i++) {
    //     console.log('length: ', keys.length);
    //     console.log('i: ', i);
    //     const field = keys[i];
    //     if (options[field] === 'all') return true;
    //     if (options[field] !== card[field as keyof TCard]) {
    //       return false;
    //     }
    //     return true;
    //   }
    // });
  };

  const handleChange = (
    // event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    event: ChangeEvent<HTMLInputElement> | SelectChangeEvent<string>
  ) => {
    const {
      target: { name, value },
    } = event;
    setFilters({ ...filters, [name]: value });
  };

  const handleClick = (name: string, value: string) => {
    setFilters({ ...filters, [name]: value });
  };

  cards = useMemo(() => {
    return filterCards(filters, cards);
  }, [filters, cards]);

  useEffect(() => {
    filterCards(filters, cards);
  }, [filters, cards]);

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
