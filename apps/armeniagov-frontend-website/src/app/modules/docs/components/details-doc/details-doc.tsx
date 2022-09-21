import styles from './details-doc.module.scss';

/* eslint-disable-next-line */
export interface DetailsDocProps {}

export function DetailsDoc(props: DetailsDocProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DetailsDoc!</h1>
    </div>
  );
}

export default DetailsDoc;
