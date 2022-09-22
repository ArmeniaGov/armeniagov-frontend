import { useState } from 'react';
import './accordion.scss';

export interface AccordionProps {
  sections: { header: string; summary?: string; content: React.ReactNode }[];
  className?: string;
}

export function Accordion(props: AccordionProps) {
  const initalState: Record<number, boolean> = {};

  for (let i = 0; i < props.sections.length; i++) {
    initalState[i] = false;
  }

  const [sectionStatuses, setSectionStatuses] = useState(initalState);
  const allOpen = !Object.values(sectionStatuses).includes(false);

  const toggleSection = (index: number) => {
    setSectionStatuses(statuses => ({...statuses, [index]: !statuses[index]}));
  }

  const toggleAllSections = () => {
    const statuses: Record<number, boolean> = {};

    for (let i = 0; i < props.sections.length; i++) {
      statuses[i] = !allOpen;
    }

    setSectionStatuses(statuses);
  }

  return (
    <div className={`armeniagov-accordion ${props.className ? props.className : ''}`}>
      <div className="armeniagov-accordion__controls" onClick={toggleAllSections}>
        {
          allOpen
            ? (
              <button type="button" className="armeniagov-accordion__show-all" aria-expanded="true">
                <span className="armeniagov-accordion-nav__chevron"></span>
                <span className="armeniagov-accordion__show-all-text">Թաքցնել ամենը</span>
              </button>
            )
            : (
              <button type="button" className="armeniagov-accordion__show-all" aria-expanded="false">
                <span className="armeniagov-accordion-nav__chevron armeniagov-accordion-nav__chevron--down"></span>
                <span className="armeniagov-accordion__show-all-text">Ցույց տալ ամենը</span>
              </button>
            )
        }
      </div>
      {
        props.sections.map((section, index) => {
          const open = sectionStatuses[index];

          return (
            <div
              className={`armeniagov-accordion__section ${open ? 'armeniagov-accordion__section--expanded' : ''}`}
              onClick={_ => toggleSection(index)}
              key={index}
            >
              <div className="armeniagov-accordion__section-header">
                <h2 className="armeniagov-accordion__section-heading">
                  <button type="button" aria-controls="accordion-default-content-1" className="armeniagov-accordion__section-button" aria-expanded="false">
                    <span className="armeniagov-accordion__section-heading-text">
                      <span className="armeniagov-accordion__section-heading-text-focus">
                        {section.header}
                      </span>
                    </span>

                    {
                      section.summary ?
                      (
                        <span className="armeniagov-accordion__section-summary armeniagov-body">
                          <span className="armeniagov-accordion__section-summary-focus">
                            { section.summary }
                          </span>
                        </span>
                      ) : ''
                    }

                    <span className="armeniagov-accordion__section-toggle">
                      <span className="armeniagov-accordion__section-toggle-focus">
                        <span
                          className={`armeniagov-accordion-nav__chevron ${open ? '' : 'armeniagov-accordion-nav__chevron--down'}`}
                        ></span>
                        <span className="armeniagov-accordion__section-toggle-text">
                          {open ? 'Թաքցնել' : 'Ցույց տալ'}
                        </span>
                      </span>
                    </span>
                  </button>
                </h2>
              </div>
              <div className="armeniagov-accordion__section-content">
                { section.content }
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default Accordion;
