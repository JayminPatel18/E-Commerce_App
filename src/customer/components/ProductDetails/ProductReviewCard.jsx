import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
    return (
        <div>
            <Grid container spacing={2} gap={3} sx={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                <Grid item xs={1}>
                    <Box>
                        <Avatar className='text-white' sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}>R</Avatar>
                    </Box>
                </Grid>
                <Grid item xs={9} sx={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                    <div className='space-y-2' sx={{ margin: 0, textAlign: 'left' }}>
                        <div>
                            <p style={{ margin: 0, textAlign: 'left' }} className='font-semibold text-lg'>Raam</p>
                            <p style={{ margin: 0, textAlign: 'left' }} className='opacity-70'>April 5, 2017</p>
                        </div>
                    </div>

                    <Box sx={{ textAlign: 'left' }}>
                        <Rating value={4.5} name="half-rating" readOnly precision={.5}/>
                    </Box>
                    <p style={{ margin: 0, textAlign: 'left' }}>Nice Product</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductReviewCard