import './textarea.scss';

export interface TextareaProps {
  name: string;
  rows?: number;
  value?: string;
  error?: boolean;
  onChange?: (value: string) => unknown;

  className?: string;
}

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      className={`armeniagov-textarea ${props.className ? props.className : ''} ${props.error ? `armeniagov-textarea--error` : ''}`}
      id={props.name}
      name={props.name}
      rows={props.rows}
      defaultValue={props.value}
      onChange={e => {
        if(props.onChange) props.onChange(e.target.value);
      }}
    ></textarea>
  );
}

export default Textarea;
