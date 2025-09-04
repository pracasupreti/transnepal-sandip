import { ABOUT_US } from '../data/homePageData/aboutUs';

export default function Home() {
    return (
        <main>
            <section>
                <h1>{ABOUT_US.title}</h1>
                <p>{ABOUT_US.description}</p>
            </section>
        </main>
    );
}
