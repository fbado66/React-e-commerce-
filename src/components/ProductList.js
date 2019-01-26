import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../data";
import { ProductConsumer } from "../context";
import styled from "styled-components";

export default class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render() {
    return (
      <React.Fragment>
        <ProductContainer className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map( product => {
                    return <Product key = {product.id} 
                    product = { product } />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </ProductContainer>
      </React.Fragment>
    );
  }
}

const ProductContainer = styled.section``;