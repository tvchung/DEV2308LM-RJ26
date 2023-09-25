import React, { Component } from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import Notify from "./Notify";
import { connect } from "react-redux";
class Cart extends Component {
  render() {
    // lấy dữ liệu từ props, render ra view
    let {carts} = this.props;
    let elementCartItem = carts.map((item,index)=>{
      return <CartItem key={index} renderCart = {item} rollNo={index+1} />
    })
    return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h1 className="panel-title">Your Cart</h1>
          </div>
          <div className="panel-body">
            <table className="table">
              <thead>
                <tr>
                  <th width="4%">#</th>
                  <th>Pokemon</th>
                  <th width="15%">Price</th>
                  <th width="4%">Quantity</th>
                  <th width="20%">Subtotal</th>
                  <th width="25%">Action</th>
                </tr>
              </thead>
              <tbody id="my-cart-body">
                {/* CART BODY */}
                {/* <CartItem /> */}
                {elementCartItem}
              </tbody>
              <CartTotal renderCarts={carts}/>
            </table> 
          </div>
        </div>
       <Notify />
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    carts:state.cart,
  }
}

export default connect(mapStateToProps, null)(Cart);
