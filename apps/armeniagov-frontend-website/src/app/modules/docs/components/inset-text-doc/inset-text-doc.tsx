import styles from './inset-text-doc.module.scss';

/* eslint-disable-next-line */
export interface InsetTextDocProps {}

export function InsetTextDoc(props: InsetTextDocProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to InsetTextDoc!</h1>
    </div>
  );
}

export default InsetTextDoc;
