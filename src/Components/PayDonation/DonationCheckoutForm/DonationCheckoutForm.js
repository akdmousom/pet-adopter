'use client'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

const DonationCheckoutForm = ({ pay, clientSecretData, session }) => {
    const router = useRouter()
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event) => {
        setloading(true)
        event.preventDefault();
        const name = event.target.name.value
        const email = event.target.email.value
        const msg = event.target.msg.value
        console.log(name, email, msg)
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
                    email: email || 'anonymous',
                    name: name || 'anonymous'
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
                const DonateData = {
                    email: email,
                    name: name,
                    amount: pay,
                    msg: msg,
                    transID: paymentIntent?.id,
                }
                // console.log(DonateData)
                // return
                // 'https://pet-adopter-backend.vercel.app'  https://pet-adopter-backend.vercel.app
                axios.post('https://pet-adopter-backend.vercel.app/api/v1/donations', DonateData).then((res) => {
                    //.data.success
                    console.log(res.data)
                    if (res) {
                        setloading(false)
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your donation has been taken",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                    router.push('/donation')
                })
            } else {
                seterror("somthing went's wrong")
                setloading(false)
            }
        }
    }

    return (
        <div>
            <form className="my-11 max-w-xl container mx-auto p-5 bg-black bg-opacity-60" onSubmit={handleSubmit}>
                <div className="w-full flex gap-6
                 justify-center flex-col pb-5">
                    <div className="w-full">
                        <div className="relative w-full min-w-[200px] h-10">
                            <input
                                className="peer w-full h-full bg-transparent text-blue-gray-700  outline outline-0 focus:outline-0  transition-all placeholder-shown:border  text-white placeholder-shown:border-black focus:text-white placeholder-shown:border-t-black border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-black focus:border-[#F04336]"
                                defaultValue={session?.user?.fullName || ''}
                                disabled={session?.user?.fullName}
                                type='text'
                                name='name'
                                required
                            />
                            <label
                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate  peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-white peer-focus:text-[#F04336] before:border-black peer-focus:before:!border-[#F04336] after:border-black peer-focus:after:!border-[#F04336]">Enter Your Name
                            </label>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="relative w-full min-w-[200px] h-10">
                            <input
                                className="peer w-full h-full bg-transparent text-blue-gray-700  outline outline-0 focus:outline-0  transition-all placeholder-shown:border  text-white placeholder-shown:border-black focus:text-white placeholder-shown:border-t-black border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-black focus:border-[#F04336]"
                                defaultValue={session?.user?.email}
                                disabled={session?.user?.email}
                                type='email'
                                name='email'
                                required />
                            <label
                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-white peer-focus:text-[#F04336] before:border-black peer-focus:before:!border-[#F04336] after:border-black peer-focus:after:!border-[#F04336]">Enter Your Email
                            </label>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="relative w-full min-w-[200px] h-10">
                            <input
                                className="peer w-full h-full bg-transparent text-blue-gray-700  outline outline-0 focus:outline-0  transition-all placeholder-shown:border  text-white placeholder-shown:border-black focus:text-white placeholder-shown:border-t-black border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-black focus:border-[#F04336]"
                                defaultValue="take good care of pets"
                                type='text'
                                name='msg' />
                            <label
                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-white peer-focus:text-[#F04336] before:border-black peer-focus:before:!border-[#F04336] after:border-black peer-focus:after:!border-[#F04336]">leave a massage
                            </label>
                        </div>
                    </div>
                </div>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#FFFF',
                                '::placeholder': {
                                    color: '#FFFF',
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
                        <span className="flex justify-center items-center gap-2 font-bold">
                            donating ${pay}  <span className="animate-spin mt-1 inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading"></span>
                        </span>
                    </button>
                }
                {!loading && <button className="border-red-600  font-bold py-3 bg-green-500 mt-10 mx-auto block px-16 hover:bg-green-300 transition-all active:scale-90" type="submit" disabled={!stripe || !elements || loading}>
                    Donate ${pay}
                </button>}
            </form>
        </div>

    )
}


export default DonationCheckoutForm
