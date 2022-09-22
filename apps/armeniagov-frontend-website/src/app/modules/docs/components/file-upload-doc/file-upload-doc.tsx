import { FileUpload, Label, Hint, FormGroup } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code =
`<FormGroup>
  <Label size="l">Վերբեռնեք ձեր նկարրը</Label>
  <Hint>Ձեր երեսը պետք է երեվա, մի կրեք ակնոցներ</Hint>
  <FileUpload
    name="face"
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
        <Label size="l">Վերբեռնեք ձեր նկարրը</Label>
        <Hint>Ձեր երեսը պետք է երեվա, մի կրեք ակնոցներ</Hint>
        <FileUpload
          name="face"
          accept=".jpg,.png"
          onChange={console.log}
        />
      </FormGroup>
    </>
  );
}

export default FileUploadDoc;
