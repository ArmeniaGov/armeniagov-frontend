import styles from './pagination-doc.module.scss';

/* eslint-disable-next-line */
export interface PaginationDocProps {}

export function PaginationDoc(props: PaginationDocProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PaginationDoc!</h1>
    </div>
  );
}

export default PaginationDoc;
