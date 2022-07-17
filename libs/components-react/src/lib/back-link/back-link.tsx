import './back-link.scss';

export interface BackLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
}

export function BackLink(props: BackLinkProps) {
  return (
    <a
      href={props.href}
      className={`armeniagov-back-link ${props.className ? props.className : ''}`}
      onClick={props.onClick}
    >
      { props.children }
    </a>
  );
}

export default BackLink;
