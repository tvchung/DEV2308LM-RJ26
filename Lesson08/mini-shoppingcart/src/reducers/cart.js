
// sử dụng các chức năng trong giỏ hàng: buy, update, delete
import { BUY_ITEM, DELETE_ITEM, UPDATE_ITEM } from "../constants/actionTypes";
//  sử dụng localStorage
import { LOCAL_STORAGE_NAME } from "../constants/localStorageName";

//  hằng: khởi tạo state quản lý giỏ hàng
let  initState = []
// kiểm tra xem mua lần đầu tiên hay mua thêm
const shoppingCartLocal = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME))
initState = (shoppingCartLocal !=null && shoppingCartLocal.length >=0)? shoppingCartLocal : []

//  hàm kiểm tra xem sản phẩm có trong giỏ hàng không?
const getIndexByProduct=(list, propduct)=>{
    for (let index = 0; index < list.length; index++) {
        if(list[index].product.productId===propduct.productId){
            return index; // Sản phẩm đã tồn tại trong giỏ hàng
        }        
    }
    return -1; // sản phẩm chưa có trong giỏ hàng
}

// tạo reducer
const cart = (state=initState, action)=>{
    // lấy sản phẩm, số lượng từ action
    let {product, quantity}= action;
    let item = {product, quantity};
    // biến quản lý chức năng mua (mua mới, mua thêm)
    let index=-1; // giả định sản phầm là mua mới

    // tùy theo chức năng (type) để xác định mua hàng, cập nhật, xóa
    switch (action.type) {
        case BUY_ITEM: // mua hàng
            if(state.length === 0){
                // khách hàng chưa mua hàng, giỏ hàng của khách chưa có sản phẩm nào
                // thêm sản phẩm vào giỏ hàng
                state.push(item)
            }else{ // giỏ hàng của khách đã tồn tại
                // TH1 / TH2
                // dựa vào index để xác định => viết hàm kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
                index = getIndexByProduct(state, product); 
                if(index >=0){
                    // Sản phẩm mua đã có trong giỏ hàng, thực hiện cập nhật số lượng
                    state[index].quantity = parseInt(state[index].quantity) + parseInt(quantity);
                }else{
                    // nếu sẩn phẩm mua là mới, chưa có trong giỏ hàng
                    state.push(item);
                }
            }
            //cập nhật lại localStorage
            localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(state));
            console.log("BuyItem:", state);
            return [...state];

        case UPDATE_ITEM: // cập nhật giỏ hàng
            // tìm sản phẩm cần sửa
            index = getIndexByProduct(state, product);
            if(index >=0){
                state[index].quantity = parseInt(quantity);
            }

             // cập nhật localStorage
             localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(state));
             return [...state];
        case DELETE_ITEM: // xóa sản phẩm trong giỏ hàng
            // tìm sản phẩm cần xóa
            index = getIndexByProduct(state, product);
            if(index>=0){
                state.splice(index,1);
            }
            // cập nhật localStorage
            localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(state));
            return [...state];
        default:
            return state; // new state
    }
}

export default cart;