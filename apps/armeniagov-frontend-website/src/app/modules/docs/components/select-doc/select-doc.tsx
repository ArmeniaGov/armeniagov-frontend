import styles from './select-doc.module.scss';

/* eslint-disable-next-line */
export interface SelectDocProps {}

export function SelectDoc(props: SelectDocProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SelectDoc!</h1>
    </div>
  );
}

export default SelectDoc;
