import {Box, Card, Grid, Typography} from '@mui/material'
import PlaceholderImage from '../assets/No-Image-Placeholder.png'
import PreviewAssetImage from './shared/PreviewAssetImage'
import {useState} from 'react'

const AssetCard: React.FC<{ title: string, imageUrl: string }> = ({title, imageUrl}) => {
    const [image, setImage] = useState<string>('')
    return (
        <>
            <Grid item xs={10} md={5} xl={2}>
                <Card sx={{boxShadow: '5px 6px 21px 0px rgba(0,0,0,0.57)'}}>
                    <Box sx={{boxSizing: 'border-box', padding: '8px', height: '50px'}}>
                        <Typography sx={{
                            fontWeight: 600,
                            textTransform: 'capitalize',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            height: '50px'
                        }}>{title}</Typography>
                    </Box>
                    <Box
                        sx={{boxSizing: 'border-box', padding: '8px', borderRadius: '8px', cursor: 'pointer'}}
                        onClick={() => setImage(imageUrl)}
                    >
                        <Box
                            sx={{
                                borderRadius: '4px',
                                backgroundImage: `url(${imageUrl || PlaceholderImage})`,
                                height: {xl: '500px', md: '600px', xs: '300px'},
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}
                        />
                    </Box>
                </Card>
            </Grid>
            {
                image && (
                    <PreviewAssetImage imageUrl={image} setImage={setImage}/>
                )
            }
        </>

    )
}
export default AssetCard