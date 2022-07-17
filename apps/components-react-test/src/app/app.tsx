import {
  Button,
  Select,
  Details,
  Table,
  Panel,
  NotificationBanner,
  BackLink,
  WidthOptions
} from '@armeniagov/components-react';

export function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
