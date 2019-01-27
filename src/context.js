import React, {Component} from 'react';
import {storeProducts, descriptionProduct} from './data';

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
   state = {
     products: [],
      descriptionProduct: descriptionProduct,
      cart: [],
      modalOpen: false,
      modalProduct: descriptionProduct,
      cartSubTotal: 0,
      cartTax: 0,
      cartTotal: 0
   };
   componentDidMount(){
     this.setProducts();
   }
 
   setProducts = () => {
     let tempProducts = [];
     storeProducts.forEach(item => {
       const singleItem = { ...item};
       tempProducts = [...tempProducts,singleItem];
     })
     this.setState( ()=> {
       return {products: tempProducts};
     });
   };

getItem = (id) => {
  const product = this.state.products.find(item => item.id === id);
  return product;
};

  handleDescription =(id) =>{
    const product = this.getItem(id);
    this.setState(()=> {
      return {descriptionProduct:product}
    })
  };
  addToCart = id =>{
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
      product.inCart = true;
      product.count = 1;
      const price = product.price;
      product.total = price;  

      this.setState(() => {
        return {
          products: [...tempProducts],
          cart: [...this.state.cart, product],
          descriptionProduct: { ...product }
        };
      }, this.addTotals);
    };

  openModal = id =>{
    const product = this.getItem(id);
    this.setState(() =>{
      return {modalProduct: product, modalOpen: true}
    })
  }

  closeModal = ()=>{
    this.setState(() =>{
      return {modalOpen: false}
    })
  }

  increment = (id) =>{
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(() =>{
      return {
        cart: [...tempCart]
      }
    }, () =>{
      this.addTotals()
    })
  };
  decrement = (id) =>{
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;
    if (product.count ===0) {
      this.removeItem(id)
    }
    else {
      product.total = parseFloat((product.count * product.price).toFixed(2));
      this.setState(
        () =>{
        return {
          cart: [...tempCart]
        };
      }, () =>{
        this.addTotals()
      }
      );
    }

  };
  removeItem = (id) =>{
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removeProduct = tempProducts[index];
    removeProduct.inCart = false;
    removeProduct.count = 0;
    removeProduct.total = 0;

    this.setState(() =>{
      return {
        cart: [...tempCart],
        products: [...tempProducts],
      }
    },() => {
      this.addTotals();
    });

  };
  clearCart = () =>{
    this.setState(() =>{
      return {cart:[]};
    },() =>{
      this.setProducts();
      this.addTotals();
    });
  };
addTotals = () => {
  let subTotal = 0;
  this.state.cart.map(item => parseFloat( (subTotal += item.total).toFixed(2) ) );
  const tempTax = parseFloat((subTotal * 0.15).toFixed(2));
  const tax = parseFloat(tempTax.toFixed(2));
  const total = parseFloat((subTotal + tax).toFixed(2));
  this.setState(() => {
    return {
      cartSubTotal:subTotal,
      cartTax:tax,
      cartTotal:total
    };
  });
}
  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDescription:this.handleDescription,
        addToCart:this.addToCart,
        openModal: this.openModal,
        closeModal: this.closeModal,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart

      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};