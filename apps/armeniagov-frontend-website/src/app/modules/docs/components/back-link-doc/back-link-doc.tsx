import { BackLink } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code = `<BackLink href='#'>Վերադառնալ</BackLink>`;

export function BackLinkDoc() {
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

    <BackLink href='#'>Վերադառնալ</BackLink>
   </>
  );
}

export default BackLinkDoc;
