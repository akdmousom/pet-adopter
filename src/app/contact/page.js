import Banner from '@/components/contact-page/banner/page';
import EmailSection from '@/components/contact-page/emailSection/page';
import SocialMediaSection from '@/components/contact-page/socialMediaSection/page';
import React from 'react';

const ContactPage = () => {
    return (
        <div>
            <Banner />
            <EmailSection />
            <SocialMediaSection />

        </div>
    );
};

export default ContactPage;