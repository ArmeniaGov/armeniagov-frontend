import { Button, Select } from '@armeniagov/components-react';

export function App() {
  return (
    <div>
      <Button />
  
      <Select
        id='city'
        title='City'
        hint='In Armenia*'
        options={[ {text: 'Yerevan', value: 'yerevan'}, {text: 'Gyumri', value: 'gyumri'}, {text: 'Kirovakan', value: 'vanadzor'} ]}
      />
    </div>
  );
}

export default App;
