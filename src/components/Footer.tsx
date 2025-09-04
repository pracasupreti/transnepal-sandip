import { IoIosArrowForward } from 'react-icons/io';
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
    "text-justify justify-start text-white text-lg font-normal font-['Inter'] leading-loose";

const linkList =
    "flex items-center text-white text-base font-normal font-['Inter'] leading-loose space-x-2";

const headerStyle =
    "inline-block border-b-2 border-gray-300 pb-1 mb-4 text-white text-xl font-bold font-['Inter']";

function FooterLinks({ links, newTab = false }: FooterLinksProps) {
    return (
        <ul className="flex flex-col space-y-2">
            {links.map(link => {
                if (!link.path) {
                    return (
                        <li className={linkList} key={link.label}>
                            <span className="hover:underline">
                                {link.label}
                            </span>
                        </li>
                    );
                }

                if (newTab || link.external) {
                    return (
                        <li key={link.label} className={linkList}>
                            <IoIosArrowForward />
                            <a
                                href={link.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                {link.label}
                            </a>
                        </li>
                    );
                }

                return (
                    <li key={link.label} className={linkList}>
                        <IoIosArrowForward />
                        <Link to={link.path} className="hover:underline">
                            {link.label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

export default function Footer() {
    return (
        <footer style={{ backgroundColor: 'var(--primary)' }} className="p-6">
            <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-8 py-4">
                <section aria-label="Contact Us" className="flex flex-col">
                    <h1 className={headerStyle}>Contact Us</h1>
                    <ul className="flex flex-col space-y-2">
                        <li className={linkList}>
                            <MdOutlineMailOutline
                                className="mr-2 text-white"
                                size={20}
                            />
                            <a
                                href={`mailto:${CONTACT.contact.email}`}
                                className="hover:underline"
                            >
                                {CONTACT.contact.email}
                            </a>
                        </li>
                        <li className={linkList}>
                            <BsFillTelephoneFill
                                className="mr-2 text-white"
                                size={20}
                            />
                            <a
                                href={`tel:${CONTACT.contact.telephone}`}
                                className="hover:underline"
                            >
                                {CONTACT.contact.telephone}
                            </a>
                        </li>
                        <li className={linkList}>
                            <FaFax className="mr-2 text-white" size={20} />
                            <a
                                href={`tel:${CONTACT.contact.fax}`}
                                className="ml-2 hover:underline"
                            >
                                {CONTACT.contact.fax}
                            </a>
                        </li>
                        <li className={linkList} aria-label="social media">
                            <SocialMediaIcons
                                socialMedia={CONTACT.socialMedia}
                            />
                        </li>
                    </ul>
                </section>

                {/* Useful Links */}
                <section aria-label="Useful Links" className="flex flex-col">
                    <h1 className={headerStyle}>Useful Links</h1>
                    <FooterLinks links={FOOTER_LINKS.usefulLinks} newTab />
                </section>

                <section aria-label="Quick Links" className="flex flex-col">
                    <h1 className={headerStyle}>Quick Links</h1>
                    <FooterLinks links={FOOTER_LINKS.quickLinks} />
                </section>

                <section
                    aria-label="Footer Logo"
                    className="relative mt-4 flex items-center justify-center"
                >
                    <img
                        src={eclipse}
                        alt="Eclipse"
                        className="h-56 w-56 rounded-full bg-white"
                    />

                    <img
                        src={footerLogo}
                        alt="Footer Logo"
                        className="absolute h-32 w-56"
                        style={{ top: '50%', transform: 'translateY(-50%)' }}
                    />
                </section>
            </div>
            <div className="border-b-2 border-gray-300"></div>
            <section className="flex justify-between" aria-label="Copyright">
                <p className={copyrightNoticeParagraph}>
                    All rights Reserved | Copyright © 2024 Trans Nepal Freight
                    Services Pvt. Ltd.
                </p>
                <p className={copyrightNoticeParagraph}>
                    Technology Partner | Pracas Infosys
                </p>
            </section>
        </footer>
    );
}
