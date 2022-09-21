import { NavLink } from "react-router-dom";
import './sub-navigation.scss';


/* eslint-disable-next-line */
export interface SubNavigationProps {
  navigation: {
    title: string;
    path: string;
  }[];
}

export function SubNavigation(props: SubNavigationProps) {
  return (
    <nav className="armeniagov-sub-navigation">
      <h2 className="armeniagov-sub-navigation-heading">Welcome to SubNavigation!</h2>

      <ul className="armeniagov-sub-navigation__section">
        {
          props.navigation.map((item, index) => (
            <li className="armeniagov-sub-navigation__section-item" key={index}>
              <NavLink
                to={item.path}
                className={
                  ({ isActive, isPending }) => {
                    const activeClass = isActive ? "active" : isPending ? "pending" : "";
                    return `${activeClass}`;
                  }
                }
              >
                { item.title }
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}

export default SubNavigation;
