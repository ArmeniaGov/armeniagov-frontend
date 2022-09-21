import styles from './checkboxes-doc.module.scss';

/* eslint-disable-next-line */
export interface CheckboxesDocProps {}

export function CheckboxesDoc(props: CheckboxesDocProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CheckboxesDoc!</h1>
    </div>
  );
}

export default CheckboxesDoc;
