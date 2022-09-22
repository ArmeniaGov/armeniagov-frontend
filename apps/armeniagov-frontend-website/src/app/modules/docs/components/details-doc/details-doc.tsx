import { Details } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code =
`<Details
  details='Դուք պետք է ունենաք ՀՀ քաղաքացիություն կամ համարվեք ՀՀ ռեզիդենտ'
>
  Դուք պետք է լինեք ՀՀ ռեզիդենտ
</Details>`;

export function DetailsDoc() {
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

      <Details
        details='Դուք պետք է ունենաք ՀՀ քաղաքացիություն կամ համարվեք ՀՀ ռեզիդենտ'
      >
        Դուք պետք է լինեք ՀՀ ռեզիդենտ
      </Details>
    </>
  );
}

export default DetailsDoc;
