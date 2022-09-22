import { FileUpload, Label, Hint, FormGroup } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code =
`<FormGroup>
  <Label size="l">Upload a file</Label>
  <Hint>About rabis music</Hint>
  <FileUpload
    name="fille-gago"
    accept=".jpg,.png"
    onChange={console.log}
  />
</FormGroup>`;

export function FileUploadDoc() {
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

      <FormGroup>
        <Label size="l">Upload a file</Label>
        <Hint>About rabis music</Hint>
        <FileUpload
          name="fille-gago"
          accept=".jpg,.png"
          onChange={console.log}
        />
      </FormGroup>
    </>
  );
}

export default FileUploadDoc;
