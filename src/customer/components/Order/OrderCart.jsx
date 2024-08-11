import { Grid } from '@mui/material';
import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { useNavigate } from 'react-router-dom';

const OrderCart = () => {

    const navigate = useNavigate();

    return (
        <div onClick={()=>navigate(`/account/order/${5}`)} className='p-4 md:p-5 shadow-md hover:shadow-2xl border rounded'>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>

                <Grid item xs={12} sm={6}>
                    <div className='flex flex-col sm:flex-row items-start cursor-pointer'>
                        <img
                            className='w-full sm:w-[5rem] h-auto sm:h-[5rem] object-cover object-top'
                            src="https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-lehenga-choli/n/8/i/free-3-4-sleeve-semi-stitched-16-lehenga-lehenga-for-women-original-imahfngdzvf8swzb.jpeg?q=70"
                            alt="Embroidered Semi-Stitched Lehenga Choli"
                        />
                        <div className='sm:ml-5 mt-4 sm:mt-0'>
                            <p className='text-base sm:text-lg font-medium'>Embroidered Semi-Stitched Lehenga Choli</p>
                            <p className='opacity-60 text-sm font-semibold mt-2'>Size: M</p>
                            <p className='opacity-60 text-sm font-semibold'>Color: Purple</p>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={6} sm={2}>
                    <p className='text-base sm:text-lg font-medium'>₹549</p>
                </Grid>

                <Grid item xs={6} sm={4}>
                    {true ? (
                        <div>
                            <p className='flex items-center'>
                                <LocalShippingIcon sx={{ width: "17px", height: "17px" }} className='text-green-600 mr-2' />
                                <span>Delivered on March 15</span>
                            </p>
                            <p className='text-xs text-gray-500'>
                                Your item has been delivered
                            </p>
                        </div>
                    ) : (
                        <p className='flex items-center'>
                            <LocalShippingIcon sx={{ width: "17px", height: "17px" }} className='text-green-600 mr-2' />
                            <span>Expected delivery on March 15</span>
                        </p>
                    )}
                </Grid>

            </Grid>
        </div>
    );
};

export default OrderCart;
