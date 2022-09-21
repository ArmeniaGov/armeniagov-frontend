import { render } from '@testing-library/react';

import PanelDoc from './panel-doc';

describe('PanelDoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PanelDoc />);
    expect(baseElement).toBeTruthy();
  });
});
