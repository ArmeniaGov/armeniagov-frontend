import './app.scss';

/* eslint-disable-next-line */
export interface AppProps {
  children: React.ReactElement | React.ReactElement[]
}

export interface AppNavProps {
  children: React.ReactElement | React.ReactElement[]
}

export interface AppContentProps {
  children: React.ReactElement | React.ReactElement[]
}

export function App(props: AppProps) {
  return (
    <div className="armeniagov-frontend-website-app">
      { props.children }
    </div>
  );
}

export function AppNav(props: AppNavProps) {
  return (
    <div className="armeniagov-frontend-website-app-nav">
      { props.children }
    </div>
  );
}

export function AppContent(props: AppContentProps) {
  return (
    <div className="armeniagov-frontend-website-app-content">
      { props.children }
    </div>
  );
}

export default App;
