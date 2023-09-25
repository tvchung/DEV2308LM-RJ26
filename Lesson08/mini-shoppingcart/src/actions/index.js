// sử dụng các hằng
import * as types from '../constants/actionTypes'

// action cho chức năng hiển thị sản phẩm
export const act_list_product = ()=>{
    return{
        type:types.LIST_PRODUCT
    }
}

// action - chức năng mua hàng
export const act_buy_item = (product, quantity)=>{
    return {
        type:types.BUY_ITEM,
        product,
        quantity
    }
}
// action - chức năng cập nhật giỏ  hàng
export const act_update_item = (product, quantity)=>{
    return {
        type:types.UPDATE_ITEM,
        product,
        quantity
    }
}

// action - chức năng xóa sản phẩm trong giỏ hàng
export const act_delete_item = (product)=>{
    return {
        type:types.DELETE_ITEM,
        product,
    }
}
// action cho chức năng thông báo
export const act_change_notifyy = (content)=>{
    return {
        type:types.CHANGE_NOTIFY,
        payload:content
    }
}