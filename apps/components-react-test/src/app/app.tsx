import {
  Header,
  Breadcrumbs,
  Button,
  Select,
  Details,
  Table,
  Panel,
  NotificationBanner,
  BackLink,
  Accordion,
  Pagination,
  SummaryList,
  Tabs,
  PhaseBanner,
  Tag,
  WarningText,
  Fieldset,
  Checkboxes,
  InsetText,
  ErrorSummary,
  WidthOptions
} from '@armeniagov/components-react';

export function App() {
  return (
    <div>
      <Header
        serviceName='Components'
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
      />

      <br/><hr/><br/>

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
        preventDefault
        onBreadcrumbClick={console.log}
      />

      <br/><hr/><br/>
      
      <Button>Hello Armenia!</Button>

      <br/><hr/><br/>

      <Select
        id='city'
        title='City'
        hint='In Armenia*'
        options={[ {text: 'Yerevan', value: 'yerevan'}, {text: 'Gyumri', value: 'gyumri'}, {text: 'Kirovakan', value: 'vanadzor'} ]}
      />

      <br/><hr/><br/>

      <Details
        details='Have a citizenship or a permanent residence of Armenia'
      >
        You have to be a resident of Armenia
      </Details>

      <br/><hr/><br/>

      <Table
        caption='Dates and amounts'
        captionSize='m'
        headers={[{text: 'Date', size: WidthOptions['1/2']}, {text: 'Amounts'}]}
        items={[['First 6 weeks', '£109.80 per week'], ['Next 33 weeks', '£109.80 per week'], ['Total estimated pay', '£4,282.20']]}
      />

      <br/><hr/><br/>

      <Panel confirmation header='Application complete'>Your reference number<br/><strong>HDJ2123F</strong></Panel>

      <br/><hr/><br/>

      <NotificationBanner header='Success' success>
          You have 7 days left to send your application.
          <a className="armeniagov-notification-banner__link" href="#1">
            View application
          </a>.
      </NotificationBanner>

      <br/><hr/><br/>

      <BackLink href='#'>Go back</BackLink>

      <br/><hr/><br/>

      <div style={{width: '60%', marginLeft: '5%', marginTop: '4em'}}>
        <Accordion sections={[{
          header: 'Writing well for the web',
          content: <p className="armeniagov-body">This is the content for Writing well for the web.</p>
        }, {
          header: 'This finally works lol',
          summary: 'After countless hours',
          content: <p className="armeniagov-body">Hello pals</p>
        }]}/>
      </div>

      <br/><hr/><br/>

      <Pagination
        pageCount={10}
        pageRadius={2}
        currentPage={5}
        onPageChange={_ => ({})}
      />

      <br/><hr/><br/>

      <SummaryList
        items={[{
          title: 'Name',
          content: 'Sarah Philips'
        }, {
          id: 'dob',
          title: 'Date of birth',
          content: '5 January 1978',
          changeable: true
        }, {
          id: 'address',
          title: 'Address',
          content: <>72 Guild Street<br />London<br />SE23 6FH</>,
          changeable: true,
          changeText: 'Change Address'
        }]}
      />

      <br/><hr/><br/>

      <Tabs
        tabs={[{
          title: 'First',
          content: <>Hello <b>Buddy!</b></>
        }, {
          title: 'Second',
          content: <>Hello <b>Pals!</b></>
        }, {
          title: 'Third',
          content: <>Hello <b>Bros!</b></>
        }]}
      />

      <br/><hr/><br/>

      <PhaseBanner
        phase={<>Alpha</>}
        content={<>This component is in <b>Testing</b></>}
      />

      <br/><hr/><br/>

      <Tag color='red'>Hello</Tag>
      <Tag color='blue'>Dear</Tag>
      <Tag color='orange'>Armenia</Tag>

      <br/><hr/><br/>

      <WarningText>You can be fined up to 5000 USD Dollars if you do not obey and SLAP BASS NOW</WarningText>

      <br/><hr/><br/>

      <Fieldset
        legend='Question'
      >
        <div className="armeniagov-form-group">
          <label className="armeniagov-label" htmlFor="address-line-1">
            Address line 1
          </label>
          <input className="armeniagov-input" id="address-line-1" name="address-line-1" type="text" autoComplete="address-line1"/>
        </div>

        <div className="armeniagov-form-group">
          <label className="armeniagov-label" htmlFor="address-line-2">
            Address line 2 (optional)
          </label>
          <input className="armeniagov-input" id="address-line-2" name="address-line-2" type="text" autoComplete="address-line2"/>
        </div>
      </Fieldset>

      <br/><hr/><br/>

      <Checkboxes
        name='passport'
        items={[{
          title: 'Armenian',
          hint: 'including Artsakh',
          checked: true,
          value: 'armenian'
        }, {
          title: 'Russian',
          value: 'russian',
          conditional: <p className="armeniagov-body">Do you have a permanent residency in Armenia?</p>
        }, {
          title: 'Citizen of another country',
          value: 'other'
        }, {
          title: 'No citizenship',
          value: 'none',
          exclusive: true
        }]}
        onChange={console.log}
      />

      <br/><hr/><br/>

      <InsetText>It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.</InsetText>
    
      <ErrorSummary
        title='There is a problem'
        errors={[
          <a href="#passport-issued-day">The date your passport was issued must be in the past</a>,
          <a href="#postcode-input">Enter a postcode, like AA1 1AA</a>
        ]}
      />
    </div>
  );
}

export default App;
