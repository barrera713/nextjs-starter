import { render, screen, cleanup } from '@testing-library/react'
import { DashboardContainer } from './index'

afterEach(cleanup);

describe('Dashboard', () => {
  it('renders a heading for Dashboard container', () => {
    render(<DashboardContainer />)

    const queryResult = screen.getAllByTestId('dashboardContainer');

    expect(
        queryResult[0].textContent?.startsWith("Nerd alert."),
    ).toBeTruthy();
  })
})