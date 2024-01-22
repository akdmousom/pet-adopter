"use client"
import ContactBanner from "@/components/contact-page/banner/page";
import EmailSection from "@/components/contact-page/emailSection/page";
import Googlemap from "@/components/contact-page/googleMap/page";

const ContactPage = () => {
    return (
        <div>
            <ContactBanner />
            <EmailSection />
            <Googlemap/>
            

        </div>
    );
};

export default ContactPage;