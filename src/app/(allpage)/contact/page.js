"use client"
import GetInTouch from "@/components/contact-page/GetInTouch/GetInTouch";
import Subscribe from "@/components/contact-page/Subscribe/Subscribe";
import ContactBanner from "@/components/contact-page/banner/page";
import EmailSection from "@/components/contact-page/emailSection/page";
import Googlemap from "@/components/contact-page/googleMap/page";

const ContactPage = () => {
    return (
        <div className='bg-white dark:bg-[#1B2430]'>
            <ContactBanner />
            <GetInTouch />
            <EmailSection />
            <Subscribe/>
            <Googlemap />
        </div>
    );
};

export default ContactPage;