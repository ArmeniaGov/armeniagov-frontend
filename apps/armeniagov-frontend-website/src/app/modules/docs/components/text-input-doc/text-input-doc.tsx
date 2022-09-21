import styles from './text-input-doc.module.scss';

/* eslint-disable-next-line */
export interface TextInputDocProps {}

export function TextInputDoc(props: TextInputDocProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TextInputDoc!</h1>
    </div>
  );
}

export default TextInputDoc;
