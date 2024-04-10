import { createBrowserRouter } from 'react-router-dom';
import App from 'src/app/ui/App';
import { MainPage } from 'src/pages/MainPage';
import { ErrorPage } from 'src/pages/ErrorPage/ui/ErrorPage';
import { EventPage } from 'src/pages/EventsPage';
import { LoginPage } from 'src/pages/LoginPage';
import { AdminPage } from 'src/pages/AdminPage';
import { UserAccountPage } from 'src/pages/UserAccountPage';
import { VideoPlayerPage } from 'src/pages/VideoPlayerPage';

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
        path: 'admin/:id',
        element: <AdminPage />,
      },
      {
        path: 'user-accaunt/:id',
        element: <UserAccountPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'event/:id',
        element: <EventPage />,
      },
      {
        path: 'video/:id',
        element: <VideoPlayerPage />,
      },
    ],
  },
]);
