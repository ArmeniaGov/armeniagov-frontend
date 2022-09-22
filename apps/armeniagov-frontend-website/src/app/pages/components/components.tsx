import { Outlet } from "react-router-dom";
import { Header, Footer } from '@armeniagov/components-react';

import config from '../../common/config';
import { App, AppNav, AppContent } from '../../common/components';
import { SubNavigation } from '../../common/components';


export function Components() {
  return (
    <>
      <Header serviceName='Թվայնացման ուղեցույց - Բաղադրիչները'/>

      <App>
        <AppNav>
          <SubNavigation navigation={config.subNaviagation}></SubNavigation>
        </AppNav>

        <AppContent>
          <Outlet></Outlet>
        </AppContent>
      </App>

      <Footer/>
    </>
  );
}

export default Components;
