import './footer.scss';

/* eslint-disable-next-line */
export interface FooterProps {
  links?: {
    title: string;
    url: string;
  }[];

  navigation?: {
    heading: string;
    width: string;
    columns?: 2 | 3;
    links: {
      title: string;
      url: string;
    }[];
  }[];

  metaCustom?: React.ReactNode;
}

function FooterNavigation(props: FooterProps) {
  if (!props.navigation || !props.navigation.length) return null;

  return (
    <>
      <div className="armeniagov-footer__navigation">
        {
          props.navigation.map((item, index) => (
            <div className={`armeniagov-footer__section armeniagov-grid-column-${item.width}`} key={index}>
              <h2 className="armeniagov-footer__heading armeniagov-heading-m">{item.heading}</h2>
              <ul className={`armeniagov-footer__list${item.columns ? ` armeniagov-footer__list--columns-${item.columns}` : ''}`}>
              {
                item.links.map((link, index) => (
                  <li className="armeniagov-footer__list-item" key={index}>
                    <a className="armeniagov-footer__link" href={link.url}>
                      {link.title}
                    </a>
                  </li>
                ))
              }
              </ul>
            </div>
          ))
        }
      </div>
      <hr className="armeniagov-footer__section-break"/>
    </>
  );
}

function FooterLinks(props: FooterProps) {
  if (!props.links || !props.links.length) return null;

  return (
    <>
      <h2 className="armeniagov-visually-hidden">Support links</h2>
      <ul className="armeniagov-footer__inline-list">
        {
          props.links.map((link, index) => (
            <li className="armeniagov-footer__inline-list-item" key={index}>
              <a className="armeniagov-footer__link" href={link.url}>
                {link.title}
              </a>
            </li>
          ))
        }
      </ul>
    </>
  );
}

export function Footer(props: FooterProps) {
  return (
    <footer className="armeniagov-footer " role="contentinfo">
      <div className="armeniagov-width-container">
        <FooterNavigation navigation={props.navigation} />

        <div className="armeniagov-footer__meta">
          <div className="armeniagov-footer__meta-item">
            <div className="armeniagov-footer__copyright-logo"></div>
          </div>

          <div className="armeniagov-footer__meta-item armeniagov-footer__meta-item--grow">
            <FooterLinks links={props.links} />

            {
              props.metaCustom && (
                <div className="armeniagov-footer__meta-custom">
                  { props.metaCustom }
                </div>
              )
            }

            <div className="armeniagov-footer__licence-description">
              Այս կայքը ստեղծվել է <a className="armeniagov-footer__link" href="https://hti.am/">Հայաստանի Հանրապետության բարձր տեխնոլոգիական արդյունաբերության նախարարության</a> թվայնացման թիմի կողմից
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
