import { Header, Accordion } from '@armeniagov/components-react';
import { SubNavigation } from './components/sub-navigation/sub-navigation';
import config from './common/config';

export function App() {
  return (
    <>
      <Header serviceName='ArmeniaGov Design System'/>

      <SubNavigation navigation={config.subNaviagation}></SubNavigation>

      <Accordion sections={[{
          header: 'Writing well for the web',
          content: <p className="armeniagov-body">This is the content for Writing well for the web.</p>
        }, {
          header: 'This finally works lol',
          summary: 'After countless hours',
          content: <p className="armeniagov-body">Hello pals</p>
        }]}/>
    </>
  );
}

export default App;
