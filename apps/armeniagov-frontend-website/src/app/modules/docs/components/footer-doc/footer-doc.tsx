import { Footer } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code =
`<Footer
  navigation={[
    {
      heading: 'Երկու երորդ',
      width: 'two-thirds',
      columns: 3,
      links: [
        {
          url: '/',
          title: 'Հղում'
        },
        {
          url: '/',
          title: 'Հղում'
        },
        {
          url: '/',
          title: 'Հղում'
        },
        {
          url: '/',
          title: 'Հղում'
        },
        {
          url: '/',
          title: 'Հղում'
        },
        {
          url: '/',
          title: 'Հղում'
        },
        {
          url: '/',
          title: 'Հղում'
        },
        {
          url: '/',
          title: 'Հղում'
        },
        {
          url: '/',
          title: 'Հղում'
        },
        {
          url: '/',
          title: 'Հղում'
        }
      ]
    },
    {
      heading: 'Մեկ երորդ',
      width: 'one-third',
      links: [
        {
          url: '/',
          title: 'Հղում'
        }
      ]
    }
  ]}

  links={[{
    title: 'Հղում',
    url: 'https://Հղում.com/rabis-music',
  }, {
    title: 'Հղում',
    url: 'https://Հղում.com/rabis-music',
  }]}
/>`;

export function FooterDoc() {
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

      <Footer
        navigation={[
          {
            heading: 'Երկու երորդ',
            width: 'two-thirds',
            columns: 3,
            links: [
              {
                url: '/',
                title: 'Հղում'
              },
              {
                url: '/',
                title: 'Հղում'
              },
              {
                url: '/',
                title: 'Հղում'
              },
              {
                url: '/',
                title: 'Հղում'
              },
              {
                url: '/',
                title: 'Հղում'
              },
              {
                url: '/',
                title: 'Հղում'
              },
              {
                url: '/',
                title: 'Հղում'
              },
              {
                url: '/',
                title: 'Հղում'
              },
              {
                url: '/',
                title: 'Հղում'
              },
              {
                url: '/',
                title: 'Հղում'
              }
            ]
          },
          {
            heading: 'Մեկ երորդ',
            width: 'one-third',
            links: [
              {
                url: '/',
                title: 'Հղում'
              }
            ]
          }
        ]}

        links={[{
          title: 'Հղում',
          url: '/',
        }, {
          title: 'Հղում',
          url: '/',
        }]}
      />
    </>
  );
}

export default FooterDoc;
