import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
  return (
    <div>
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
