import styles from './back-link-doc.module.scss';

/* eslint-disable-next-line */
export interface BackLinkDocProps {}

export function BackLinkDoc(props: BackLinkDocProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to BackLinkDoc!</h1>
    </div>
  );
}

export default BackLinkDoc;
