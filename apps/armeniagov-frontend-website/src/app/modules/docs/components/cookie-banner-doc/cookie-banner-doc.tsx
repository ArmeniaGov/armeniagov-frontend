import styles from './cookie-banner-doc.module.scss';

/* eslint-disable-next-line */
export interface CookieBannerDocProps {}

export function CookieBannerDoc(props: CookieBannerDocProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CookieBannerDoc!</h1>
    </div>
  );
}

export default CookieBannerDoc;
