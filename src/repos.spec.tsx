import { render } from '@testing-library/react';
import Repos from './pages/Repositories';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Repos />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<Repos />);
    expect(getByText(/Welcome github-search/gi)).toBeTruthy();
  });
});
