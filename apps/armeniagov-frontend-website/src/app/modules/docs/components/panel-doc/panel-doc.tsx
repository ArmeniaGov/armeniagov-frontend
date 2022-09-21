import styles from './panel-doc.module.scss';

/* eslint-disable-next-line */
export interface PanelDocProps {}

export function PanelDoc(props: PanelDocProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PanelDoc!</h1>
    </div>
  );
}

export default PanelDoc;
