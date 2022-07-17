import './warning-text.scss';

export interface WarningTextProps {
  className?: string;
  children: React.ReactNode;
}

export function WarningText(props: WarningTextProps) {
  return (
    <div className="armeniagov-warning-text">
      <span className="armeniagov-warning-text__icon" aria-hidden="true">!</span>
      <strong className="armeniagov-warning-text__text">
        { props.children }
      </strong>
    </div>
  );
}

export default WarningText;
