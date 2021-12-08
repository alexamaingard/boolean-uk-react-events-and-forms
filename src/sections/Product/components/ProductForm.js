import { useState } from "react"
import ColorSquare from "./ColorSquare"

const initialProductData = {
  size: '',
  color: '',
  quantity: null,
}

const ProductForm = () => {
  const [productData, setProductData] = useState(initialProductData);
  
  const handleProductChange = event => {
    let {name, value} = event.target;
    setProductData({...productData, [name]: value});
  }

  const handleProductSubmit = event => {
    event.preventDefault();
    setProductData(productData);
    
    console.log('product submit:', productData);
  }

  return (
    <form className="form-stack" onSubmit={handleProductSubmit}>
      <label>Size</label>
      <input 
        type="radio" 
        id="size-sm" 
        name="size" 
        value={productData.size}
        onChange={handleProductChange} 
      />
      <label htmlFor="size-sm">S</label>
      <input 
        type="radio" 
        id="size-md" 
        name="size" 
        value="medium"
        onChange={handleProductChange} 
      />
      <label htmlFor="size-md">M</label>
      <input 
        type="radio" 
        id="size-lg" 
        name="size" 
        value={productData.size}
        onChange={handleProductChange} 
      />
      <label htmlFor="size-lg">L</label>
      <label htmlFor="size">Color</label>
      <ColorSquare color={productData.color}/>
      <select id="color" name="color" onChange={handleProductChange}>
        <option value="">Please Select a Color...</option>
        <option value="white">White</option>
        <option value="black">Black</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
      <label htmlFor="quantity">Quantity</label>
      <input 
        type="number" 
        id="quantity" 
        name="quantity" 
        onChange={handleProductChange}
      />
      <button type="submit">Buy</button>
    </form>
  )
}

export default ProductForm