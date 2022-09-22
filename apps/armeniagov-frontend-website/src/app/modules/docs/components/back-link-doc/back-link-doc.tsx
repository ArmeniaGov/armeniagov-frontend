import { BackLink } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code = `<BackLink href='#'>Go back</BackLink>`;

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

    <BackLink href='#'>Go back</BackLink>
   </>
  );
}

export default BackLinkDoc;
