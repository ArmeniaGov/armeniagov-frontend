import { PhaseBanner } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code =
`<PhaseBanner
    phase={<>Ալֆա</>}
    content={<>Այս բաղադրիչը <b>փորձարկման փուլում է</b></>}
/>
`;

export function PhaseBannerDoc() {
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

            <PhaseBanner
                phase={<>Ալֆա</>}
                content={<>Այս բաղադրիչը <b>փորձարկման փուլում է</b></>}
            />
        </>
    );
}

export default PhaseBannerDoc;
