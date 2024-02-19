
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './UserReview.css'


import { EffectCoverflow, Autoplay, Pagination, } from 'swiper/modules';
import Image from 'next/image';

const ReviewCard = ({ item }) => {
    const {name}=item;
    return (
        <div className='mt-20 mb-12'>

            <div className='text-center'>
                <h4 className='text-base font-semibold text-[#F04336]'>Users opinions{name}</h4>
                <h1 className='text-3xl lg:text-5xl text-center font-bold pb-6'>Users Review</h1>
            </div>


            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Autoplay, Pagination]}
                className="mySwiper"
            >

                {/* Card 1  */}
                <SwiperSlide className='bg-pink-100 rounded-md'>
                    <div className='text-center'>
                        <Image className='ml-[106px] h-24 w-24 object-cover' width={200} height={200} src="https://i.ibb.co/cYHQRCp/team4.jpg" alt="" />

                        <div>
                            <h1 className='text-lg mt-2'>David Parker</h1>

                            {/* Rating 1 */}
                            <div className="rating w-20">
                                <input type="radio" className="mask mask-star bg-yellow-400" />
                                <input type="radio" className="mask mask-star bg-yellow-400" />
                                <input type="radio" className="mask mask-star bg-yellow-400" />
                                <input type="radio" className="mask mask-star " />
                                <input type="radio" className="mask mask-star " />
                            </div>

                            <p>This is a very good pet adoption application. And their service is very good.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ReviewCard;