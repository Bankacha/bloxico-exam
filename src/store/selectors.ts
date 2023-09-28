import {RootStore} from './types'

export const assetsItemsSelector = (state: RootStore): any[] => state.assets.items
export const assetsHasNextPage = (state: RootStore): boolean => !!state.assets.next
export const assetsHasPreviousPage = (state: RootStore): boolean => !!state.assets.previous
export const assetsIsLoading = (state: RootStore): boolean => state.assets.isLoading
export const assetsHasError = (state: RootStore): boolean => state.assets.hasError