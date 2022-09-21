import { render } from '@testing-library/react';

import TextareaDoc from './textarea-doc';

describe('TextareaDoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TextareaDoc />);
    expect(baseElement).toBeTruthy();
  });
});
