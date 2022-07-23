import './button.scss';

export interface ButtonProps {
  start?: boolean;
  secondary?: boolean;
  warning?: boolean;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  const classes = ['armeniagov-button'];

  if(props.start) classes.push('armeniagov-button--start');
  if(props.secondary) classes.push('armeniagov-button--secondary');
  if(props.warning) classes.push('armeniagov-button--warning');
  if(props.disabled) classes.push('armeniagov-button--disabled');
  if(props.className) classes.push(props.className);

  return (
    <button className={classes.join(' ')}>
      <h1>{ props.children }</h1>

      {props.start &&
        <svg className="armeniagov-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19" viewBox="0 0 33 40" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"/>
        </svg>
      }
    </button>
  );
}

export default Button;
