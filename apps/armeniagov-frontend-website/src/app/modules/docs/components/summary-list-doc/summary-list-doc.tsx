import styles from './summary-list-doc.module.scss';

/* eslint-disable-next-line */
export interface SummaryListDocProps {}

export function SummaryListDoc(props: SummaryListDocProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SummaryListDoc!</h1>
    </div>
  );
}

export default SummaryListDoc;
