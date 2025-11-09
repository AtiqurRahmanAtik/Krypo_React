
import { Outlet } from 'react-router';

import Footer from './Footer';
import NavigationBar from './NavigationBar';
import Banner from './Banner';

const MainLayout = () => {

    return (
        <div>

          <header className='heroSection container mx-auto'>
              <NavigationBar/>
              <Banner/>
          </header>


            <main> <Outlet/> </main>
            

          <footer>   <Footer/> </footer>

        </div>
    );
};

export default MainLayout;