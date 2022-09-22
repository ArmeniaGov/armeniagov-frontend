import { Button } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code = 
`<Button>Hello Armenia!</Button>
<Button disabled>Hello Armenia!</Button>
<Button secondary>Hello Armenia!</Button>
<Button warning>Hello Armenia!</Button>
<Button start>Hello Armenia!</Button>
`;

export function ButtonDoc() {
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

      <Button>Hello Armenia!</Button><br/>
      <Button disabled>Hello Armenia!</Button><br/>
      <Button secondary>Hello Armenia!</Button><br/>
      <Button warning>Hello Armenia!</Button><br/>
      <Button start>Hello Armenia!</Button><br/>
    </>
  );
}

export default ButtonDoc;
