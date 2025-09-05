import React from 'react';

type SocialMedia = {
    name: string;
    url: string;
    icon: React.ReactNode;
};

type SocialMediaIconsProps = {
    socialMedia: SocialMedia[];
};

export default function SocialMediaIcons({
    socialMedia
}: SocialMediaIconsProps) {
    return (
        <div className="flex items-center justify-center space-x-6">
            {socialMedia.map(({ name, url, icon }) => (
                <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    title={name}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-900 text-2xl text-white"
                >
                    {icon}
                </a>
            ))}
        </div>
    );
}
