import styles from './file-upload-doc.module.scss';

/* eslint-disable-next-line */
export interface FileUploadDocProps {}

export function FileUploadDoc(props: FileUploadDocProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FileUploadDoc!</h1>
    </div>
  );
}

export default FileUploadDoc;
