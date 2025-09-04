import { FOOTER_LINKS } from '../data/links';

import { Link } from 'react-router-dom';

type FooterLink = {
    label: string;
    path?: string;
    external?: boolean; // Optional flag if you want to distinguish external links
};

type FooterLinksProps = {
    links: FooterLink[];
    newTab?: boolean; // If true, open links in new tab
    className?: string;
};

function FooterLinks({
    links,
    newTab = false,
    className = ''
}: FooterLinksProps) {
    return (
        <ul className={`space-y-2 text-white ${className}`}>
            {links.map(link => {
                if (!link.path) {
                    return (
                        <li key={link.label}>
                            <span className="hover:underline">
                                {link.label}
                            </span>
                        </li>
                    );
                }

                // If external or newTab, use <a> with target _blank
                if (newTab || link.external) {
                    return (
                        <li key={link.label}>
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

                // Otherwise use react-router Link
                return (
                    <li key={link.label}>
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
        <footer className="flex items-center justify-between bg-(--primary)">
            <section>
                <h1 className="text-white">Useful Links</h1>
                <FooterLinks links={FOOTER_LINKS.usefulLinks} newTab={true} />
            </section>

            <section>
                <h1 className="text-white">Quick Links</h1>
                <FooterLinks links={FOOTER_LINKS.quickLinks} />
            </section>
        </footer>
    );
}
