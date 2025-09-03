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
import ICDChobhar from '../pages/services/TerminalManagement/ICDChobhar';
import ICDKakarvitta from '../pages/services/TerminalManagement/ICDKakarvitta';
import ICDTatopani from '../pages/services/TerminalManagement/ICDTatopani';
import ICPBiratnagar from '../pages/services/TerminalManagement/ICPBiratnagar';
import Tarrif from '../pages/Tarrif';

import type { NavLinks } from '../types/NavLinks';

export const NAV_LINKS: NavLinks[] = [
    {
        label: 'home',
        path: '/',
        element: <Home />
    },

    {
        label: 'aboutus',
        path: '/about',
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
        label: 'Tarrif',
        path: '/tarrif',
        element: <Tarrif />
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
        label: 'News and Events',
        path: '/newandevents',
        element: <NewsAndEvent />
    },

    {
        label: 'CSR',
        path: '/csr',
        element: <CSR />
    }
];
