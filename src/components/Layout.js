import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({children}) => {
    return(
        <div className="bg-gray-100 h-screen">
            <Navigation/>
            <div className="container max-w-4xl m-auto">
                {children}
            </div>
            <Footer/>
        </div>
    )
}
 
export default Layout;