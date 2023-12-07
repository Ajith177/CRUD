import { configureStore } from '@reduxjs/toolkit';
import UserDetail from "../features/UserDetails"

// const store = configureStore({
//     reducer: {
//         show: UserDetail
//     }, 
// });

// export default store;  


 const store=configureStore({
    reducer:{
        post: UserDetail
    }
})
export default store