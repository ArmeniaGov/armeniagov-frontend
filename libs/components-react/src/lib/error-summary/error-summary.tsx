import './error-summary.scss';

export interface ErrorSummaryProps {
  title: React.ReactNode;
  errors: React.ReactNode[];

  className?: string;
}

export function ErrorSummary(props: ErrorSummaryProps) {
  return (
    <div className={`armeniagov-error-summary ${props.className ? props.className : ''}`} role="alert">
      <h2 className="armeniagov-error-summary__title">
        { props.title }
      </h2>
      <div className="armeniagov-error-summary__body">
        <ul className="armeniagov-list armeniagov-error-summary__list">
          {
            props.errors.map((error, index) => (
              <li key={index}>
                { error }
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default ErrorSummary;
