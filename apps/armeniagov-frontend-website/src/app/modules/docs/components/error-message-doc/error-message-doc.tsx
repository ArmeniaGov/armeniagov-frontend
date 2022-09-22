import { ErrorMessage } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code =
`<ErrorMessage>Enter a correct location</ErrorMessage>`;

export function ErrorMessageDoc() {
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

      <ErrorMessage>Enter a correct location</ErrorMessage>
    </>
  );
}

export default ErrorMessageDoc;
