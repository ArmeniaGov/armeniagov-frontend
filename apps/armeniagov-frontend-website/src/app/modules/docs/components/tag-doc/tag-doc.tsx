import styles from './tag-doc.module.scss';

/* eslint-disable-next-line */
export interface TagDocProps {}

export function TagDoc(props: TagDocProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TagDoc!</h1>
    </div>
  );
}

export default TagDoc;
