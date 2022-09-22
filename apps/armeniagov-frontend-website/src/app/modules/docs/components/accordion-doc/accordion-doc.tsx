import { Accordion } from "@armeniagov/components-react";
import { CopyBlock, dracula, atomOneDark } from "react-code-blocks";

/* eslint-disable-next-line */
// export interface AccordionDocProps {}

const code = 
`<Accordion sections={
    [
        {
            header: 'Writing well for the web',
            content: <p className="armeniagov-body">This is the content for Writing well for the web.</p>
        },
        {
            header: 'Assembling the tech team',
            summary: 'After understandning the requirements',
            content: <p className="armeniagov-body">This is the content for Assembling the tech team</p>
        },
        {
            header: 'Understanding the requirements',
            summary: 'Valuing the users\\' opinion',
            content: <p className="armeniagov-body">This is the content for Understanding the requirements</p>
        }
    ]
}/>`;

console.log(CopyBlock);

export function AccordionDoc() {
  return (
    <>
      <CopyBlock
        text={code}
        theme={atomOneDark}
        startingLineNumber={1}
        language="jsx"
        showLineNumbers
        codeBlock
        wrapLines
      />

      <hr/>

      <Accordion sections={
        [
          {
            header: 'Writing well for the web',
            content: <p className="armeniagov-body">This is the content for Writing well for the web.</p>
          },
          {
            header: 'Assembling the tech team',
            summary: 'After understandning the requirements',
            content: <p className="armeniagov-body">This is the content for Assembling the tech team</p>
          },
          {
            header: 'Understanding the requirements',
            summary: 'Valuing the users\' opinion',
            content: <p className="armeniagov-body">This is the content for Understanding the requirements</p>
          }
        ]
      }/>
    </>
  );
}

export default AccordionDoc;
