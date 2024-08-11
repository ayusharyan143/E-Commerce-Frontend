import { Grid } from '@mui/material';
import React from 'react';
import OrderCart from './OrderCart';

const orderStatus = [
    { label: "On The Way", value: "on_the_way" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "cancelled" },
    { label: "Returned", value: "returned" },
];

const Order = () => {
    return (
        <div className='px-4 sm:px-6 lg:px-20 py-6'>
            <Grid container spacing={2}>

                <Grid item xs={12} sm={4} md={3} lg={2.5}>
                    <div className='h-auto shadow-lg bg-white p-4 md:p-5 sticky top-5'>
                        <h1 className='font-bold text-lg md:text-xl'>Filter</h1>
                        <div className='space-y-4 mt-6'>
                            <h2 className='font-semibold text-base md:text-lg'>ORDER STATUS</h2>
                            {orderStatus.map((option) => (
                                <div className='flex items-center' key={option.value}>
                                    <input
                                        defaultValue={option.value}
                                        type="checkbox"
                                        className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                        id={option.value}
                                    />
                                    <label
                                        className='ml-3 text-sm text-gray-600'
                                        htmlFor={option.value}
                                    >
                                        {option.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </Grid>

                <Grid item xs={12} sm={8} md={9} lg={9.5}>
                    <div className='space-y-6'>
                        {[1, 1, 1, 1, 1].map((item, index) => (
                            <OrderCart key={index} />
                        ))}
                    </div>
                </Grid>

            </Grid>
        </div>
    );
};

export default Order;
