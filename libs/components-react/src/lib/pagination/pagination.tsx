/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, Fragment } from 'react';
import './pagination.scss';

export interface PaginationProps {
  pageCount: number;
  currentPage: number;
  pageRadius?: number;
  className?: string;
  onPageChange: (page: number) => unknown;
}

export function Pagination(props: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(props.currentPage);

  const pagesToShow: number[] = [];
  const pageRadius = props.pageRadius || 1;
  const firstPage = (currentPage - pageRadius) < 1 ? 1 : (currentPage - pageRadius);
  const lastPage = (currentPage + pageRadius) > props.pageCount ? props.pageCount : (currentPage + pageRadius);

  for(let page = firstPage; page <= lastPage; page++) {
    pagesToShow.push(page);
  }

  const changePage = (page: number) => {
    setCurrentPage(page);
    props.onPageChange(page);
  }

  return (
    <nav
      className={`armeniagov-pagination ${props.className ? props.className : ''}`}
      role="navigation"
      aria-label="results"
    >
      {
        currentPage !== 1 ?
        (
          <div className="armeniagov-pagination__prev" onClick={_ => changePage(currentPage - 1)}>
            <a className="armeniagov-link armeniagov-pagination__link" href="#" rel="prev" onClick={e => e.preventDefault()}>
              <svg className="armeniagov-pagination__icon armeniagov-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
                <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
              </svg>
              <span className="armeniagov-pagination__link-title">Previous</span>
            </a>
          </div>
        ) : ''
      }

      {
        !pagesToShow.includes(1) ?
        (
          <Fragment>
            <li
                className="armeniagov-pagination__item"
                onClick={_ => changePage(1)}
                key={1}
              >
                <a className="armeniagov-link armeniagov-pagination__link" href="#" onClick={e => e.preventDefault()}>
                  { 1 }
                </a>
            </li>

            <li className="armeniagov-pagination__item armeniagov-pagination__item--ellipses">⋯</li>
          </Fragment>
        ) : ''
      }

      <ul className="armeniagov-pagination__list">
        {
          pagesToShow.map(page => (
            <li
              className={`armeniagov-pagination__item ${currentPage === page ? 'armeniagov-pagination__item--current' : ''}`}
              onClick={_ => changePage(page)}
              key={page}
            >
              <a className="armeniagov-link armeniagov-pagination__link" href="#" onClick={e => e.preventDefault()}>
                { page }
              </a>
            </li>
          ))
        }
      </ul>

      {
        !pagesToShow.includes(props.pageCount) ?
        (
          <Fragment>
            <li className="armeniagov-pagination__item armeniagov-pagination__item--ellipses">⋯</li>

            <li
                className="armeniagov-pagination__item"
                onClick={_ => changePage(props.pageCount)}
                key={props.pageCount}
              >
                <a className="armeniagov-link armeniagov-pagination__link" href="#" onClick={e => e.preventDefault()}>
                  { props.pageCount }
                </a>
            </li>
          </Fragment>
        ) : ''
      }

      {
        currentPage !== props.pageCount ?
        (
          <div className="armeniagov-pagination__next" onClick={_ => changePage(currentPage + 1)}>
            <a className="armeniagov-link armeniagov-pagination__link" href="#" rel="next" onClick={e => e.preventDefault()}>
              <span className="armeniagov-pagination__link-title">Next</span>
              <svg className="armeniagov-pagination__icon armeniagov-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
                <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
              </svg>
            </a>
          </div>
        ) : ''
      }
    </nav>
  );
}

export default Pagination;
