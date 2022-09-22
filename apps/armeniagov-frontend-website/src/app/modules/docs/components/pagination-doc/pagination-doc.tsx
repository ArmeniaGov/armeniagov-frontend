import { Pagination } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code =
`<Pagination
    pageCount={10}
    pageRadius={2}
    currentPage={5}
    onPageChange={_ => ({})}
/>
`;

export function PaginationDoc() {
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

            <Pagination
                pageCount={10}
                pageRadius={2}
                currentPage={5}
                onPageChange={_ => ({})}
            />
        </>
    );
}

export default PaginationDoc;
