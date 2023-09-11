
/*
// BTH1:

// tạo reducer
const reducer = "Devmaster Academy"
// hiển thị dữ liệu từ reducer
console.log(reducer);
export default reducer
*/
//BTH2
//1. createStore
import {createStore} from 'redux'

//2. tạo reducer từ state và action
// khởi tọa state
const initState = {
    userName:"Chung Trịnh",
    courseName:"Devmmaster ReactJs"
}
// tạo reducer
const reducer = (state = initState, action)=>{

    switch(action.type){
        case "CHANGE_USERNAME":
            state.userName = action.payload;
            return state;
        case "CHANGE_COURSENAME":
            state.courseName = action.payload;
            return state;
    }
    return state;
}
//3. tạo store từ reducer
const store = createStore(reducer)

console.log(store);
console.log(store.getState());


// 4. thực thiện cập nhật state trong store từ action
// userName:
const actChangeUserName = ()=>{
    return {
        type:"CHANGE_USERNAME",
        payload:"Devmaster Academy"
    }
}
// bắn action từ component đến store để thực hiện cập nhật lại state
store.dispatch(actChangeUserName())
// sử lại reducer phần trên

// hiện thị state mới
console.log(store.getState());

// courseName
const actChangeCourseName = ()=>{
    return {
        type:"CHANGE_COURSENAME",
        payload:"Devmaster ReactJS-Redux"
    }
}
store.dispatch(actChangeCourseName())
// sửa lại reducer
// hiện thị state mới
console.log(store.getState());

export default reducer