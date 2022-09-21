import styles from './error-summary-doc.module.scss';

/* eslint-disable-next-line */
export interface ErrorSummaryDocProps {}

export function ErrorSummaryDoc(props: ErrorSummaryDocProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ErrorSummaryDoc!</h1>
    </div>
  );
}

export default ErrorSummaryDoc;
