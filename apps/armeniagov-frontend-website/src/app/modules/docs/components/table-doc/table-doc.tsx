import { Table, WidthOptions } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code =
`<Table
    caption='Ամսաթվերը և գումարները'
    captionSize='m'
    headers={[
        { text: 'Ամսաթիվ', size: WidthOptions['1/2'] },
        { text: 'Գումարներ' }
    ]}
    items={[
        ['Առաջին 6 շաբաթ', 'Շաբաթական 100,000 դրամ'],
        ['Հաջորդ 33 շաբաթ', 'Շաբաթական 100,000 դրամ'],
        ['Ընդհանուր գնահատված վճար', '3,900,000 դրամ']
    ]}
/>
`;

export function TableDoc() {
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

            <Table
                caption='Ամսաթվերը և գումարները'
                captionSize='m'
                headers={[
                    { text: 'Ամսաթիվ', size: WidthOptions['1/2'] },
                    { text: 'Գումարներ' }
                ]}
                items={[
                    ['Առաջին 6 շաբաթ', 'Շաբաթական 100,000 դրամ'],
                    ['Հաջորդ 33 շաբաթ', 'Շաբաթական 100,000 դրամ'],
                    ['Ընդհանուր գնահատված վճար', '3,900,000 դրամ']
                ]}
            />
        </>
    );
}

export default TableDoc;
