import { ErrorSummary } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code =
`<ErrorSummary
  title='Կա խնդիր'
  errors={[
    <a href="#passport-issued-day">Անձնագրի ժամկետը լրացել է</a>,
    <a href="#postcode-input">Մուտքագրեք ձեր փոստային կոդը</a>
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
        title='Կա խնդիր'
        errors={[
          <a href="#passport-issued-day">Անձնագրի ժամկետը լրացել է</a>,
          <a href="#postcode-input">Մուտքագրեք ձեր փոստային կոդը</a>
        ]}
      />
    </>
  );
}

export default ErrorSummaryDoc;
