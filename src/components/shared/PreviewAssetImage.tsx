import {Backdrop, Box, DialogContent} from '@mui/material'
import {Dispatch, SetStateAction} from 'react'

const PreviewAssetImage:React.FC<{imageUrl:string, setImage:Dispatch<SetStateAction<string>>}> = ({imageUrl, setImage}) => {
    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
                onClick={() => setImage('')}
            >
                <DialogContent>
                    <Box
                    sx={{
                        height: "70vh",
                        background:
                            `url(${imageUrl}) no-repeat center center`,
                        backgroundSize: "contain",
                    }}
                />
                </DialogContent>
            </Backdrop>
        </>
    )
}
export default PreviewAssetImage
