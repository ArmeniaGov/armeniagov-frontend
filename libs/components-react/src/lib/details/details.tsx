import './details.scss';

export interface DetailsProps {
  details: string;
  className?: string;
  children: React.ReactNode;
}

export function Details(props: DetailsProps) {
  return (
    <details className={`armeniagov-details ${props.className ? props.className : ''}`}>
      <summary className="armeniagov-details__summary">
        <span className="armeniagov-details__summary-text">
          { props.children }
        </span>
      </summary>
      <div className="armeniagov-details__text">
        { props.details }
      </div>
    </details>
  );
}

export default Details;
