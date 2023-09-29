import { createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        userLoggedIn: false
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setUserLoggedIn: (state, action) => {
            state.userLoggedIn = action.payload
        },
    },
})

export const {setUser, setUserLoggedIn} = userSlice.actions

export default userSlice.reducer