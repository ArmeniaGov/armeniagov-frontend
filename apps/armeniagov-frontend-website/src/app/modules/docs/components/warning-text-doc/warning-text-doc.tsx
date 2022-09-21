import styles from './warning-text-doc.module.scss';

/* eslint-disable-next-line */
export interface WarningTextDocProps {}

export function WarningTextDoc(props: WarningTextDocProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WarningTextDoc!</h1>
    </div>
  );
}

export default WarningTextDoc;
