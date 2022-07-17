import './panel.scss';

export interface PanelProps {
  confirmation?: boolean;
  header: string;
  className?: string;
  children: React.ReactNode;
}

export function Panel(props: PanelProps) {
  return (
    <div className={`armeniagov-panel ${props.confirmation ? 'armeniagov-panel--confirmation' : ''} ${props.className ? props.className : ''}`}>
      <h1 className="armeniagov-panel__title">
        { props.header }
      </h1>

      <div className="armeniagov-panel__body">
        { props.children }
      </div>
    </div>
  );
}

export default Panel;
