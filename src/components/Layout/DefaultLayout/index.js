import Footer from '~/components/Layout/components/Footer';
import Header from '~/components/Layout/components/Header';
import Banner from '../components/Banner';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <Banner />
            <div>
                <div className="content"> {children} </div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
