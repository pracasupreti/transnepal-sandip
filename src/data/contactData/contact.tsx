import { CiLinkedin } from 'react-icons/ci';
import { FaFacebook, FaFax, FaYoutube } from 'react-icons/fa';
import React from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';

type SocialMedia = {
    name: string;
    url: string;
    icon: React.ReactNode;
};

type Contact = SocialMedia & {
    info: string;
};

type CONTACT = {
    companyOverview: string;
    address: {
        line1: string;
        city: string;
        country: string;
    };
    contact: Contact[];
    workingHours: {
        weekdays: string;
    };
    socialMedia: SocialMedia[];
};

export const CONTACT: CONTACT = {
    companyOverview:
        'TransNepal Freight Services Pvt. Ltd. started in 2002, taking over management of two ICDs in Biratnagar and Bhairahawa on lease from the Nepal Intermodal Transport Development Board for ten years, as directed by the Nepalese government.',
    address: {
        line1: 'TransNepal Tower, Piyush Marg',
        city: 'Biratnagar-05',
        country: 'Nepal'
    },
    contact: [
        {
            name: 'email',
            info: 'transnepal_brt@transnepaldryport.com',
            url: 'mailto:transnepal_brt@transnepaldryport.com',
            icon: <MdOutlineMailOutline />
        },
        {
            name: 'telephone',
            info: '+977 21 501441',
            url: 'tel:+97721501441',
            icon: <BsFillTelephoneFill />
        },
        {
            name: 'fax',
            info: '+977 21501470',
            url: 'tel:+97721501470',
            icon: <FaFax />
        }
    ],
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
