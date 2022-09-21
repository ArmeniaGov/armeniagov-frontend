import { render } from '@testing-library/react';

import BreadcrumbsDoc from './breadcrumbs-doc';

describe('BreadcrumbsDoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BreadcrumbsDoc />);
    expect(baseElement).toBeTruthy();
  });
});
