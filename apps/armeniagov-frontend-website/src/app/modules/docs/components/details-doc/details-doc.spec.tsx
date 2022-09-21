import { render } from '@testing-library/react';

import DetailsDoc from './details-doc';

describe('DetailsDoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DetailsDoc />);
    expect(baseElement).toBeTruthy();
  });
});
