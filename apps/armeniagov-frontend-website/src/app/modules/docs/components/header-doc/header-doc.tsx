import { Header } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code =
`<Header
  serviceName='Ծառայություն'
  homeHref="/"
  navigation={[{
    id: 'one',
    title: 'Հղում մեկ',
    href: '/one'
  }, {
    id: 'two',
    title: 'Հղում երկու',
    href: '/two',
    active: true
  }, {
    id: 'three',
    title: 'Հղում երեք',
    href: '/three'
  }]}
  onNavigationChange={console.log}
/>`;

export function HeaderDoc() {
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

      <Header
        serviceName='Ծառայություն'
        homeHref="/"
        navigation={[{
          id: 'one',
          title: 'Հղում մեկ',
          href: '/one'
        }, {
          id: 'two',
          title: 'Հղում երկու',
          href: '/two',
          active: true
        }, {
          id: 'three',
          title: 'Հղում երեք',
          href: '/three'
        }]}
        onNavigationChange={console.log}
      />
    </>
  );
}

export default HeaderDoc;
