import { createSlice } from "@reduxjs/toolkit"

export type userType = {
    username: string,
    email:string,
    authorized:boolean
}

const initialState : userType = {
    username:'',
    email:'',
    authorized:false
}

export const userSlice  = createSlice({
    name:'userState',
    initialState:initialState,
    reducers:{}
})


export default userSlice