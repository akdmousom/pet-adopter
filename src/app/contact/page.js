"use client"
import ContactBanner from "@/Components/contact-page/banner/page";
import EmailSection from "@/Components/contact-page/emailSection/page";
import Googlemap from "@/Components/contact-page/googleMap/page";

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