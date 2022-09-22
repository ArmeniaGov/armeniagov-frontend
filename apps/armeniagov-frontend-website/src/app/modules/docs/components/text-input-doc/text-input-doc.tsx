import { TextInput, WidthOptions } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code =
`<TextInput
    name='location'
    hint='Հայաստան*'
    relativeWidth={WidthOptions['1/2']}
    prefix={<b>֏</b>}
    suffix={<b>KG</b>}
    value={'Բարի լույս'}
    error={false}
    onChange={console.log}
/>
`;

export function TextInputDoc() {
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

            <TextInput
                name='location'
                hint='Հայաստան*'
                relativeWidth={WidthOptions['1/2']}
                prefix={<b>֏</b>}
                suffix={<b>KG</b>}
                value={'Բարի լույս'}
                error={false}
                onChange={console.log}
            />
        </>
    );
}

export default TextInputDoc;
