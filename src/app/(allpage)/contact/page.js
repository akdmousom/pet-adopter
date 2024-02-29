"use client"
import ContactBanner from "@/components/contact-page/banner/page";
import EmailSection from "@/components/contact-page/emailSection/page";
import Googlemap from "@/components/contact-page/googleMap/page";

const ContactPage = () => {
    return (
        <div className="dark:bg-[#1B2430]">
            <ContactBanner />
            <EmailSection />
            <Googlemap />
        </div>
    );
};

export default ContactPage;