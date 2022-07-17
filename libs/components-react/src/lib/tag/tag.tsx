import './tag.scss';

type TagColors = (
  'grey' |
  'green' |
  'turquoise' |
  'blue' |
  'purple' |
  'pink' |
  'red' |
  'orange' |
  'yellow'
);

export interface TagProps {
  color?: TagColors;
  className?: React.ReactNode;
  children: React.ReactNode;
}

export function Tag(props: TagProps) {
  return (
    <strong className={
      `armeniagov-tag ${props.className ? props.className : ''} ${props.color ? 'armeniagov-tag--' + props.color : ''}`
    }>
      { props.children }
    </strong>
  );
}

export default Tag;
