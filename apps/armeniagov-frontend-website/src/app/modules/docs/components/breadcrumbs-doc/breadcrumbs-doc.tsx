import { Breadcrumbs } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code = 
`<Breadcrumbs
  items={[{
    title: 'Home',
    href: '/'
  }, {
    title: 'Passports, travel and living abroad',
    href: '/passports-travel-living-abroad'
  }, {
    title: 'Travel abroad',
    href: '/passports-travel-living-abroad/travel-abroad'
  }]}
  collapseOnMobile
  preventDefault
  onBreadcrumbClick={console.log}
/>`;

export function BreadcrumbsDoc() {
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

      <Breadcrumbs
        items={[{
          title: 'Home',
          href: '/'
        }, {
          title: 'Passports, travel and living abroad',
          href: '/passports-travel-living-abroad'
        }, {
          title: 'Travel abroad',
          href: '/passports-travel-living-abroad/travel-abroad'
        }]}
        collapseOnMobile
        preventDefault
        onBreadcrumbClick={console.log}
      />
    </>
  );
}

export default BreadcrumbsDoc;
