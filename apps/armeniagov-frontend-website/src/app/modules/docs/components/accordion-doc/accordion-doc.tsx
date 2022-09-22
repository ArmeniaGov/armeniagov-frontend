import { Accordion } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

/* eslint-disable-next-line */
// export interface AccordionDocProps {}

const code =
`<Accordion sections={
    [
        {
            header: 'Վեբ ռեսուրսների խմբագրում',
            content: <p className="armeniagov-body">Պարունակություն</p>
        },
        {
            header: 'Թիմի ստեղծում',
            summary: 'Կարճ բնութագրություն',
            content: <p className="armeniagov-body">Պարունակություն</p>
        },
        {
            header: 'Օգտատերերի պահանջներ',
            summary: 'Կարճ բնութագրություն',
            content: <p className="armeniagov-body">Պարունակություն</p>
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
            header: 'Վեբ ռեսուրսների խմբագրում',
            content: <p className="armeniagov-body">Պարունակություն</p>
          },
          {
            header: 'Թիմի ստեղծում',
            summary: 'Կարճ բնութագրություն',
            content: <p className="armeniagov-body">Պարունակություն</p>
          },
          {
            header: 'Օգտատերերի պահանջներ',
            summary: 'Կարճ բնութագրություն',
            content: <p className="armeniagov-body">Պարունակություն</p>
          }
        ]
      }/>
    </>
  );
}

export default AccordionDoc;
