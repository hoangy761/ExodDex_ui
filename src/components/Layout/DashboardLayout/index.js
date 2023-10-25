import Footer from '~/components/Layout/components/Footer';

function DashboardLayout({ children }) {
    return (
        <div>
            <div className="container">
                <div className="content"> {children} </div>
            </div>
            <Footer />
        </div>
    );
}

export default DashboardLayout;
