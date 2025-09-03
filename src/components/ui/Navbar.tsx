import { NAV_LINKS } from '../../data/links';
import { Link } from 'react-router-dom';

/** these are the helper components */
const NavigationLinks = () => {
    return NAV_LINKS.map(link => (
        <li key={link.label}>
            {link.path ? (
                <Link to={link.path}>{link.label}</Link>
            ) : (
                <span>{link.label}</span>
            )}

            {link.children && (
                <ul>
                    {link.children.map(sublink => (
                        <li key={sublink.label}>
                            {sublink.path ? (
                                <Link to={sublink.path}>{sublink.label}</Link>
                            ) : (
                                <span>{sublink.label}</span>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </li>
    ));
};

export default function Navbar() {
    return (
        <nav>
            <ul>
                <NavigationLinks />
            </ul>
        </nav>
    );
}
