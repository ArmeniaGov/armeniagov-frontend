import { ErrorMessage } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code =
`<ErrorMessage>Մուտքագրեք ճիշտ տվյալներ</ErrorMessage>`;

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

      <ErrorMessage>Մուտքագրեք ճիշտ տվյալներ</ErrorMessage>
    </>
  );
}

export default ErrorMessageDoc;
