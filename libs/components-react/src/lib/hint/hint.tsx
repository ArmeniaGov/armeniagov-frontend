import './hint.scss';

export interface HintProps {
  children: React.ReactNode;
  className?: string;
}

export function Hint(props: HintProps) {
  return (
    <div className={`armeniagov-hint ${props.className ? props.className : ''}`}>
      { props.children }
    </div>
  );
}

export default Hint;
