import styles from './skip-link-doc.module.scss';

/* eslint-disable-next-line */
export interface SkipLinkDocProps {}

export function SkipLinkDoc(props: SkipLinkDocProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SkipLinkDoc!</h1>
    </div>
  );
}

export default SkipLinkDoc;
