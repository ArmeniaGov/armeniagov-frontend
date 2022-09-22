import { Tabs } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code =
`<Tabs
    tabs={[{
        title: 'Առաջին',
        content: <>Բարեւ <b>Հայաստան</b></>
    }, {
        title: 'Երկրորդ',
        content: <>Բարեւ <b>Երևան</b></>
    }, {
        title: 'Երրորդ',
        content: <>Բարեւ <b>Արցախ</b></>
    }]}
/>
`;

export function TabsDoc() {
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

            <Tabs
                tabs={[{
                    title: 'Առաջին',
                    content: <>Բարեւ <b>Հայաստան</b></>
                }, {
                    title: 'Երկրորդ',
                    content: <>Բարեւ <b>Երևան</b></>
                }, {
                    title: 'Երրորդ',
                    content: <>Բարեւ <b>Արցախ</b></>
                }]}
            />
        </>
    );
}

export default TabsDoc;
