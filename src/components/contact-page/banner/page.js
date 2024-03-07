import Image from "next/image";

import img from '../../../../public/images/contactcover.jpg'

const ContactBanner = () => {
    return (
        <div>
           <Image src={img} width={600} height={600} className="w-full md:h-[550px]" alt=""/>
          
        </div>
    );
};

export default ContactBanner;