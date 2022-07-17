import React from 'react';
import './summary-list.scss';

export interface SummaryListProps {
  items: {
    id?: unknown;
    title: React.ReactNode;
    content: React.ReactNode;
    changeable?: boolean;
    changeText?: React.ReactNode;
  }[];
  className?: string;
  onChange?: (id: unknown) => unknown;
}

export function SummaryList(props: SummaryListProps) {
  return (
    <dl className={`armeniagov-summary-list ${props.className ? props.className : ''}`}>
      {
        props.items.map((item, index) => (
          <div className="armeniagov-summary-list__row" key={index}>
            <dt className="armeniagov-summary-list__key">
              { item.title }
            </dt>

            <dd className="armeniagov-summary-list__value">
              { item.content }
            </dd>

            {
              item.changeable ?
              (
                <dd className="armeniagov-summary-list__actions">
                  <a
                    className="armeniagov-link"
                    href="_"
                    onClick={e => {e.preventDefault(); props.onChange && props.onChange(item.id)}}
                  >
                    { item.changeText ? item.changeText : 'Change'}
                  </a>
                </dd>
              ) : ''
            }
          </div>
        ))
      }
    </dl>
  );
}

export default SummaryList;
