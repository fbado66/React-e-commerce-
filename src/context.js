import React, {Component} from 'react';
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
  // state = {
  //   products: [],
  //   detailProduct: detailProduct,
  //   cart: [],
  //   modalOpen: false,
  //   modalProduct: detailProduct,
  //   cartSubTotal: 0,
  //   cartTax: 0,
  //   cartTotal: 0
  // };
  state={
    products:storeProducts, 
    // detailProduct:detailProduct
  }
  handleDetail =() =>{
    console.log('Hello from detail');
  }
  addToCart = () =>{
    console.log('Hello from Cart');
  }
  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail:this.handleDetail,
        addToCart:this.addToCart,
      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};