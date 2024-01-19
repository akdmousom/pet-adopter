import Image from "next/image";

import img from '../../../../public/images/contact-banner.png'
const Banner = () => {
    return (
        <div>
            <Image src={img} layout="responsive" width='full' alt="Contact page" />
        </div>
    );
};

export default Banner;