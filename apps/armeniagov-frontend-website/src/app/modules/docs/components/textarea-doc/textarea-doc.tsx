import { Textarea } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";
import { useState } from "react";

const code =
`<Textarea
    name='country'
    value='Հայաստան'
    rows={5}
    error={textareaError}
    onChange={value => {
        if(value.toLowerCase() !== 'Հայաստան') setTextareaError(true);
        else setTextareaError(false);
    }}
/>
`;

export function TextareaDoc() {
    const [textareaError, setTextareaError] = useState(false);

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

            <Textarea
                name='baseball'
                value='Հայաստան'
                rows={5}
                error={textareaError}
                onChange={value => {
                    if(value.toLowerCase() !== 'Հայաստան') setTextareaError(true);
                    else setTextareaError(false);
                }}
            />
        </>
    );
}

export default TextareaDoc;
