import { Tag } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code =
`<Tag color='red'>Բարեւ</Tag>
<Tag color='blue'>Սիրելի</Tag>
<Tag color='orange'>Հայաստան</Tag>
`;

export function TagDoc() {
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

            <Tag color='red'>Բարեւ</Tag>
            <Tag color='blue'>Սիրելի</Tag>
            <Tag color='orange'>Հայաստան</Tag>
        </>
    );
}

export default TagDoc;
