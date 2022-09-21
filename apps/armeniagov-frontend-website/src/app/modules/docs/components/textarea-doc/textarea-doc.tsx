import styles from './textarea-doc.module.scss';

/* eslint-disable-next-line */
export interface TextareaDocProps {}

export function TextareaDoc(props: TextareaDocProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TextareaDoc!</h1>
    </div>
  );
}

export default TextareaDoc;
