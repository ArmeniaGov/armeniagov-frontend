import { Checkboxes } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code =
`<Checkboxes
  name='passport'
  items={[{
    title: 'Armenian',
    hint: 'including Artsakh',
    checked: true,
    value: 'armenian'
  }, {
    title: 'Russian',
    value: 'russian',
    conditional: <p className="armeniagov-body">Do you have a permanent residency in Armenia?</p>
  }, {
    title: 'Citizen of another country',
    value: 'other',
    conditional: <p className="armeniagov-body">Do you have a permanent residency in Armenia?</p>
  }, {
    title: 'No citizenship',
    value: 'none',
    exclusive: true
  }]}
  onChange={console.log}
/>`;

export function CheckboxesDoc() {
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

      <Checkboxes
        name='passport'
        items={[{
          title: 'Armenian',
          hint: 'including Artsakh',
          checked: true,
          value: 'armenian'
        }, {
          title: 'Russian',
          value: 'russian',
          conditional: <p className="armeniagov-body">Do you have a permanent residency in Armenia?</p>
        }, {
          title: 'Citizen of another country',
          value: 'other',
          conditional: <p className="armeniagov-body">Do you have a permanent residency in Armenia?</p>
        }, {
          title: 'No citizenship',
          value: 'none',
          exclusive: true
        }]}
        onChange={console.log}
      />
    </>
  );
}

export default CheckboxesDoc;
