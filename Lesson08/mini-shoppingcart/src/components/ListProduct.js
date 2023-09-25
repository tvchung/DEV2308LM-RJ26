import React, { Component } from "react";
import Product from "./Product";
//  connect
import { connect } from "react-redux";

class ListProduct extends Component {
  render() {
    console.log("ListProduct:", this.props.products);
    let elementProduct = this.props.products.map((item, index)=>{
        return <Product key={item.productId}  product={item} stt={index+1}/>
    })
    return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h1 className="panel-title">List Products</h1>
          </div>
          <div className="panel-body" id="list-product">
            {/* PRODUCT : START */}
            {/* <Product />
            <Product />
            <Product /> */}
            {elementProduct}
            {/* PRODUCT : END */}
            {/* PRODUCT : START */}
            
            {/* PRODUCT : END */}
          </div>
        </div>
      </div>
    );
  }
}

// map state trong store với props trong component
const mapStateToProps = (state)=>{
    return {
        products:state.listProduct
    }
}
export default connect(mapStateToProps,null)(ListProduct);
