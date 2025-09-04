import { NAV_LINKS } from '../data/links';
import logo from '../assets/img/logo/logo.png';
import { Link } from 'react-router-dom';
import { HiChevronDown } from 'react-icons/hi';

type NavLink = {
    label: string;
    path?: string;
    children?: NavLink[];
};

type NavbarProps = {
    links: NavLink[];
};
function NavLink({ links }: NavbarProps) {
    return (
        <nav>
            <ul className="flex items-center space-x-12 text-white">
                {links.map(link => {
                    const hasChildren = !!link.children?.length;

                    return (
                        <li key={link.label} className="group relative">
                            {link.path ? (
                                <Link
                                    to={link.path}
                                    className="inline-flex items-center space-x-1 hover:underline"
                                >
                                    <span>{link.label}</span>
                                    {hasChildren && (
                                        <HiChevronDown
                                            className="h-4 w-4"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Link>
                            ) : (
                                <span className="hover:underline">
                                    {link.label}
                                </span>
                            )}

                            {/* Dropdown */}
                            {hasChildren && (
                                <ul className="pointer-events-none absolute top-full left-0 z-20 mt-2 w-48 rounded bg-white p-2 text-black opacity-0 shadow-lg transition-opacity duration-200 ease-in-out group-hover:pointer-events-auto group-hover:opacity-100">
                                    {link.children!.map(child => (
                                        <li
                                            key={child.label}
                                            className="rounded p-2 hover:bg-gray-200"
                                        >
                                            {child.path ? (
                                                <Link
                                                    to={child.path}
                                                    className="block"
                                                >
                                                    {child.label}
                                                </Link>
                                            ) : (
                                                <span>{child.label}</span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default function Navbar() {
    return (
        <header className="w-full bg-(--primary) px-8 py-4">
            <div className="relative mx-auto flex max-w-7xl items-center justify-between">
                {/* Logo */}
                <img
                    src={logo}
                    alt="logo"
                    className="h-[52.14px] w-[165.46px] bg-white"
                    style={{
                        boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}
                />

                {/* Navigation */}
                <nav>
                    <NavLink links={NAV_LINKS} />
                </nav>
            </div>
        </header>
    );
}
