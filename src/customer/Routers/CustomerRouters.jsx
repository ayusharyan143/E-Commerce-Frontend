import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../components/pages/HomePage/HomePage'
import Cart from '../components/Cart/Cart'
import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'
import Product from '../components/Product/Product'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import Checkout from '../components/Checkout/Checkout'
import Order from '../components/Order/Order'
import OrderedDetails from '../components/Order/OrderedDetails'
import PaymentSuccess from '../components/Payment/PaymentSuccess'
import DeliveryAddressForm from '../components/Checkout/DeliveryAddressForm'

const CustomerRouters = () => {
    return (
        <div>
            <div>
                <Navigation />
            </div>

            <Routes>
                
                <Route path='/login' element={<HomePage />} ></Route>
                <Route path='/register' element={<HomePage />} ></Route>
                <Route path='/' element={<HomePage />} ></Route>
                <Route path='/Cart' element={<Cart />} ></Route>
                <Route path='/:levelOne/:levelTwo/:levelThree/' element={<Product />} ></Route>
                <Route path='/product/:productId' element={<ProductDetails />} ></Route>
                <Route path='/Checkout' element={<Checkout />} ></Route>
                <Route path='/account/order' element={<Order />} ></Route>
                <Route path='/account/order/:orderId' element={<OrderedDetails />} ></Route>
                <Route path='/payment/:orderId' element={<PaymentSuccess />} ></Route>
                <Route path='Checkout?step=2' element={<DeliveryAddressForm />} ></Route>


            </Routes>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default CustomerRouters