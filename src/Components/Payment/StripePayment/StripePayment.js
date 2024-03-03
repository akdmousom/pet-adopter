'use client'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { useEffect, useState } from 'react';
import axios from 'axios';
const stripePromise = loadStripe('pk_test_51OFa8mLyPuxrVtxVxj4uYM8JVPorLKehNtolkNf38r2CJS99FWfRz7IF9o3EWE6E5B1YuybNl0bB1RAhzR230FOi00S1TL9GlV');
const StripePayment = ({ item, session }) => {
    const [clientSecretData,seclientSecretData]=useState(null)
    useEffect(() => {
        console.log('client use effect')
        axios.post('http://localhost:5000/createPaymentIntent', { price: item?.price })
            .then((res) => {
                console.log('client',res.data)
                seclientSecretData(res.data.clientSecret)
            })
    }, [])
  return (
    <>
      <Elements stripe={stripePromise}>
                <CheckoutForm item={item} session={session} clientSecretData={clientSecretData}/>
            </Elements>
    </>
  )
}

export default StripePayment
