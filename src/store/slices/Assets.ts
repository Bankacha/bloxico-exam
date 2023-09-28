import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import openSeaApi from '../../api/OpenSea'
import {RootStore} from '../types'

// type AssetsState = {
//     items: any[];
//     next: string | null;
//     previous: string | null;
//     limit: number;
// }

export const assetsSlice = createSlice({
    name: 'assets',
    initialState: {
        items: [],
        next: null,
        previous: null,
        limit: 5,
        isLoading: false,
        hasError: false
    },
    reducers: {
        setAssets: (state, action) => {
            state.items = action.payload.assets
            state.next = action.payload.next
            state.previous = action.payload.previous
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setError: (state, action) => {
            state.hasError = action.payload
        }
    },
})

export const {setAssets, setLoading, setError} = assetsSlice.actions

// LOADING ASSETS AND HANDLE PREV/NEXT PAGE
export const loadAssets = createAsyncThunk('asset/LoadAssets', async (action: string, {getState, dispatch}) => {
    const {assets: {previous, next, limit, isLoading}} = getState() as RootStore
    const isNextAction = action === 'NEXT'
    const isPreviousAction = action === 'PREV'

    if (isLoading) {
        return
    }
    if (isNextAction && !next) {
        return
    }
    if (isPreviousAction && !previous) {
        return
    }

    dispatch(setLoading(true))
    dispatch(setError(false))

    let cursor = ''
    if (isNextAction) {
        cursor = `&cursor=${next}`
    }
    if (isPreviousAction) {
        cursor = `&cursor=${previous}`
    }

    try {
        const response = await openSeaApi.get(`/assets?order_direction=desc&limit=${limit}${cursor}`)
        if (response.status !== 200) {
            dispatch(setError(true))
        } else {
            await dispatch(setAssets(response.data))
        }

    } catch (err) {
        dispatch(setError(true))
    }

    dispatch(setLoading(false))
})

export const loadNextAssets = createAsyncThunk('asset/LoadNextAssets', async (action, {dispatch}) => {
    dispatch(loadAssets('NEXT'))
})

export const loadPreviousAssets = createAsyncThunk('asset/LoadPreviousAssets', async (action, {dispatch}) => {
    dispatch(loadAssets('PREV'))
})

export default assetsSlice.reducer