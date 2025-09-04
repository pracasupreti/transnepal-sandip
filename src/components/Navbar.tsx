import { Link } from 'react-router-dom';
import { HiChevronDown } from 'react-icons/hi';
import logo from '../assets/img/logo/logo.png';
import { NAV_LINKS } from '../data/links';
import type { NavLink } from '../types/links';
import { useState } from 'react';

const isDropdown = (link: NavLink): boolean =>
    Array.isArray(link.children) &&
    link.children.length > 0 &&
    link.type !== 'group';

function DropdownGroup({ group }: { group: NavLink }) {
    return (
        <div className="mb-2" role="group" aria-label={group.label}>
            <p className="px-2 py-1 text-sm font-semibold text-gray-700">
                {group.label}
            </p>
            <ul className="pl-2">
                {group.children?.map(child => (
                    <li
                        key={child.label}
                        className="rounded p-2 hover:bg-gray-200"
                    >
                        {child.path ? (
                            <Link to={child.path}>{child.label}</Link>
                        ) : (
                            <span>{child.label}</span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function DropdownMenu({ items }: { items: NavLink[] }) {
    return (
        <ul
            className="absolute top-full left-0 z-20 mt-2 min-w-[180px] origin-top scale-y-95 transform rounded bg-white p-2 text-black opacity-0 shadow-lg transition-all duration-200 ease-in-out group-hover:block group-hover:scale-y-100 group-hover:opacity-100 group-hover:duration-1000"
            role="menu"
            aria-label="submenu"
        >
            {items.map(item =>
                item.type === 'group' ? (
                    <DropdownGroup key={item.label} group={item} />
                ) : (
                    <li
                        key={item.label}
                        className="rounded p-2 hover:bg-gray-200"
                        role="menuitem"
                    >
                        <Link to={item.path!}>{item.label}</Link>
                    </li>
                )
            )}
        </ul>
    );
}

function NavLinkLabel({
    label,
    hasDropdown
}: {
    label: string;
    hasDropdown: boolean;
}) {
    return (
        <>
            <span>{label}</span>
            {hasDropdown && (
                <HiChevronDown className="h-4 w-4 text-white transition-transform duration-200 group-hover:rotate-180" />
            )}
        </>
    );
}

function NavItem({ link }: { link: NavLink }) {
    const [isHovered, setIsHovered] = useState(false); // Track hover state
    const hasDropdown = isDropdown(link);

    const content = (
        <span
            className="inline-flex items-center gap-1 font-['Inter'] text-base font-normal whitespace-nowrap text-white"
            aria-haspopup={hasDropdown}
            aria-expanded={hasDropdown ? undefined : false}
        >
            <NavLinkLabel label={link.label} hasDropdown={hasDropdown} />
        </span>
    );

    return (
        <li
            className="group relative flex cursor-pointer items-center"
            role="none"
            onMouseEnter={() => setIsHovered(true)} // Trigger on hover
            onMouseLeave={() => setIsHovered(false)} // Reset on mouse leave
        >
            {link.path ? (
                <Link
                    to={link.path}
                    className="inline-flex items-center gap-1 font-['Inter'] text-base font-normal whitespace-nowrap text-white"
                    role="menuitem"
                    aria-haspopup={hasDropdown}
                    aria-expanded={hasDropdown ? false : undefined}
                >
                    <NavLinkLabel
                        label={link.label}
                        hasDropdown={hasDropdown}
                    />
                </Link>
            ) : (
                content
            )}

            {/* Dropdown Menu */}
            {hasDropdown && isHovered && (
                <DropdownMenu items={link.children!} />
            )}
        </li>
    );
}

function NavMenu({ links }: { links: NavLink[] }) {
    const mainLinks = links.filter(link => link.label !== 'Tarrif');

    return (
        <nav aria-label="Main Navigation">
            <ul className="inline-flex h-7 flex-wrap items-center gap-x-10">
                {mainLinks.map(link => (
                    <NavItem key={link.label} link={link} />
                ))}
            </ul>
        </nav>
    );
}

function TarrifLink({ link }: { link: NavLink }) {
    return (
        <nav aria-label="Tarrif Navigation">
            <ul className="inline-flex h-7 w-20 items-center justify-center rounded-[10px] bg-white p-2.5">
                <li>
                    <Link
                        to={link.path!}
                        className="w-full truncate text-center font-['Poppins'] text-base font-normal whitespace-nowrap text-blue-900"
                    >
                        {link.label}
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default function Navbar() {
    const tarrifLink = NAV_LINKS.find(link => link.label === 'Tarrif');

    return (
        <header
            className="w-full px-8 py-4"
            style={{ backgroundColor: 'var(--primary)' }}
        >
            <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-between space-x-4">
                <img
                    src={logo}
                    alt="Logo"
                    className="h-[52.14px] w-auto bg-white"
                    style={{
                        boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}
                />

                <NavMenu links={NAV_LINKS} />

                {tarrifLink && <TarrifLink link={tarrifLink} />}
            </div>
        </header>
    );
}
