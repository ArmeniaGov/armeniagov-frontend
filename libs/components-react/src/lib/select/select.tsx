import './select.scss';

export interface SelectProps {
  name: string;
  options: { text: string; value: string }[];
  className?: string;
}

export function Select(props: SelectProps) {
  return (
    <select className={`armeniagov-select ${props.className ? props.className : ''}`} id={props.name} name={props.name}>
      {
        props.options.map((option, index) => (
          <option value={option.value} key={index}>{option.text}</option>
        ))
      }
    </select>
  );
}

export default Select;
