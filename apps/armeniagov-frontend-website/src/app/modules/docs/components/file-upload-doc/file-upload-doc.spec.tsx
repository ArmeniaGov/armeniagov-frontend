import { render } from '@testing-library/react';

import FileUploadDoc from './file-upload-doc';

describe('FileUploadDoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FileUploadDoc />);
    expect(baseElement).toBeTruthy();
  });
});
