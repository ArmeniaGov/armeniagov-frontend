import './table.scss';

export enum WidthOptions {
  'full' = 'armeniagov-!-width-full',
  'half' = 'armeniagov-!-width-one-half',
  'quarter' = 'armeniagov-!-width-one-quarter',

  '1/1' = 'armeniagov-!-width-full',
  '3/4' = 'armeniagov-!-width-three-quarters',
  '2/3' = 'armeniagov-!-width-two-thirds',
  '1/2' = 'armeniagov-!-width-one-half',
  '1/3' = 'armeniagov-!-width-one-third',
  '1/4' = 'armeniagov-!-width-one-quarter'
}

export interface TableProps {
  caption: string;
  captionSize?: 's' | 'm' | 'l' | 'xl'
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
