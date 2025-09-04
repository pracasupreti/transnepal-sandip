import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { AppRoutes } from './utils/AppRoutes';

function App() {
    return (
        <>
            <Navbar />
            <AppRoutes />
            <Footer />
        </>
    );
}

export default App;
