import {useAppDispatch} from '../store'
import {useSelector} from 'react-redux'
import {
    assetsHasError,
    assetsIsLoading,
    assetsItemsSelector
} from '../store/selectors'
import {
    loadAssets,
} from '../store/slices/Assets'
import {useEffect} from 'react'
import {Box, Grid} from '@mui/material'
import Loader from '../components/shared/Loader'
import AssetCard from '../components/AssetCard'
import ErrorPage from '../pages/ErrorPage'
import PaginationFooter from './shared/PaginationFooter'

const DisplayAssetsContent = () => {
    const dispatch = useAppDispatch()
    const assets = useSelector(assetsItemsSelector)
    const isLoading = useSelector(assetsIsLoading)
    const hasError = useSelector(assetsHasError)

    useEffect(() => {
        dispatch(loadAssets(''))
    }, [dispatch]) //eslint-disable-line

    if (isLoading) {
        return <Loader/>
    }

    // Displaying Error page with ability to reload assets
    if (hasError) {
        return <ErrorPage text="Error while loading assets." retry={() => dispatch(loadAssets(''))}/>
    }

    return (
        <Box sx={{paddingBottom: '20px'}}>
            {
                assets && !isLoading && (
                    <Box sx={{
                        padding: {xs: '90px 20px', sm: '100px 30px'},
                        boxSizing: 'border-box',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <Grid container spacing={3} columns={10} justifyContent={'center'} alignItems={'center'}>
                            {
                                assets.map((asset) => (
                                    <AssetCard key={asset.id} title={asset.name || 'N/A'}
                                               imageUrl={asset.image_thumbnail_url}/>
                                ))
                            }
                        </Grid>
                    </Box>
                )
            }
            <PaginationFooter />
        </Box>
    )
}
export default DisplayAssetsContent