import BoardOfDirector from '../pages/about/BoardOfDirector';
import HistoriesAndMemories from '../pages/about/HistoriesAndMemories';
import Holidays from '../pages/about/Holidays';
import ManagementTeam from '../pages/about/ManagementTeam';
import QACANDCOC from '../pages/about/QACANDCOC';
import SolientFeatures from '../pages/about/SolientFeatures';
import VisionAndMission from '../pages/about/VisionAndMission';
import TransilkTemninalsPvtLtd from '../pages/associates/TransilkTemninalsPvtLtd';
import TransNepalTRSLogiparkPvtLtd from '../pages/associates/TransNepalTRSLogiparkPvtLtd';
import Contact from '../pages/Contact';
import CSR from '../pages/CSR';
import Gallery from '../pages/Gallery';
import Home from '../pages/Home';
import NewsAndEvent from '../pages/NewsAndEvent';
import AgencyServices from '../pages/services/AgencyServices';
import RentalService from '../pages/services/RentalService';
import ICDChobhar from '../pages/services/TerminalManagement/ICDChobhar';
import ICDKakarvitta from '../pages/services/TerminalManagement/ICDKakarvitta';
import ICDTatopani from '../pages/services/TerminalManagement/ICDTatopani';
import ICPBiratnagar from '../pages/services/TerminalManagement/ICPBiratnagar';
import Transportation from '../pages/services/Transportation';
import Tarrif from '../pages/Tarrif';
import type { FooterLinks, NavLink } from '../types/links';

export const NAV_LINKS: NavLink[] = [
    {
        label: 'Home',
        path: '/',
        element: <Home />
    },

    {
        label: 'About Us',
        children: [
            {
                label: 'Board of Director',
                path: '/board-of-director',
                element: <BoardOfDirector />
            },
            {
                label: 'Management Team',
                path: '/management-team',
                element: <ManagementTeam />
            },

            {
                label: 'Vision and Mission',
                path: '/vision-mission',
                element: <VisionAndMission />
            },
            {
                label: 'Solient Features',
                path: '/solient-features',
                element: <SolientFeatures />
            },
            {
                label: 'History and Memories',
                path: '/history-memories',
                element: <HistoriesAndMemories />
            },
            {
                label: 'QAC &COC',
                path: '/qac-coc',
                element: <QACANDCOC />
            },
            {
                label: 'Holidays',
                path: '/Holidays',
                element: <Holidays />
            }
        ]
    },

    {
        label: 'Services',
        children: [
            {
                label: 'Terminal Management',
                type: 'group',
                children: [
                    {
                        label: 'ICP Biratnagar',
                        path: '/icp-biratnagar',
                        element: <ICPBiratnagar />
                    },
                    {
                        label: 'ICD Kakarvitta',
                        path: '/icd-kakarvitta',
                        element: <ICDKakarvitta />
                    },
                    {
                        label: 'ICD Tatopani',
                        path: '/icd-tatopani',
                        element: <ICDTatopani />
                    },
                    {
                        label: 'ICD Chobhar',
                        path: '/icd-chobhar',
                        element: <ICDChobhar />
                    }
                ]
            },
            {
                label: 'Agency Services',
                path: '/agency-services',
                element: <AgencyServices />
            },
            {
                label: 'Rental Services',
                path: '/rental-services',
                element: <RentalService />
            },
            {
                label: 'Transportation',
                path: '/transportation',
                element: <Transportation />
            }
        ]
    },

    {
        label: 'Associates',
        children: [
            {
                label: 'Transilk Terminals Pvt Ltd',
                path: '/transilk-terminals-pvt-ltd',
                element: <TransilkTemninalsPvtLtd />
            },
            {
                label: 'TransNepal TRS Logipark Pvt Ltd',
                path: '/transnepal-trs-logipark-pvt-ltd',
                element: <TransNepalTRSLogiparkPvtLtd />
            }
        ]
    },
    {
        label: 'Gallery',
        path: '/gallery',
        element: <Gallery />
    },

    {
        label: 'Contact',
        path: '/contact',
        element: <Contact />
    },

    {
        label: 'News & Events',
        path: '/newandevents',
        element: <NewsAndEvent />
    },

    {
        label: 'CSR',
        path: '/csr',
        element: <CSR />
    },

    {
        label: 'Tarrif',
        path: '/tarrif',
        element: <Tarrif />
    }
];

export const FOOTER_LINKS: FooterLinks = {
    usefulLinks: [
        {
            label: 'Department Of Customs',
            path: 'https://www.customs.gov.np/en/'
        },
        { label: 'NITDB Board', path: 'http://www.nitdb.org/' },
        { label: 'FNCCI', path: 'http://www.fncci.org/' },
        {
            label: 'Indian Embassy Nepal',
            path: 'https://www.indembkathmandu.gov.in/'
        },
        { label: 'Check Email', path: '#' }
    ],
    quickLinks: [
        {
            label: 'Management Team',
            path: '/management-team',
            element: <ManagementTeam />
        },
        {
            label: 'Biratnagar ICP',
            path: '/icp-biratnagar',
            element: <ICPBiratnagar />
        },
        {
            label: 'Kakarbhitta ICD',
            path: '/icd-kakarvitta',
            element: <ICDKakarvitta />
        },
        { label: 'Tarrif', path: '/tarrif', element: <Tarrif /> },
        {
            label: 'News & Events',
            path: '/newsandevents',
            element: <NewsAndEvent />
        }
    ],
    jointVentures: [
        {
            label: 'Track your cargo',
            path: 'https://track.thegkgroup.com/web-gk/',
            imgSrc: '/assets/images/partnership.png',
            imgAlt: 'Track your cargo',
            imgHeight: 20
        }
    ]
};
