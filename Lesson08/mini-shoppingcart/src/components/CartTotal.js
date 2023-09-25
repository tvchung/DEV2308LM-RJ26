import React, { Component } from 'react';

class CartTotal extends Component {
    render() {
      let {renderCarts}  = this.props;
      let elementCartInfor =  <tr>
                                <th colSpan={6}>Empty product in your cart</th>
                              </tr>;
      if(renderCarts !=null && renderCarts.length>0){
          // Tính tổng giá:
          let tongGiaTri =0;
          for (let index = 0; index < renderCarts.length; index++) {
              tongGiaTri += parseFloat(renderCarts[index].product.price)*parseFloat(renderCarts[index].quantity)
          }
          elementCartInfor = (
            <tr>
                  <td colSpan={4}>
                    There are <b>{renderCarts.length}</b> items in your shopping cart.
                  </td>
                  <td colSpan={2} className="total-price text-left">
                    {tongGiaTri} USD
                  </td>
                </tr>
          )
      }
        return (
            <tfoot id="my-cart-footer">
                {/* CART FOOTER */}
                {/* <tr>
                  <th colSpan={6}>Empty product in your cart</th>
                </tr>
                <tr>
                  <td colSpan={4}>
                    There are <b>5</b> items in your shopping cart.
                  </td>
                  <td colSpan={2} className="total-price text-left">
                    12 USD
                  </td>
                </tr> */}
                {elementCartInfor}
              </tfoot>
        );
    }
}

export default CartTotal;