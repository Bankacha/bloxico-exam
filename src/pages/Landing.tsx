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
import {Box, Button, Grid} from '@mui/material'
import Loader from '../components/shared/Loader'
import ErrorPage from './ErrorPage'
import AssetCard from '../components/AssetCard'

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
    }, [dispatch]) //eslint-disable-line

    if (isLoading) {
        return <Loader/>
    }
    if (hasError) {
        return <ErrorPage text="Error while loading assets." retry={() => dispatch(loadAssets(''))}/>
    }

    return (
        <Box>
            {
                assets && !isLoading && (
                    <Box sx={{padding: {xs: '30px 20px', sm: '40px 30px',lg: '70px 30px'}, boxSizing: 'border-box', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Grid container spacing={3} columns={10} justifyContent={'center'} alignItems={'center'}>
                            {
                                assets.map((asset) => (
                                    <AssetCard title={asset.name || 'N/A'} imageUrl={asset.image_thumbnail_url}/>
                                ))
                            }
                        </Grid>
                    </Box>
                )
            }
            <Box sx={{
                position: 'fixed',
                width: '100%',
                boxSizing: 'border-box',
                bottom: 0,
                padding: '20px 20px',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                columnGap: '16px',
                boxShadow: '0px -2px 6px 0px rgba(173,171,173,1)',
                zIndex: 1,
                backgroundColor: 'white'
            }}>
                <Button variant={'contained'} disabled={!hasPrevious} onClick={previous}>Previous</Button>
                <Button variant={'contained'} disabled={!hasNext} onClick={next}>Next</Button>
            </Box>
        </Box>
    )
}
export default Landing