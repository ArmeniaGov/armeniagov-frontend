import styles from './notification-banner-doc.module.scss';

/* eslint-disable-next-line */
export interface NotificationBannerDocProps {}

export function NotificationBannerDoc(props: NotificationBannerDocProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to NotificationBannerDoc!</h1>
    </div>
  );
}

export default NotificationBannerDoc;
