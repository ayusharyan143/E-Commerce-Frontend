import { Box, Button, Container, Grid, TextField } from '@mui/material';
import React from 'react';
import AddressCard from '../AddressCard/AddressCard';

const DeliveryAddressForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        const address = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            streetAddress: data.get("address"),
            city: data.get("city"),
            state: data.get("state"),
            zipCode: data.get("zip"),
            mobile: data.get("phoneNumber"),
        };

        console.log("address:", address);
    };

    return (
        <Container maxWidth="lg" sx={{ my: 4 }}> {/* Adjusts margin and width */}
            <Grid container spacing={4}>
                {/* Address Card Section */}
                <Grid item xs={12} lg={5}>
                    <Box className='border rounded-md shadow-md h-[30.5rem] overflow-y-scroll p-5'>
                        <div className='border pb-5 p-4'>
                            <AddressCard />
                        </div>
                        <Button sx={{ mt: 3, bgcolor: "RGB(154 85 253)" }} size='large' variant='contained'>
                            Deliver Here
                        </Button>
                    </Box>
                </Grid>

                {/* Delivery Address Form Section */}
                <Grid item xs={12} lg={7}>
                    <Box className='border rounded-md shadow-md p-5'>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='firstName'
                                        name='firstName'
                                        label='First Name'
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='lastName'
                                        name='lastName'
                                        label='Last Name'
                                        fullWidth
                                        autoComplete='family-name'
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id='address'
                                        name='address'
                                        label='Address'
                                        fullWidth
                                        autoComplete='address'
                                        multiline
                                        rows={4}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='city'
                                        name='city'
                                        label='City'
                                        fullWidth
                                        autoComplete='address-level2'
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='state'
                                        name='state'
                                        label='State/Province/Region'
                                        fullWidth
                                        autoComplete='address-level1'
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='zip'
                                        name='zip'
                                        label='Zip/Postal Code'
                                        fullWidth
                                        autoComplete='postal-code'
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='phoneNumber'
                                        name='phoneNumber'
                                        label='Phone Number'
                                        fullWidth
                                        autoComplete='tel'
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Button sx={{ py: 1.5, mt: 1, bgcolor: "RGB(154 85 253)" }} size='large' variant='contained' type='submit'>
                                        Submit Address
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DeliveryAddressForm;
