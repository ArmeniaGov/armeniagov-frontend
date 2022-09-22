import { Panel } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code =
`<Panel confirmation header='Դիմումն ավարտված է'>
    Ձեր տեղեկանքի համարը<br/>
    <strong>HDJ2123F</strong>
</Panel>
`;

export function PanelDoc() {
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

            <Panel confirmation header='Դիմումն ավարտված է'>
                Ձեր տեղեկանքի համարը<br/>
                <strong>HDJ2123F</strong>
            </Panel>
        </>
    );
}

export default PanelDoc;
