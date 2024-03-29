import './table.scss';
import { SizeOptions, WidthOptions } from '../../common/types';

export interface TableProps {
  caption: string;
  captionSize?: SizeOptions;
  headers: {text: string; size?: WidthOptions}[];
  items: string[][];
  className?: string;
}

export function Table(props: TableProps) {
  return (
    <table className={`armeniagov-table ${props.className ? props.className : ''}`}>
      <caption className={`armeniagov-table__caption armeniagov-table__caption--${props.captionSize ? props.captionSize : 'l'}`}>
        { props.caption }
      </caption>
      <thead className="armeniagov-table__head">
        <tr className="armeniagov-table__row">
          {
            props.headers.map((header, index) => (
              <th key={index} scope="col" className={`armeniagov-table__header ${header.size ? header.size : ''}`}>{ header.text }</th>
            ))
          }
        </tr>
      </thead>
      <tbody className="armeniagov-table__body">
          {
            props.items.map((item, index) => (
              <tr className="armeniagov-table__row" key={index}>
                {
                  item.map((text, index) => (
                    index === 0
                      ? <th scope="row" className="armeniagov-table__header" key={index}>{ text }</th>
                      : <td className="armeniagov-table__cell" key={index}>{ text }</td>
                  ))
                }
              </tr>
            ))
          }
      </tbody>
    </table>
  );
}

export default Table;
