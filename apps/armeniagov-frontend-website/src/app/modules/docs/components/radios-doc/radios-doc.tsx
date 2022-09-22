import { Radios } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code =
`<Radios
    name='radios-test'
    inline={false}
    small={false}
    items={[{
        title: 'Յոհան Սեբաստիան Բախ',
        value: 'bach',
        hint: 'Ընտրեք նրան, նա լավագույնն է :-)',
        checked: true
    }, {
        title: 'Լյուդվիգ վան Բեթհովեն',
        value: 'beethoven',
        conditional: <p className="armeniagov-body">Ո՞րն է քո սիրելի սոնատը:</p>
    }, {
        title: 'Ռիչարդ Շտրաուս',
        value: 'strauss'
    }, {
        title: 'Վոլֆգանգ Ամադեուս Մոցարտ',
        value: 'mozart',
        divider: <b>Կամ</b>
    }]}
    onChange={console.log}
/>
`;

export function RadiosDoc() {
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

            <Radios
                name='radios-test'
                inline={false}
                small={false}
                items={[{
                    title: 'Յոհան Սեբաստիան Բախ',
                    value: 'bach',
                    hint: 'Ընտրեք նրան, նա լավագույնն է :-)',
                    checked: true
                }, {
                    title: 'Լյուդվիգ վան Բեթհովեն',
                    value: 'beethoven',
                    conditional: <p className="armeniagov-body">Ո՞րն է քո սիրելի սոնատը:</p>
                }, {
                    title: 'Ռիչարդ Շտրաուս',
                    value: 'strauss'
                }, {
                    title: 'Վոլֆգանգ Ամադեուս Մոցարտ',
                    value: 'mozart',
                    divider: <b>Կամ</b>
                }]}
                onChange={console.log}
            />
        </>
    );
}

export default RadiosDoc;
