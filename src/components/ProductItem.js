import React from 'react';
import PropTypes from 'prop-types'

const ProductItem = ({
  brand,
  name,
  price,
  category,
  imagePath
}) => {
  return (
    <li>
      <h4>{brand}</h4>
      <div>{name}</div>
      <h6>{price}</h6>
    </li>
  )
}

ProductItem.propTypes = {
  brand: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
  imagePath: PropTypes.string
}

export default ProductItem

