import { SummaryList } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code =
`<SummaryList
    items={[
        {
            title: 'Անուն',
            content: ''
        },
        {
            id: 'dob',
            title: 'Ծննդյան ամսաթիվ',
            content: '5 հունվարի 1978 թ',
            changeable: true,
            changeText: 'Խմբագրել'
        },
        {
            id: 'address',
            title: 'Հասցե',
            content: <>ք. Երևան, 0010,<br/> Հանրապետության հրապարակ,<br/> Կառավարական տուն, 1</>,
            changeable: true,
            changeText: 'Փոխել հասցեն'
        }
    ]}
/>
`;

export function SummaryListDoc() {
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

            <SummaryList
                items={[
                    {
                        title: 'Անուն',
                        content: ''
                    },
                    {
                        id: 'dob',
                        title: 'Ծննդյան ամսաթիվ',
                        content: '5 հունվարի 1978 թ',
                        changeable: true,
                        changeText: 'Խմբագրել'
                    },
                    {
                        id: 'address',
                        title: 'Հասցե',
                        content: <>ք. Երևան, 0010,<br/> Հանրապետության հրապարակ,<br/> Կառավարական տուն, 1</>,
                        changeable: true,
                        changeText: 'Փոխել հասցեն'
                    }
                ]}
            />
        </>
    );
}

export default SummaryListDoc;
