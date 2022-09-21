import { render } from '@testing-library/react';

import NotificationBannerDoc from './notification-banner-doc';

describe('NotificationBannerDoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NotificationBannerDoc />);
    expect(baseElement).toBeTruthy();
  });
});
