import { render } from '@testing-library/react';

import AccordionDoc from './accordion-doc';

describe('AccordionDoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccordionDoc />);
    expect(baseElement).toBeTruthy();
  });
});
