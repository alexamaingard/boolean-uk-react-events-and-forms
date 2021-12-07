import ProductForm from "./components/ProductForm"
import ProductInfo from "./components/ProductInfo"

function ProductSection() {
  return (
    <section className="shadow pad-lg">
      <ProductInfo />
      <ProductForm />
    </section>
  )
}

export default ProductSection