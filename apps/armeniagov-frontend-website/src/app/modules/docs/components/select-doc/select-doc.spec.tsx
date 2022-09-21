import { render } from '@testing-library/react';

import SelectDoc from './select-doc';

describe('SelectDoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SelectDoc />);
    expect(baseElement).toBeTruthy();
  });
});
