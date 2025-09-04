export type NavLink = {
    label: string;
    path?: string;
    children?: NavLink[];
    element?: React.ReactNode;
};

export type FooterLink = NavLink & {
    imgSrc?: string;
    imgAlt?: string;
    imgHeight?: number;
};

export type FooterLinks = {
    usefulLinks: FooterLink[];
    quickLinks: FooterLink[];
    jointVentures: FooterLink[];
};
