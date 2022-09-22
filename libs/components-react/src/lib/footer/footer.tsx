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
          <div className="armeniagov-footer__meta-item armeniagov-footer__meta-item--grow">
            <FooterLinks links={props.links} />

            {
              props.metaCustom && (
                <div className="armeniagov-footer__meta-custom">
                  { props.metaCustom }
                </div>
              )
            }

            <svg aria-hidden="true" focusable="false" className="armeniagov-footer__licence-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 483.2 195.7" height="17" width="41">
              <path fill="currentColor" d="M421.5 142.8V.1l-50.7 32.3v161.1h112.4v-50.7zm-122.3-9.6A47.12 47.12 0 0 1 221 97.8c0-26 21.1-47.1 47.1-47.1 16.7 0 31.4 8.7 39.7 21.8l42.7-27.2A97.63 97.63 0 0 0 268.1 0c-36.5 0-68.3 20.1-85.1 49.7A98 98 0 0 0 97.8 0C43.9 0 0 43.9 0 97.8s43.9 97.8 97.8 97.8c36.5 0 68.3-20.1 85.1-49.7a97.76 97.76 0 0 0 149.6 25.4l19.4 22.2h3v-87.8h-80l24.3 27.5zM97.8 145c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1 47.2 21 47.2 47S123.8 145 97.8 145" />
            </svg>

            <span className="armeniagov-footer__licence-description">
              All content is available under the
              <a className="armeniagov-footer__link" href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence v3.0</a>, except where otherwise stated
            </span>
          </div>

          <div className="armeniagov-footer__meta-item">
            <a className="armeniagov-footer__link armeniagov-footer__copyright-logo" href="https://hti.am/">© ՀՀ ԲՏԱ Նախարարություն</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
