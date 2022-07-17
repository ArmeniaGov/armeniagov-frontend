import { render } from '@testing-library/react';

import NotificationBanner from './notification-banner';

describe('NotificationBanner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NotificationBanner />);
    expect(baseElement).toBeTruthy();
  });
});
