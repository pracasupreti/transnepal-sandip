import { CiLinkedin } from 'react-icons/ci';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import React from 'react';

type SocialMedia = {
    name: string;
    url: string;
    icon: React.ReactNode;
};

type CONTACT = {
    companyOverview: string;
    address: {
        line1: string;
        city: string;
        country: string;
    };
    contact: {
        telephone: string;
        telephoneUrl: string;
        fax: string;
        faxUrl: string;
        email: string;
        emailUrl: string;
    };
    workingHours: {
        weekdays: string;
    };
    socialMedia: SocialMedia[]; // <--- This must be an array
};

export const CONTACT: CONTACT = {
    companyOverview:
        'TransNepal Freight Services Pvt. Ltd. started in 2002, taking over management of two ICDs in Biratnagar and Bhairahawa on lease from the Nepal Intermodal Transport Development Board for ten years, as directed by the Nepalese government.',
    address: {
        line1: 'TransNepal Tower, Piyush Marg',
        city: 'Biratnagar-05',
        country: 'Nepal'
    },
    contact: {
        telephone: '+977 21 501441',
        telephoneUrl: 'tel:+97721501441',
        fax: '+977 21 501470',
        faxUrl: 'tel:+97721501470',
        email: 'transnepal_brt@transnepaldryport.com',
        emailUrl: 'mailto:transnepal_brt@transnepaldryport.com'
    },
    workingHours: {
        weekdays: '10:00 AM - 6:00 PM'
    },
    socialMedia: [
        {
            name: 'facebook',
            icon: <FaFacebook />,
            url: 'https://www.facebook.com/yourpage'
        },
        {
            name: 'linkedin',
            icon: <CiLinkedin />,
            url: 'https://www.linkedin.com/company/yourcompany'
        },
        {
            name: 'youtube',
            icon: <FaYoutube />,
            url: 'https://www.youtube.com/yourchannel'
        }
    ]
};
