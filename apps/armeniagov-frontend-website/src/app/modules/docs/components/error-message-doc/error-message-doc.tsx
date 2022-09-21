import styles from './error-message-doc.module.scss';

/* eslint-disable-next-line */
export interface ErrorMessageDocProps {}

export function ErrorMessageDoc(props: ErrorMessageDocProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ErrorMessageDoc!</h1>
    </div>
  );
}

export default ErrorMessageDoc;
