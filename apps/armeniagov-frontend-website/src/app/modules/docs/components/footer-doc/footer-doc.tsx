import { Footer } from "@armeniagov/components-react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const code =
`<Footer
  navigation={[
    {
      heading: 'hello',
      width: 'two-thirds',
      columns: 3,
      links: [
        {
          url: 'https://github.com/bach/rabis',
          title: 'Github'
        },
        {
          url: 'https://github.com/bach/rabis',
          title: 'Github'
        },
        {
          url: 'https://github.com/bach/rabis',
          title: 'Github'
        },
        {
          url: 'https://github.com/bach/rabis',
          title: 'Github'
        },
        {
          url: 'https://github.com/bach/rabis',
          title: 'Github'
        },
        {
          url: 'https://github.com/bach/rabis',
          title: 'Github'
        },
        {
          url: 'https://github.com/bach/rabis',
          title: 'Github'
        },
        {
          url: 'https://github.com/bach/rabis',
          title: 'Github'
        },
        {
          url: 'https://github.com/bach/rabis',
          title: 'Github'
        },
        {
          url: 'https://github.com/bach/rabis',
          title: 'Github'
        }
      ]
    },
    {
      heading: 'hello',
      width: 'one-third',
      links: [
        {
          url: 'https://github.com/bach/rabis',
          title: 'Github'
        }
      ]
    }
  ]}

  links={[{
    title: 'Github',
    url: 'https://github.com/rabis-music',
  }, {
    title: 'Github',
    url: 'https://github.com/rabis-music',
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
            heading: 'hello',
            width: 'two-thirds',
            columns: 3,
            links: [
              {
                url: 'https://github.com/bach/rabis',
                title: 'Github'
              },
              {
                url: 'https://github.com/bach/rabis',
                title: 'Github'
              },
              {
                url: 'https://github.com/bach/rabis',
                title: 'Github'
              },
              {
                url: 'https://github.com/bach/rabis',
                title: 'Github'
              },
              {
                url: 'https://github.com/bach/rabis',
                title: 'Github'
              },
              {
                url: 'https://github.com/bach/rabis',
                title: 'Github'
              },
              {
                url: 'https://github.com/bach/rabis',
                title: 'Github'
              },
              {
                url: 'https://github.com/bach/rabis',
                title: 'Github'
              },
              {
                url: 'https://github.com/bach/rabis',
                title: 'Github'
              },
              {
                url: 'https://github.com/bach/rabis',
                title: 'Github'
              }
            ]
          },
          {
            heading: 'hello',
            width: 'one-third',
            links: [
              {
                url: 'https://github.com/bach/rabis',
                title: 'Github'
              }
            ]
          }
        ]}

        links={[{
          title: 'Github',
          url: 'https://github.com/rabis-music',
        }, {
          title: 'Github',
          url: 'https://github.com/rabis-music',
        }]}
      />
    </>
  );
}

export default FooterDoc;
