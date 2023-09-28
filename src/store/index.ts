import { configureStore } from '@reduxjs/toolkit'
import assetsReducer from './slices/Assets'
import {AppDispatch} from './types'
import {useDispatch} from 'react-redux'

export const store = configureStore({
    reducer: {assets: assetsReducer},
})

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store;