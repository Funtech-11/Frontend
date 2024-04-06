import { createBrowserRouter } from 'react-router-dom';
import App from 'src/app/ui/App';
import { MainPage } from 'src/pages/MainPage';
import { ErrorPage } from 'src/pages/ErrorPage/ui/ErrorPage';
import { EventPage } from '../../pages/EventsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: 'event/:id',
        element: <EventPage />,
      },
    ],
  },
]);
