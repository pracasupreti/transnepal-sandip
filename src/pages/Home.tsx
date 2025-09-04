import Banner from '../components/ui/Banner';
import { ABOUT_US } from '../data/homePageData/aboutUs';

export default function Home() {
    return (
        <main>
            <Banner title="Home page" subtitle="This is home page" />
            <section>
                <h1>{ABOUT_US.title}</h1>
                <p>{ABOUT_US.description}</p>
            </section>
        </main>
    );
}
