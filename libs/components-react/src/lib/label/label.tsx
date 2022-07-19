import './label.scss';
import { SizeOptions } from '../../common/types';

export interface LabelProps {
  size?: SizeOptions;
  for?: string;
  heading?: boolean;

  className?: string;
  children: React.ReactNode;
}

export function Label(props: LabelProps) {
  const size = props.size ? `armeniagov-label--${props.size}` : 'armeniagov-label--l';

  const label = (
    <label className={`armeniagov-label ${size} ${props.className ? props.className : ''}`} htmlFor={ props.for ? props.for : undefined }>
      { props.children }
    </label>
  );

  if(props.heading) return <h1 className="armeniagov-label-wrapper">{ label }</h1>
  else return label;
}

export default Label;
