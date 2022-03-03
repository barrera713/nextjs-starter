import { render, screen, cleanup } from '@testing-library/react'
import { DashboardContainer } from './index'

afterEach(cleanup);

describe('Home', () => {
  it('renders a heading', () => {
    render(<DashboardContainer />)

    const queryResult = screen.getAllByTestId('dashboardContainer');

    expect(
        queryResult[0].textContent?.startsWith("Nerd alert."),
    ).toBeTruthy();
  })
})