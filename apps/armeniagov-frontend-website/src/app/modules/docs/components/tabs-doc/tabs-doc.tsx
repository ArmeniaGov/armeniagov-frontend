import styles from './tabs-doc.module.scss';

/* eslint-disable-next-line */
export interface TabsDocProps {}

export function TabsDoc(props: TabsDocProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TabsDoc!</h1>
    </div>
  );
}

export default TabsDoc;
