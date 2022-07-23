import './form-group.scss';

export interface FormGroupProps {
  children: React.ReactNode;
  error?: boolean;
  className?: string;
}

export function FormGroup(props: FormGroupProps) {
  return (
    <div className={`armeniagov-form-group ${props.error ? 'armeniagov-form-group--error' : ''} ${props.className ? props.className : ''}`}>
      { props.children }
    </div>
  );
}

export default FormGroup;
