import styles from './phase-banner-doc.module.scss';

/* eslint-disable-next-line */
export interface PhaseBannerDocProps {}

export function PhaseBannerDoc(props: PhaseBannerDocProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PhaseBannerDoc!</h1>
    </div>
  );
}

export default PhaseBannerDoc;
