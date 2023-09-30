import {RootStore} from './types'

// ASSET SELECTORS
export const assetsItemsSelector = (state: RootStore): any[] => state.assets.items
export const assetsHasNextPage = (state: RootStore): boolean => !!state.assets.next
export const assetsHasPreviousPage = (state: RootStore): boolean => !!state.assets.previous
export const assetsIsLoading = (state: RootStore): boolean => state.assets.isLoading
export const assetsHasError = (state: RootStore): boolean => state.assets.hasError
export const assetsLimitSelector = (state: RootStore): number => state.assets.limit

// USER SELECTORS
export const userLoggedIn = (state: RootStore): boolean => state.user.userLoggedIn
