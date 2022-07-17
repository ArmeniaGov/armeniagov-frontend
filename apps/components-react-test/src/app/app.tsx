import {
  Button,
  Select,
  Details
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
    </div>
  );
}

export default App;
