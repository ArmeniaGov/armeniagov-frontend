import styles from './app.module.scss';
import { Header } from '@armeniagov/components-react';

export function App() {
  return (
    <>
      <Header
        serviceName='ArmeniaGov Design System'
      >
        <div className={styles['search']}>
          SEARCH
        </div>
      </Header>

      <nav className={styles['nav']}>
        <h3 className="armeniagov-heading-m">Tabs</h3>
      </nav>

      <div>
        <p className="armeniagov-body">Components</p>
      </div>
    </>
  );
}

export default App;
