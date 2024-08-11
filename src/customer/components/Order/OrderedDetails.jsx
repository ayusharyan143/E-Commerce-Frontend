import React from 'react';
import AddressCard from '../AddressCard/AddressCard';
import OrderTracker from './OrderTracker';
import { Box, Grid } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderedDetails = () => {
    return (
        <div className='px-5 sm:px-10 md:px-15 lg:px-20'>
            <div className='p-5 shadow-lg rounded-md border mb-8 mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16'>
                <AddressCard />
            </div>

            <div className='py-10 sm:py-15 md:py-20'>
                <OrderTracker activeStep={3} />
            </div>

            <Grid container spacing={3}>
                {[1, 1, 1, 1, 1].map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={item}>
                        <Box className='shadow-xl rounded-md p-4 sm:p-5 border' sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12}>
                                    <div className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4'>
                                        <img className='w-full sm:w-[7rem] h-auto sm:h-[7rem] object-cover object-top' 
                                            src="https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-lehenga-choli/s/i/s/free-3-4-sleeve-semi-stitched-16-lehenga-lehenga-for-women-original-imah2snksezebsfx.jpeg?q=70" 
                                            alt="Embroidered Semi Stitched Lehenga Choli" 
                                        />
                                        <div className='space-y-2 sm:ml-5'>
                                            <p className='font-semibold text-sm sm:text-base'>Embroidered Semi-Stitched Lehenga Choli</p>
                                            <p className='text-xs sm:text-sm opacity-50'><span>Color: Pink</span> <span className='hidden sm:inline-block'>|</span> <span>Size: M</span></p>
                                            <p className='text-xs sm:text-sm'>Seller: Linaria</p>
                                            <p className='text-lg sm:text-xl font-semibold'>₹1289</p>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box sx={{ color: deepPurple[500], display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                                        <StarBorderIcon sx={{ fontSize: "2rem" }} className='px-2' />
                                        <span className='text-sm sm:text-base'>Rate & Review Product</span>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default OrderedDetails;
