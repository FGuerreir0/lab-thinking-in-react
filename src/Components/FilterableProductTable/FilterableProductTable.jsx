import React, { Component } from 'react';
import SearchBar from './../SearchBar/SearchBar';
import ProductTable from './../ProductTable/ProductTable';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products.data,
      searchWord: '',
      stockedProducts: true,
    };
  }

  handleInputChange = (event) => {
    this.setState({
      searchWord: event.target.value,
    });
  };

  updateShowStocked = (event) => {
    this.setState({
      stockedProducts: event.target.checked,
    });
  };

  render() {
    const products = this.props.products.filter((product) => {
      if (this.state.stockedProducts && !product.stocked) {
        return false;
      }
      return product.name
        .toLowerCase()
        .includes(this.state.searchWord.toLowerCase());
    });

    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar
          handleInputChange={this.handleInputChange}
          searchWord={this.state.searchWord}
          showStockedProducts={this.state.stockedProducts}
          updateShowStocked={this.updateShowStocked}
        />
        <ProductTable products={products} />
      </div>
    );
  }
}

export default FilterableProductTable;
