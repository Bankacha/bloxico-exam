import store from './index'

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
