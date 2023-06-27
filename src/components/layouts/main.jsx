import Header from "../main/Header";
import Footer from "../main/Footer";

const MainLayout = ({ children }) => {
    return (
        <div className="bg-gray-100 h-screen">
            <Header />
                {children}
            {/* <div className="container max-w-4xl m-auto"> // @Note (Seyed) This messes with the flex :/
            </div> */}
            <Footer />
        </div>
    )
}

export default MainLayout;
