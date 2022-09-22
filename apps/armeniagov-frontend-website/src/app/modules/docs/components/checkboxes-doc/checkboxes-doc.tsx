import { Checkboxes } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code =
`<Checkboxes
  name='passport'
  items={[{
    title: 'Հայկական',
    hint: 'նաև Արցախի',
    checked: true,
    value: 'armenian'
  }, {
    title: 'Ռուսական',
    value: 'russian',
    conditional: <p className="armeniagov-body">Դուք Հայաստանի ռեզիդենտ ե՞ք</p>
  }, {
    title: 'Այկ երկրի',
    value: 'other',
    conditional: <p className="armeniagov-body">Դուք Հայաստանի ռեզիդենտ ե՞ք</p>
  }, {
    title: 'Առանց քաղաքացիություն',
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
          title: 'Հայկական',
          hint: 'նաև Արցախի',
          checked: true,
          value: 'armenian'
        }, {
          title: 'Ռուսական',
          value: 'russian',
          conditional: <p className="armeniagov-body">Դուք Հայաստանի ռեզիդենտ ե՞ք</p>
        }, {
          title: 'Այկ երկրի',
          value: 'other',
          conditional: <p className="armeniagov-body">Դուք Հայաստանի ռեզիդենտ ե՞ք</p>
        }, {
          title: 'Առանց քաղաքացիություն',
          value: 'none',
          exclusive: true
        }]}
        onChange={console.log}
      />
    </>
  );
}

export default CheckboxesDoc;
