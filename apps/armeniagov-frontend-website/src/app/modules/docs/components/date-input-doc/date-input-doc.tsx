import { DateInput, FormGroup, Label, TextInput } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code =
`<DateInput id="passport-input">
  <FormGroup>
    <Label size='s'>Day</Label>
    <TextInput
      name='location'
      fixedCharacterWidth='2'
      error={false}
      inputMode='numeric'
      onChange={console.log}
    />
  </FormGroup>
  <FormGroup>
    <Label size='s'>Month</Label>
    <TextInput
      name='location'
      fixedCharacterWidth='2'
      error={false}
      inputMode='numeric'
      onChange={console.log}
    />
  </FormGroup>
  <FormGroup>
    <Label size='s'>Year</Label>
    <TextInput
      name='location'
      fixedCharacterWidth='3'
      error={false}
      inputMode='numeric'
      onChange={console.log}
    />
  </FormGroup>
</DateInput>`;

export function DateInputDoc() {
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

      <DateInput id="passport-input">
        <FormGroup>
          <Label size='s'>Day</Label>
          <TextInput
            name='location'
            fixedCharacterWidth='2'
            error={false}
            inputMode='numeric'
            onChange={console.log}
          />
        </FormGroup>
        <FormGroup>
          <Label size='s'>Month</Label>
          <TextInput
            name='location'
            fixedCharacterWidth='2'
            error={false}
            inputMode='numeric'
            onChange={console.log}
          />
        </FormGroup>
        <FormGroup>
          <Label size='s'>Year</Label>
          <TextInput
            name='location'
            fixedCharacterWidth='4'
            error={false}
            inputMode='numeric'
            onChange={console.log}
          />
        </FormGroup>
      </DateInput>
    </>
  );
}

export default DateInputDoc;
