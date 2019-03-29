import React, { Component } from 'react';
import db from '../db';
import ProductItem from './ProductItem';

class ProductsList extends Component {
  state = {
    products: []
  }
  componentDidMount() {
    setTimeout(() => this.setProducts(db), 150)
  }

  setProducts = (products) => {
    this.setState({ products })
  }
  render() {
    console.log(this.state.products)
    const { products } = this.state; 
    return (
      <div className="product-wrap">
        {
          products.length ?
          <ul>
            {products.map(product => (
              <ProductItem
                key={product.id}
                {...product}
              />
            ))}
          </ul>
           :
          'Loading...'
        }
      </div>
    )
  }
}

export default ProductsList;