import { render } from '@testing-library/react';

import FieldsetDoc from './fieldset-doc';

describe('FieldsetDoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FieldsetDoc />);
    expect(baseElement).toBeTruthy();
  });
});
