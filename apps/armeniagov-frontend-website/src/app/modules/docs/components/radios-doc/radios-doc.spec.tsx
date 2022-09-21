import { render } from '@testing-library/react';

import RadiosDoc from './radios-doc';

describe('RadiosDoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RadiosDoc />);
    expect(baseElement).toBeTruthy();
  });
});
