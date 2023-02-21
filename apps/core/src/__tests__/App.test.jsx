import { waitFor } from '@testing-library/react';
import { renderWithRouter } from '@monorepo/shared';
import App from '../App';

describe('renders without crashing', () => {
  it('renders homepage', async () => {
    const { getByRole, getAllByText } = renderWithRouter(<App />);

    await waitFor(() => [getByRole('main')]);

    expect(getAllByText(/dashboard/i)).not.toBeNull();
  });
});
