import { ProductStyles } from "./styles";

interface ProductContainerProps {

}

export const ProductContainer: React.FC<ProductContainerProps> = () => {
  return (
    <ProductStyles>
      <main data-testid="productContainer">
        Product Container
      </main>
    </ProductStyles>
  )
}

export default ProductContainer