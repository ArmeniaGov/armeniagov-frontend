import { InsetText } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code =
`<InsetText>Ձեր հարցումը կարող է տևել մինչև 4 շաբաթ</InsetText>`;

export function InsetTextDoc() {
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
        wrapLongLines
      />

      <hr/>

      <InsetText>Ձեր հարցումը կարող է տևել մինչև 4 շաբաթ</InsetText>
    </>
  );
}

export default InsetTextDoc;
