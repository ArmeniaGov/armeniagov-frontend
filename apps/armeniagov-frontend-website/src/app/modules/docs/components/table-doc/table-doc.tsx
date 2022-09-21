import styles from './table-doc.module.scss';

/* eslint-disable-next-line */
export interface TableDocProps {}

export function TableDoc(props: TableDocProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TableDoc!</h1>
    </div>
  );
}

export default TableDoc;
