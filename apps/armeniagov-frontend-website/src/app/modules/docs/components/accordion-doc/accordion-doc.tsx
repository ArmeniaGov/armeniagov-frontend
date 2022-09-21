import { Accordion } from "@armeniagov/components-react";

/* eslint-disable-next-line */
// export interface AccordionDocProps {}

export function AccordionDoc() {
  return (
    <Accordion sections={[{
      header: 'Writing well for the web',
      content: <p className="armeniagov-body">This is the content for Writing well for the web.</p>
    }, {
      header: 'This finally works lol',
      summary: 'After countless hours',
      content: <p className="armeniagov-body">Hello pals</p>
    }]}/>
  );
}

export default AccordionDoc;
