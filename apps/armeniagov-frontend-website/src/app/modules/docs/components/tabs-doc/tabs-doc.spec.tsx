import { render } from '@testing-library/react';

import TabsDoc from './tabs-doc';

describe('TabsDoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TabsDoc />);
    expect(baseElement).toBeTruthy();
  });
});
