import './inset-text.scss';

export interface InsetTextProps {
  className?: string;
  children: React.ReactNode;
}

export function InsetText(props: InsetTextProps) {
  return (
    <div className={`armeniagov-inset-text ${props.className ? props.className : ''}`}>
      { props.children }
    </div>
  );
}

export default InsetText;
