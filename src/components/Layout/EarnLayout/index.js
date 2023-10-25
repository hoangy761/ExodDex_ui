import Footer from '~/components/Layout/components/Footer';
import Header from '~/components/Layout/components/Header';
import Banner from '~/components/Layout/components/Banner';

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
