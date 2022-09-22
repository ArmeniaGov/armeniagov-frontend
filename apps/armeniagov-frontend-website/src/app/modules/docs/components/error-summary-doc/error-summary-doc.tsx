import { ErrorSummary } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code =
`<ErrorSummary
  title='There is a problem'
  errors={[
    <a href="#passport-issued-day">The date your passport was issued must be in the past</a>,
    <a href="#postcode-input">Enter a postcode, like AA1 1AA</a>
  ]}
/>`;

export function ErrorSummaryDoc() {
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

      <ErrorSummary
        title='There is a problem'
        errors={[
          <a href="#passport-issued-day">The date your passport was issued must be in the past</a>,
          <a href="#postcode-input">Enter a postcode, like AA1 1AA</a>
        ]}
      />
    </>
  );
}

export default ErrorSummaryDoc;
