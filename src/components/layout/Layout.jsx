//Component
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = ({ children }) => {
    return (
        <div
        className="min-h-screen flex justify-between flex-col"
        >
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;