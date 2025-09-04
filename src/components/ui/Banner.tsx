type BannerProps = {
    title: string;
    subtitle: string;
};
export default function Banner({ title, subtitle }: BannerProps) {
    return (
        <section
            ria-label="Banner"
            className="flex h-52 w-full items-center justify-center bg-blue-950"
        >
            <div className="flex flex-col items-center justify-center">
                <h1 className="mb-2 text-center font-['Poppins'] text-5xl font-semibold text-white">
                    {title}
                </h1>
                <p className="h-6 w-96 text-center font-['Inter'] text-xs font-normal text-white">
                    {subtitle}
                </p>
            </div>
        </section>
    );
}
