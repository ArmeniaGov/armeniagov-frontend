import './notification-banner.scss';

export interface NotificationBannerProps {
  header: string;
  success?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function NotificationBanner(props: NotificationBannerProps) {
  return (
    <div
      className={`armeniagov-notification-banner ${props.success ? 'armeniagov-notification-banner--success' : ''} ${props.className ? props.className : ''}`}
      role="region"
      aria-labelledby="armeniagov-notification-banner-title"
    >
      <div className="armeniagov-notification-banner__header">
        <h2 className="armeniagov-notification-banner__title">
          { props.header }
        </h2>
      </div>

      <div className="armeniagov-notification-banner__content">
        <p className="armeniagov-notification-banner__heading">
          { props.children }
        </p>
      </div>
    </div>
  );
}

export default NotificationBanner;
