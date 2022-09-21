import styles from './character-count-doc.module.scss';

/* eslint-disable-next-line */
export interface CharacterCountDocProps {}

export function CharacterCountDoc(props: CharacterCountDocProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CharacterCountDoc!</h1>
    </div>
  );
}

export default CharacterCountDoc;
