import { Fieldset, Label, TextInput } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code =
`<Fieldset
  legend="Question"
  legendSize="l" // 's' | 'm' | 'l' | 'xl', default: 'l'
  legendHeading // use if this is the only fieldset on the page
>
  <div className="armeniagov-form-group">
    <Label for="address-line-1">
      Address line 1
    </Label>

    <TextInput name="address-line-1"/>
  </div>

  <div className="armeniagov-form-group">
    <Label for="address-line-2">
      Address line 2 (optional)
    </Label>

    <TextInput name="address-line-2"/>
  </div>
</Fieldset>`;

export function FieldsetDoc() {
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

      <Fieldset
        legend="Question"
        legendSize="l" // 's' | 'm' | 'l' | 'xl', default: 'l'
        legendHeading // use if this is the only fieldset on the page
      >
        <div className="armeniagov-form-group">
          <Label for="address-line-1">
            Address line 1
          </Label>

          <TextInput name="address-line-1"/>
        </div>

        <div className="armeniagov-form-group">
          <Label for="address-line-2">
            Address line 2 (optional)
          </Label>

          <TextInput name="address-line-2"/>
        </div>
      </Fieldset>
    </>
  );
}

export default FieldsetDoc;
