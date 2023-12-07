// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     count: 0
// }
// export const UserDetail = createSlice({
//     name: "user",
//     initialState,
//     reducers: {
//         increment:(state, action) => {
//             state.count = state.count + 1;
//         },
//         decrement:(state, action) => {
//             state.count = state.count - 1;
//         },
//         reset:(state,action)=>{
//             state.count=0
//         }
//     }
// })

// export const { increment, decrement,reset } = UserDetail.actions;

// export default UserDetail.reducer; 

import {createSlice} from '@reduxjs/toolkit';

const initialState=[
    {
        id:'1',title:'Learning redux toolkit', content:'I have heard good things'},
        {
         id:'2',title:'getting the value',content:'The more way slice get works'
        }
]

export const UserDetail=createSlice({
    name:'post',
    initialState,
    reducers:{

    }

})

export const allposts =(state)=>state.post;
export default UserDetail.reducer;
