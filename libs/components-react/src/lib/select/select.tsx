import './select.scss';

export interface SelectProps {
  id: string;
  title: string;
  hint?: string;
  options: { text: string; value: string }[];
  className?: string;
}

export function Select(props: SelectProps) {
  return (
    <div className={`armeniagov-form-group ${props.className ? props.className : ''}`}>
      <label className="armeniagov-label" htmlFor={props.id}>
        {props.title}
      </label>

      <div className="armeniagov-hint">
        {props.hint}
      </div>

      <select className="armeniagov-select" id={props.id} name={props.id}>
        {
          props.options.map((option, index) => (
            <option value={option.value} key={index}>{option.text}</option>
          ))
        }
      </select>
    </div>
  );
}

export default Select;
