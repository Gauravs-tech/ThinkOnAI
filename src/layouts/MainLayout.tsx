import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer.tsx';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden">
      <Header />
      <main className="grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

