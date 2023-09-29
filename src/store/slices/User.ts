import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        userLoggedIn: !!localStorage.getItem('logged_in')
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

export const logInUser = createAsyncThunk('users/LogInUser', async (action, {dispatch}) => {
    localStorage.setItem('logged_in', 'true')
    dispatch(setUserLoggedIn(true))
})

export const logOutUser = createAsyncThunk('asset/LogOutUser', async (action, {dispatch}) => {
    localStorage.removeItem('logged_in')
    dispatch(setUserLoggedIn(false))
})

export default userSlice.reducer