import { render } from '@testing-library/react';

import ButtonDoc from './button-doc';

describe('ButtonDoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonDoc />);
    expect(baseElement).toBeTruthy();
  });
});
