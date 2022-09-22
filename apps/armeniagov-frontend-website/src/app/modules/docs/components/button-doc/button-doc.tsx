import { Button } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code =
`<Button>Ողջույն Հայաստան!</Button>
<Button disabled>Ողջույն Հայաստան!</Button>
<Button secondary>Ողջույն Հայաստան!</Button>
<Button warning>Ողջույն Հայաստան!</Button>
<Button start>Ողջույն Հայաստան!</Button>
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

      <Button>Ողջույն Հայաստան!</Button><br/>
      <Button disabled>Ողջույն Հայաստան!</Button><br/>
      <Button secondary>Ողջույն Հայաստան!</Button><br/>
      <Button warning>Ողջույն Հայաստան!</Button><br/>
      <Button start>Ողջույն Հայաստան!</Button><br/>
    </>
  );
}

export default ButtonDoc;
