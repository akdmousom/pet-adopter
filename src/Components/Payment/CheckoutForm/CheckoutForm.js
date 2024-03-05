'use client'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";
const CheckoutForm = ({ item, session, clientSecretData }) => {
    const router = useRouter()
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event) => {
        setloading(true)
        event.preventDefault();
        if (!stripe || !elements) {
            setloading(false)
            return;

        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            setloading(false)
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setloading(false)
            seterror(error?.message)
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecretData, {
            payment_method: {
                card: card,
                billing_details: {
                    email: session?.user?.email || 'anonymous',
                    name: session?.user?.fullName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            setloading(false)
            seterror(confirmError?.message)
        }
        else {
            if (paymentIntent.status === 'succeeded') {
                console.log(paymentIntent)
                const OrderData = {
                    email: session?.user?.email,
                    fullName: session?.user?.name,
                    price: item.price,
                    itemName: item.name,
                    transID : paymentIntent?.id,
                    image : item.image,
                }
                // 'https://pet-adopter-backend.vercel.app/api/v1/orders'  https://pet-adopter-backend.vercel.app
                axios.post('https://pet-adopter-backend.vercel.app/api/v1/orders', OrderData).then((res) => {
                    //.data.success
                    console.log(res.data)
                    if (res) {
                        setloading(false)
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your order has been taken",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                    router.push('/shop')
                })
            } else {
                seterror("somthing went's wrong")
                setloading(false)
            }
        }
    }

    return (
        <div>
            <div className="flex justify-center items-center container mx-auto mt-10">
                <div className="flex space-x-2 sm:space-x-4 mx-a">
                    <Image
                        width={500} height={400}
                        className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                        src={item.image}
                        alt={item.name}
                    />
                    <div className="flex flex-col justify-center gap-2 w-full pb-4">
                        <p className='text-base font-semibold'>{item?.name}</p>
                        <p className="text-lg font-semibold">${item?.price}</p>
                        <span>
                            <Link className='bg-red-500 p-3 rounded-md font-bold text-white py-1 inline-block' href={`/item/medical/${item?._id}`}>
                                back
                            </Link>
                        </span>
                    </div>

                </div>
            </div>
            <form className="my-11 max-w-2xl container mx-auto p-5" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}


                />
                {
                    error && <p className="py-2 text-red-600 font-bold text-xl">{error}</p>
                }{
                    loading && <button className=" mt-10 mx-auto block px-16  py-3" type="submit" disabled>
                        <span className="flex justify-center items-center gap-2">
                            Paying ${item?.price}  <span className="animate-spin mt-1 inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading"></span>
                        </span>
                    </button>
                }
                {!loading && <button className="border-green-600 py-3 bg-green-500 mt-10 mx-auto block px-16 hover:bg-green-300 transition-all active:scale-90" type="submit" disabled={!stripe || !elements || loading}>
                    Pay ${item?.price}
                </button>}
            </form>
        </div>

    )
}

export default CheckoutForm
