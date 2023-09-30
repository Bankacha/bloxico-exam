import { configureStore } from '@reduxjs/toolkit'
import assetsReducer from './slices/Assets'
import userReducer from './slices/User'
import {AppDispatch} from './types'
import {useDispatch} from 'react-redux'

export const store = configureStore({
    reducer: {assets: assetsReducer, user: userReducer},
})

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store;