import { useState } from 'react';
import './header.scss';

export interface HeaderProps {
  serviceName: React.ReactNode;
  homeHref?: string;
  navigation?: { id?: unknown; title: React.ReactNode; href: string; active?: boolean }[];
  onNavigationChange?: (id: unknown) => unknown;

  className?: string;
  children?: React.ReactNode;
}

export function Header(props: HeaderProps) {
  const [activeNav, setActiveNav] = useState(props.navigation?.find(nav => nav.active));
  const homeHref = props.homeHref || '/';

  return (
    <header className={`armeniagov-header ${props.className ? props.className : ''}`} role="banner">
      <div className="armeniagov-header__container armeniagov-width-container">
        <div className="armeniagov-header__logo">
          <a href={homeHref} className="armeniagov-header__link armeniagov-header__link--homepage">
            <span className="armeniagov-header__logotype">
              <div className="armeniagov-header__logotype-coat-of-arms"></div>

              <span className="armeniagov-header__logotype-text">
                GOV.AM
              </span>
            </span>
          </a>
        </div>

        <div className="armeniagov-header__content">
          <a href={homeHref} className="armeniagov-header__link armeniagov-header__service-name">
            {props.serviceName}
          </a>

          {
            props.navigation && props.navigation.length > 0 ?
            (
              <nav aria-label="Menu" className="armeniagov-header__navigation">
                <button type="button" className="armeniagov-header__menu-button armeniagov-js-header-toggle" aria-controls="navigation" aria-label="Show or hide menu">Menu</button>

                <ul className="armeniagov-header__navigation-list">
                  {
                    props.navigation.map((item, index) => (
                      <li className={`armeniagov-header__navigation-item ${item === activeNav ? 'armeniagov-header__navigation-item--active' : ''}`} key={index}>
                        <a
                          className="armeniagov-header__link"
                          href={item.href}
                          onClick={e => {e.preventDefault(); props.onNavigationChange && props.onNavigationChange(item.id); setActiveNav(item); }}
                        >
                          { item.title }
                        </a>
                      </li>
                    ))
                  }
                </ul>
              </nav>
            ) : ''
          }
        </div>
      </div>

      { props.children }
    </header>
  );
}

export default Header;
