import styles from './footer-doc.module.scss';

/* eslint-disable-next-line */
export interface FooterDocProps {}

export function FooterDoc(props: FooterDocProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FooterDoc!</h1>
    </div>
  );
}

export default FooterDoc;
