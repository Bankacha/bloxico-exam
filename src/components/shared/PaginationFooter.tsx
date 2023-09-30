import {Box, Button, FormControl, InputLabel, MenuItem, Select} from '@mui/material'
import {loadNextAssets, loadPreviousAssets, updateLimit} from '../../store/slices/Assets'
import {useSelector} from 'react-redux'
import {assetsHasNextPage, assetsHasPreviousPage, assetsLimitSelector} from '../../store/selectors'
import {useAppDispatch} from '../../store'

const PaginationFooter = () => {
    const dispatch = useAppDispatch()
    const hasNext = useSelector(assetsHasNextPage)
    const hasPrevious = useSelector(assetsHasPreviousPage)
    const next = () => dispatch(loadNextAssets())
    const previous = () => dispatch(loadPreviousAssets())
    const limit = useSelector(assetsLimitSelector)

    return (
        <Box sx={{
            position: 'fixed',
            width: '100%',
            boxSizing: 'border-box',
            bottom: 0,
            padding: '20px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            columnGap: '16px',
            boxShadow: '0px -2px 6px 0px rgba(173,171,173,1)',
            zIndex: 1,
            backgroundColor: '#f2efe4',

        }}>
            <FormControl sx={{width: '70px'}}>
                <InputLabel>Limit</InputLabel>
                <Select
                    value={limit}
                    label="Limit"
                    onChange={(e) => dispatch(updateLimit(e.target.value as number))}
                    sx={{'& .MuiSelect-outlined': {padding:'10px'}}}
                >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                </Select>
            </FormControl>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                columnGap: '16px',
            }}>
                <Button variant={'contained'} disabled={!hasPrevious} onClick={previous}>Previous</Button>
                <Button variant={'contained'} disabled={!hasNext} onClick={next}>Next</Button>
            </Box>
        </Box>
    )
}
export default PaginationFooter