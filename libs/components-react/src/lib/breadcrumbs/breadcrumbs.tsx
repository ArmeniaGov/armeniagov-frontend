/* eslint-disable jsx-a11y/anchor-is-valid */
import './breadcrumbs.scss';

export type BreadcrumbItem = {title: React.ReactNode; href: string};

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  collapseOnMobile?: boolean;

  preventDefault?: boolean;
  onBreadcrumbClick?: (item: BreadcrumbItem) => unknown;
  className?: string;
}

export function Breadcrumbs(props: BreadcrumbsProps) {
  return (
    <div className={`armeniagov-breadcrumbs ${props.className ? props.className : ''} ${props.collapseOnMobile ? 'armeniagov-breadcrumbs--collapse-on-mobile' : ''}`}>
      <ol className="armeniagov-breadcrumbs__list">
        {
          props.items.map((item, index) => (
            <li className="armeniagov-breadcrumbs__list-item" key={index}>
              <a className="armeniagov-breadcrumbs__link" href={item.href} onClick={e => {
                if(props.preventDefault) e.preventDefault();
                if(props.onBreadcrumbClick) props.onBreadcrumbClick(item);
              }}>
                { item.title }
              </a>
            </li>
          ))
        }
      </ol>
    </div>
  );
}

export default Breadcrumbs;
