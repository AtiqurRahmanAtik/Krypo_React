
import { Outlet, useLocation } from 'react-router';

import Footer from './Footer';
import NavigationBar from './NavigationBar';
import Banner from './Banner';

const MainLayout = () => {

          const location = useLocation().pathname === '/';
          // console.log(location.pathname === '/')

    return (
        <div>

         {
          location ?  <header className='heroSection  container mx-auto'>
              <NavigationBar/>
              <Banner/>
          </header> : <NavigationBar/>
         }


            <main className='bg-[#eef4ff] container mx-auto'> <Outlet/> </main>
            

          <footer>   <Footer/> </footer>

        </div>
    );
};

export default MainLayout;