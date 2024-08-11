import React from 'react';
import CartItem from './CartItem';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const navigate = useNavigate()
    const handleCheckOut =()=>{navigate('/Checkout?step=2')}


    return (

        <div>
        
            <div className="container mx-auto p-4 lg:grid lg:grid-cols-3 lg:gap-6">
                {/* Cart Items Section */}
                <div className="lg:col-span-2 space-y-4">
                    {/* Replace [1,1,1,1] with actual cart items data */}
                    {[1, 1, 1, 1].map((item, index) => (
                        <CartItem key={index} className="mb-4" />
                    ))}
                </div>

                {/* Price Details Section */}
                <div className="mt-10 lg:mt-0 lg:sticky lg:top-0 lg:h-[100vh] lg:pl-4 lg:pr-4">
                    <div className="border p-4 rounded-lg shadow-sm">
                        <p className="uppercase font-bold text-gray-700 mb-4">Price Details</p>
                        <hr />
                        <div className="space-y-3 font-semibold mt-4 mb-5">
                            <div className="flex justify-between py-2 text-black">
                                <span>Price</span>
                                <span>₹2,999</span>
                            </div>

                            <div className="flex justify-between py-2">
                                <span>Discount</span>
                                <span className="text-green-600">-₹1,429</span>
                            </div>

                            <div className="flex justify-between py-2">
                                <span>Delivery Charge</span>
                                <span className="text-green-600">Free</span>
                            </div>

                            <div className="flex justify-between py-2 font-bold text-lg">
                                <span>Total Amount</span>
                                <span className="text-green-600">₹3,599</span>
                            </div>
                        </div>

                        <Button
                            onClick={handleCheckOut}
                            className="w-full mt-6"
                            variant="contained"
                            sx={{
                                px: "2.5rem",
                                py: "0.7rem",
                                bgcolor: "#9155fd",
                                color: "#fff",
                                textTransform: "uppercase",
                                fontWeight: "bold",
                                '&:hover': { bgcolor: "#7d44e0" },
                            }}
                        >
                            Proceed to Checkout
                        </Button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Cart;
