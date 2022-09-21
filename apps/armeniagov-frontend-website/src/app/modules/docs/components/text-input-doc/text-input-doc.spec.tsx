import { render } from '@testing-library/react';

import TextInputDoc from './text-input-doc';

describe('TextInputDoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TextInputDoc />);
    expect(baseElement).toBeTruthy();
  });
});
