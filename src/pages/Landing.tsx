import {useAppDispatch} from '../store'
import {useSelector} from 'react-redux'
import {
    assetsHasError,
    assetsHasNextPage,
    assetsHasPreviousPage,
    assetsIsLoading,
    assetsItemsSelector
} from '../store/selectors'
import {
    loadAssets,
    loadNextAssets,
    loadPreviousAssets,
} from '../store/slices/Assets'
import {useEffect} from 'react'
import {Button} from '@mui/material'
import Loader from '../components/shared/Loader'
import ErrorPage from './ErrorPage'

const Landing = () => {
    const dispatch = useAppDispatch()

    const assets = useSelector(assetsItemsSelector)
    const hasNext = useSelector(assetsHasNextPage)
    const hasPrevious = useSelector(assetsHasPreviousPage)
    const isLoading = useSelector(assetsIsLoading)
    const hasError = useSelector(assetsHasError)

    const next = () => dispatch(loadNextAssets())
    const previous = () => dispatch(loadPreviousAssets())

    useEffect(() => {
        dispatch(loadAssets(''))
    }, []) //eslint-disable-line

    if(isLoading) {
        return <Loader />
    }
    if(hasError) {
        return <ErrorPage text="Error while loading assets." retry={() => dispatch(loadAssets(''))} />
    }

    return (
        <>
            {assets.map((a) => (
                <h1>{a.token_id}</h1>
            ))
            }
            <Button disabled={!hasPrevious} onClick={previous}>Previous</Button>
            <Button disabled={!hasNext}  onClick={next}>Next</Button>
        </>
    )
}
export default Landing