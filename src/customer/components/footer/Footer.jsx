import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <Grid className='bg-black text-white text-center mt-10' container sx={{ bgcolor: "black", color: "white", py: 3 }}>

                {/*  Company */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Company</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom
                        >About</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom
                        >Blog</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom
                        >Press</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom
                        >Jobs</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom
                        >Partners</Button>
                    </div>

                </Grid>


                {/* Solutions */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Solutions</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom
                        >Marketing</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom
                        >Analysis</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom
                        >Comments</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom
                        >Insights</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom
                        >Support</Button>
                    </div>

                </Grid>


                {/* Documentation */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Company</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom
                        >Guides</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom
                        >Api Status</Button>
                    </div>

                </Grid>


                {/* Legal */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Legal</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom
                        >Claim</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom
                        >Privacy</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom
                        >Terms</Button>
                    </div>


                </Grid>

                <Grid className="pt-20" item xs={12}>
                    <Typography variant="body2" component="p" align="center">
                        &copy; 2024 My Company. All rights reserved
                    </Typography>

                    <Typography variant="body2" component="p" align="center">
                        Made With Love By Me
                    </Typography>

                    <Typography variant="body2" component="p" align="center">
                        Icons made by {' '}
                        <a href="https://www.freepik.com/" style={{ color: 'inherit', textDecoration: 'underline' }} >
                            Freepik
                        </a>{' '}
                        from{' '}
                        <a href="https://www.flaticon.com/" style={{ color: 'inherit', textDecoration: 'underline' }} >
                            www.flaticon.com
                        </a>
                    </Typography>
                </Grid>

            </Grid>
        </div>
    )
}

export default Footer