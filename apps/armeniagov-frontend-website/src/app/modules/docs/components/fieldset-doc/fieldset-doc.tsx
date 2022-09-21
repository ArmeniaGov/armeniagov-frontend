import styles from './fieldset-doc.module.scss';

/* eslint-disable-next-line */
export interface FieldsetDocProps {}

export function FieldsetDoc(props: FieldsetDocProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FieldsetDoc!</h1>
    </div>
  );
}

export default FieldsetDoc;
