import './error-message.scss';

export interface ErrorMessageProps {
  className?: string;
  children: React.ReactNode;
}

export function ErrorMessage(props: ErrorMessageProps) {
  return (
    <p className={`armeniagov-error-message ${props.className ? props.className : ''}`}>
      { props.children }
    </p>
  );
}

export default ErrorMessage;
