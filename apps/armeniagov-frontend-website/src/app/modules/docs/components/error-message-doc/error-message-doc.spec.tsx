import { render } from '@testing-library/react';

import ErrorMessageDoc from './error-message-doc';

describe('ErrorMessageDoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ErrorMessageDoc />);
    expect(baseElement).toBeTruthy();
  });
});
