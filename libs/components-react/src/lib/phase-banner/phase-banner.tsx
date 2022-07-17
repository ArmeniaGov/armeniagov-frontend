import './phase-banner.scss';

/* eslint-disable-next-line */
export interface PhaseBannerProps {
  phase: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}

export function PhaseBanner(props: PhaseBannerProps) {
  return (
    <div className={`armeniagov-phase-banner ${props.className ? props.className : ''}`}>
      <p className="armeniagov-phase-banner__content">
        <strong className="armeniagov-tag armeniagov-phase-banner__content__tag">
          { props.phase }
        </strong>

        <span className="armeniagov-phase-banner__text">
          { props.content }
        </span>
      </p>
    </div>
  );
}

export default PhaseBanner;
