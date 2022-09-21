import styles from './button-doc.module.scss';

/* eslint-disable-next-line */
export interface ButtonDocProps {}

export function ButtonDoc(props: ButtonDocProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ButtonDoc!</h1>
    </div>
  );
}

export default ButtonDoc;
