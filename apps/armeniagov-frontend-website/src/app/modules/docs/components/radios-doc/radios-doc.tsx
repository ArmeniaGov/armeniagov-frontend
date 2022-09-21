import styles from './radios-doc.module.scss';

/* eslint-disable-next-line */
export interface RadiosDocProps {}

export function RadiosDoc(props: RadiosDocProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to RadiosDoc!</h1>
    </div>
  );
}

export default RadiosDoc;
