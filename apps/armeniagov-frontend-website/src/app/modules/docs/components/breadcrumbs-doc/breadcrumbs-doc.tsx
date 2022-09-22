import { Breadcrumbs } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code = 
`<Breadcrumbs
  items={[{
    title: 'Սկիզբ',
    href: '/'
  }, {
    title: 'ճանապարհորդություններ և կյանք արտասահմանում',
    href: '/passports-travel-living-abroad'
  }, {
    title: 'Ճանապարհորդություններ',
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
          title: 'Սկիզբ',
          href: '/'
        }, {
          title: 'ճանապարհորդություններ և կյանք արտասահմանում',
          href: '/passports-travel-living-abroad'
        }, {
          title: 'Ճանապարհորդություններ',
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
