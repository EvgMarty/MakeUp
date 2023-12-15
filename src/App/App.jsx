import styles from './App.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { ROUTES } from '../utils/routes';
import Main from '../pages/Main/Main';
import Price from '../pages/Price/Price';
import Course from '../pages/Course/Course';
import NotFound from '../pages/NotFound/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Routes>
          <Route path={ROUTES.MAIN} element={<MainLayout />}>
            <Route index element={<Main />} />
            <Route path={ROUTES.PRICE} element={<Price />} />
            <Route path={ROUTES.COURSE} element={<Course />} />
          </Route>
          <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
