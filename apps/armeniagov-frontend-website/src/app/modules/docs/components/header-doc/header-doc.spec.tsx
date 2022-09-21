import { render } from '@testing-library/react';

import HeaderDoc from './header-doc';

describe('HeaderDoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderDoc />);
    expect(baseElement).toBeTruthy();
  });
});
