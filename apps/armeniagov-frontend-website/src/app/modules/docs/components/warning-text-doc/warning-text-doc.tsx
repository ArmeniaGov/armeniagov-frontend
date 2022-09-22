import { WarningText } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code =
`<WarningText>Չգրանցվելու դեպքում կարող եք տուգանվել մինչև 5,000 դրամով:</WarningText>
`;

export function WarningTextDoc() {
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

            <WarningText>Չգրանցվելու դեպքում կարող եք տուգանվել մինչև 5,000 դրամով:</WarningText>
        </>
    );
}

export default WarningTextDoc;
