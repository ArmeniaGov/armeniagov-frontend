import { Select } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code =
`<Select
    name='city'
    options={[
        {text: 'Երևան', value: 'yerevan'},
        {text: 'Գյումրի', value: 'gyumri'},
        {text: 'Վանաձոր', value: 'vanadzor'}
    ]}
/>
`;

export function SelectDoc() {
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

            <Select
                name='city'
                options={[
                    {text: 'Երևան', value: 'yerevan'},
                    {text: 'Գյումրի', value: 'gyumri'},
                    {text: 'Վանաձոր', value: 'vanadzor'}
                ]}
            />
        </>
    );
}

export default SelectDoc;
