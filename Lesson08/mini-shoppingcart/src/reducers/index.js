// combine reducer
import {combineReducers} from 'redux'
import listProduct from './listProduct'
import cart from './cart'
import notify from './notify'
// tạo reducer cho ứng dụng
const reducer = combineReducers({
    listProduct:listProduct,
    cart:cart,
    notify:notify
})

export default reducer;