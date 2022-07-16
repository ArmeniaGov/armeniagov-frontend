import './select.scss';

/* eslint-disable-next-line */
export interface SelectProps {
  id: string;
  title: string;
  hint?: string;
  options: { text: string; value: string }[];
}

export function Select(props: SelectProps) {
  return (
    <div className="armeniagov-form-group">
      <label className="armeniagov-label" htmlFor={props.id}>
        {props.title}
      </label>

      <div className="armeniagov-hint">
        {props.hint}
      </div>

      <select className="armeniagov-select" id={props.id} name={props.id}>
        {
          props.options.map(option => (
            <option value={option.value}>{option.text}</option>
          ))
        }
      </select>
    </div>
  );
}

export default Select;
