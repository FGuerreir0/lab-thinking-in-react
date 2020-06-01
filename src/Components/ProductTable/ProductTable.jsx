import React from 'react';
import ProductRow from './../ProductRow/ProductRow';

function ProductTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((product) => (
          <ProductRow key={product.name} {...product} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
