import { render } from '@testing-library/react';

import InsetTextDoc from './inset-text-doc';

describe('InsetTextDoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InsetTextDoc />);
    expect(baseElement).toBeTruthy();
  });
});
