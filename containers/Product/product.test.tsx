import { render, screen, cleanup } from '@testing-library/react'
import { ProductContainer } from './index'

afterEach(cleanup);

describe('Product', () => {
  it('renders a heading for Product container', () => {
    render(<ProductContainer />)

    const queryResult = screen.getAllByTestId('productContainer');

    expect(
        queryResult[0].textContent?.startsWith("Product Container"),
    ).toBeTruthy();
  })
})