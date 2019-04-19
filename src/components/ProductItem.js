import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ProductItem = ({ brand, name, price, category, imagePath }) => {
  return (
    <li className="product-item">
      <div className="product-box">
        <div className="product-box-img" style={{ backgroundImage: `url('${imagePath}')` }} />
        <h4>{brand}</h4>
        <span className="product-box-desc">{name}</span>
        <h6>${price}</h6>
        <Button position="right" type="primary">
          Show more
        </Button>
      </div>
    </li>
  );
};

ProductItem.propTypes = {
  brand: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
  imagePath: PropTypes.string
};

export default ProductItem;
