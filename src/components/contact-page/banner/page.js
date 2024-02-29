import Image from "next/image";

import img from '../../../../public/images/contact-banner.png'

const ContactBanner = () => {
    return (
        <div>
            <Image src={img} layout="responsive" alt="Contact page" />
        </div>
    );
};

export default ContactBanner;