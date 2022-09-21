import { render } from '@testing-library/react';

import CharacterCountDoc from './character-count-doc';

describe('CharacterCountDoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CharacterCountDoc />);
    expect(baseElement).toBeTruthy();
  });
});
