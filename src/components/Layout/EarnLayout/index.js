import Footer from '~/components/Layout/DefaultLayout/Footer';
import Header from '~/components/Layout/DefaultLayout/Header';
import Banner from '~/components/Layout/DefaultLayout/Banner';

function EarnLayout({ children }) {
    return (
        <div>
            <Header />
            <Banner />
            <div className="container">
                <div className="content"> {children} </div>
            </div>
            <Footer />
        </div>
    );
}

export default EarnLayout;
