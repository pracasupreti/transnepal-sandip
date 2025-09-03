export type NavLinks = {
    label: string;
    path?: string;
    children?: NavLinks[];
    element?: React.ReactNode;
};
