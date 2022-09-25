import { Button } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";
import classes from "./button-doc.module.scss";

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

      <div className={classes["button-doc-container"]}>
        <Button className={classes["button-demo"]}>Ողջույն Հայաստան!</Button><br/>
        <Button className={classes["button-demo"]} disabled>Ողջույն Հայաստան!</Button><br/>
        <Button className={classes["button-demo"]} secondary>Ողջույն Հայաստան!</Button><br/>
        <Button className={classes["button-demo"]} warning>Ողջույն Հայաստան!</Button><br/>
        <Button className={classes["button-demo"]} start>Ողջույն Հայաստան!</Button><br/>
      </div>
    </>
  );
}

export default ButtonDoc;
