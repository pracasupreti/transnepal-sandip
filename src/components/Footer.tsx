import { FOOTER_LINKS } from '../data/links';
import { Link } from 'react-router-dom';
import { CONTACT } from '../data/contactData/contact';
import { MdOutlineMailOutline } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaFax } from 'react-icons/fa';
import SocialMediaIcons from './ui/SocialMediaIcons';
import footerLogo from '../assets/img/logo/footerLogo.png';
import eclipse from '../assets/img/logo/eclipse.png';

type FooterLink = {
    label: string;
    path?: string;
    external?: boolean;
};

type FooterLinksProps = {
    links: FooterLink[];
    newTab?: boolean;
};

const copyrightNoticeParagraph =
    "text-justify text-white text-lg font-normal font-['Inter'] leading-loose";

const linkList = "text-white text-base font-light font-['Inter'] leading-loose";

const headerStyle =
    "text-white text-xl font-medium font-['Inter'] capitalize mb-2";

function FooterLinks({ links, newTab = false }: FooterLinksProps) {
    return (
        <ul className="flex flex-col space-y-2">
            {links.map(link => {
                if (!link.path) {
                    return (
                        <li
                            key={link.label}
                            className={`${linkList} relative flex items-center pl-6`}
                        >
                            <span className="absolute top-1/2 left-0 h-1.5 w-1.5 -translate-y-1/2 transform rounded-full bg-white" />
                            <span className="hover:underline">
                                {link.label}
                            </span>
                        </li>
                    );
                }

                const content =
                    newTab || link.external ? (
                        <a
                            href={link.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            {link.label}
                        </a>
                    ) : (
                        <Link to={link.path} className="hover:underline">
                            {link.label}
                        </Link>
                    );

                return (
                    <li
                        key={link.label}
                        className={`${linkList} relative flex items-center pl-6`}
                    >
                        <span className="absolute top-1/2 left-0 h-1.5 w-1.5 -translate-y-1/2 transform rounded-full bg-white" />
                        {content}
                    </li>
                );
            })}
        </ul>
    );
}

export default function Footer() {
    return (
        <footer
            style={{ backgroundColor: 'var(--primary)' }}
            className="relative p-6"
        >
            <div className="mx-auto max-w-7xl">
                <div className="mb-4 flex items-start justify-end">
                    <section className={linkList} aria-label="social media">
                        <SocialMediaIcons socialMedia={CONTACT.socialMedia} />
                    </section>
                </div>

                <div className="mb-5 flex flex-wrap justify-between gap-8">
                    <section
                        aria-label="Footer Logo"
                        className="relative flex flex-col items-center"
                    >
                        <h1 className={`${headerStyle} mb-6`}>
                            Join Venture With
                        </h1>
                        <div className="relative">
                            <img
                                src={eclipse}
                                alt="Eclipse"
                                className="h-56 w-56 rounded-full bg-white"
                            />
                            <img
                                src={footerLogo}
                                alt="Footer Logo"
                                className="absolute h-32 w-56"
                                style={{
                                    top: '50%',
                                    transform: 'translateY(-50%)'
                                }}
                            />
                        </div>
                    </section>

                    <section
                        aria-label="Useful Links"
                        className="flex flex-col items-start"
                    >
                        <h1 className={`${headerStyle} mb-5`}>Useful Links</h1>
                        <FooterLinks links={FOOTER_LINKS.usefulLinks} newTab />
                    </section>

                    <div className="flex max-w-[560px] flex-col">
                        <p className="h-40 justify-start text-justify font-['Inter'] text-sm leading-relaxed font-normal text-white/80 capitalize">
                            TransNepal Freight Services Pvt. Ltd., was
                            incorporated in the year 2002 under the Nepalese
                            Company Act, and started operation from 17th April,
                            2002 by taking over operation and management of the
                            two ICDs’ at Biratnagar and Bhairahawa on lease for
                            a period of ten years from Nepal Intermodal
                            Transport Development Board a body constituted by
                            the Government of Nepal.
                        </p>

                        <section
                            aria-label="Connect With Us"
                            className="mt-6 flex flex-col items-start"
                        >
                            <h1 className={headerStyle}>Contact Us</h1>
                            <ul className="grid grid-cols-2 gap-y-2">
                                <li
                                    className={`${linkList} ml-auto flex items-center`}
                                >
                                    <MdOutlineMailOutline
                                        className="mr-2 inline-block text-white"
                                        size={20}
                                    />
                                    <a
                                        href={`mailto:${CONTACT.contact.email}`}
                                        className="hover:underline"
                                    >
                                        {CONTACT.contact.email}
                                    </a>
                                </li>
                                <li className={`${linkList} flex items-center`}>
                                    <BsFillTelephoneFill
                                        className="mr-2 inline-block text-white"
                                        size={20}
                                    />
                                    <a
                                        href={`tel:${CONTACT.contact.telephone}`}
                                        className="hover:underline"
                                    >
                                        {CONTACT.contact.telephone}
                                    </a>
                                </li>
                                <li className={`${linkList} flex items-center`}>
                                    <FaFax
                                        className="mr-2 inline-block text-white"
                                        size={20}
                                    />
                                    <a
                                        href={`tel:${CONTACT.contact.fax}`}
                                        className="ml-2 hover:underline"
                                    >
                                        {CONTACT.contact.fax}
                                    </a>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>

                <div className="mt-3 w-full border-b-2 border-gray-300" />

                <section
                    className="flex flex-col justify-between gap-4 md:flex-row"
                    aria-label="Copyright"
                >
                    <p className={copyrightNoticeParagraph}>
                        All rights Reserved | Copyright © 2024 Trans Nepal
                        Freight Services Pvt. Ltd.
                    </p>
                    <p className={copyrightNoticeParagraph}>
                        Technology Partner | Pracas Infosys
                    </p>
                </section>
            </div>
        </footer>
    );
}
