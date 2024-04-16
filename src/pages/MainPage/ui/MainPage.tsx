import React, { useEffect, useState, useMemo, ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';
import { getEventsCards } from 'src/shared/api/events';
import { selectEvents } from 'src/app/store/reducers/events/model/eventsSlice';
import { TOption } from '../types/type';
import { Header } from 'src/widgets/Header';
import { Menu } from 'src/widgets/Menu';
import { Chips } from 'src/widgets/Chips';
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

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
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

  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      for (const filterKey in filters) {
        if (filters[filterKey] !== 'all' && filterKey === 'theme') {
          if (event[filterKey].name !== filters[filterKey]) {
            return false;
          }
        } else {
          if (
            filters[filterKey] !== 'all' &&
            event[filterKey as keyof IEvent] !== filters[filterKey]
          ) {
            return false;
          }
        }
      }
      return true;
    });
  }, [events, filters]);

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
              handleChange={handleChange}
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
            />
          </div>
          <ul className={style.cards}>
            {filteredEvents.map((card, index) => (
              <React.Fragment key={index}>
                {index === 9 && <Banner />}
                <li>
                  <Card data={card} />
                </li>
              </React.Fragment>
            ))}
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
