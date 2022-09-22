import { Header } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code =
`<Header
  serviceName='Components'
  homeHref="/"
  navigation={[{
    title: 'Link one',
    href: '/one'
  }, {
    title: 'Link Two',
    href: '/two',
    active: true
  }, {
    title: 'Link Three',
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
        serviceName='Components'
        homeHref="/"
        navigation={[{
          id: 'one',
          title: 'Link one',
          href: '/one'
        }, {
          id: 'two',
          title: 'Link Two',
          href: '/two',
          active: true
        }, {
          id: 'three',
          title: 'Link Three',
          href: '/three'
        }]}
        onNavigationChange={console.log}
      />
    </>
  );
}

export default HeaderDoc;
