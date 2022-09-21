import styles from './header-doc.module.scss';

/* eslint-disable-next-line */
export interface HeaderDocProps {}

export function HeaderDoc(props: HeaderDocProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to HeaderDoc!</h1>
    </div>
  );
}

export default HeaderDoc;
