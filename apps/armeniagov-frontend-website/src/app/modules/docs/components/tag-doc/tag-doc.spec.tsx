import { render } from '@testing-library/react';

import TagDoc from './tag-doc';

describe('TagDoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TagDoc />);
    expect(baseElement).toBeTruthy();
  });
});
