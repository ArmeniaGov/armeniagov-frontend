import { render } from '@testing-library/react';

import CheckboxesDoc from './checkboxes-doc';

describe('CheckboxesDoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CheckboxesDoc />);
    expect(baseElement).toBeTruthy();
  });
});
