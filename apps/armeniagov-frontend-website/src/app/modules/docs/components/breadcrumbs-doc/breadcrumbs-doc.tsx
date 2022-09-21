import styles from './breadcrumbs-doc.module.scss';

/* eslint-disable-next-line */
export interface BreadcrumbsDocProps {}

export function BreadcrumbsDoc(props: BreadcrumbsDocProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to BreadcrumbsDoc!</h1>
    </div>
  );
}

export default BreadcrumbsDoc;
